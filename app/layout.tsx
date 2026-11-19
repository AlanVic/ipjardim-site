import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igreja Presbiteriana do Jardim",
  description:
    "Bem-vindo à Igreja Presbiteriana do Jardim — uma comunidade de fé, amor e esperança fundada na Palavra de Deus.",
  keywords: ["igreja", "presbiteriana", "jardim", "culto", "cristã", "evangélica"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-mosk antialiased">{children}</body>
    </html>
  );
}
