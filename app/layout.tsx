import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brandSans = localFont({
  src: "./fonts/bahnschrift.ttf",
  variable: "--font-brand-sans",
  display: "swap",
  fallback: ["Segoe UI", "sans-serif"],
});

const brandMono = localFont({
  src: [
    {
      path: "./fonts/consola.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/consolab.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brand-mono",
  display: "swap",
  fallback: ["Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: "eepy | Portfólio de analista pleno e desenvolvedor",
  description:
    "Portfólio profissional reunindo vivência fiscal e administrativa, base técnica em TI e desenvolvimento de automações e produtos próprios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${brandSans.variable} ${brandMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
