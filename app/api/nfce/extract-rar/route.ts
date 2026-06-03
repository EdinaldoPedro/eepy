import { execFile } from "node:child_process";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const execFileAsync = promisify(execFile);
const unrarPath = "C:\\Program Files\\WinRAR\\UnRAR.exe";
const maxFolderDepth = 5;

type ExtractedXml = {
  name: string;
  relativePath: string;
  text: string;
};

function folderDepth(relativePath: string) {
  return Math.max(relativePath.split(/[\\/]/).length - 1, 0);
}

async function collectXmlFiles(directory: string, root = directory): Promise<ExtractedXml[]> {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      const relativePath = path.relative(root, fullPath);

      if (entry.isDirectory()) {
        if (folderDepth(relativePath) >= maxFolderDepth) return [];
        return collectXmlFiles(fullPath, root);
      }

      if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== ".xml") {
        return [];
      }

      return [
        {
          name: entry.name,
          relativePath,
          text: await readFile(fullPath, "utf-8"),
        },
      ];
    }),
  );

  return files.flat();
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const archive = formData.get("file");

  if (!(archive instanceof File)) {
    return NextResponse.json({ error: "Arquivo RAR nao recebido." }, { status: 400 });
  }

  const workdir = path.join(tmpdir(), `eepy-rar-${randomUUID()}`);
  const archivePath = path.join(workdir, "entrada.rar");
  const extractPath = path.join(workdir, "extraido");

  try {
    await mkdir(extractPath, { recursive: true });
    await writeFile(archivePath, Buffer.from(await archive.arrayBuffer()));
    await execFileAsync(unrarPath, ["x", "-idq", "-y", archivePath, extractPath]);

    const files = await collectXmlFiles(extractPath);

    return NextResponse.json({ files });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Falha ao extrair RAR.";
    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    await rm(workdir, { recursive: true, force: true });
  }
}
