import { execFile } from "node:child_process";
import { randomUUID } from "node:crypto";
import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const execFileAsync = promisify(execFile);
const maxFolderDepth = 5;

const windowsUnrarCandidates = [
  "C:\\Program Files\\WinRAR\\UnRAR.exe",
  "C:\\Program Files (x86)\\WinRAR\\UnRAR.exe",
  "C:\\Program Files\\WinRAR\\WinRAR.exe",
  "C:\\Program Files (x86)\\WinRAR\\WinRAR.exe",
];

type ExtractedXml = {
  name: string;
  relativePath: string;
  text: string;
};

function folderDepth(relativePath: string) {
  return Math.max(relativePath.split(/[\\/]/).length - 1, 0);
}

async function fileExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveUnrarCommand() {
  const configuredPath = process.env.NFCE_UNRAR_PATH || process.env.UNRAR_PATH;
  if (configuredPath) return configuredPath;

  if (process.platform === "win32") {
    for (const candidate of windowsUnrarCandidates) {
      if (await fileExists(candidate)) return candidate;
    }
  }

  return "unrar";
}

function rarErrorMessage(error: unknown) {
  if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
    return process.platform === "win32"
      ? "UnRAR nao encontrado no servidor. Instale o WinRAR ou configure NFCE_UNRAR_PATH com o caminho do UnRAR.exe."
      : "UnRAR nao encontrado no servidor. Instale com: sudo apt install unrar";
  }

  return error instanceof Error ? error.message : "Falha ao extrair RAR.";
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

    const unrarCommand = await resolveUnrarCommand();
    await execFileAsync(unrarCommand, ["x", "-idq", "-y", archivePath, extractPath]);

    const files = await collectXmlFiles(extractPath);

    return NextResponse.json({ files });
  } catch (error) {
    return NextResponse.json({ error: rarErrorMessage(error) }, { status: 500 });
  } finally {
    await rm(workdir, { recursive: true, force: true });
  }
}
