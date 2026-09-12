import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Lia Hazan — Portfólio interativo",
  description: "Design gráfico, direção de arte e animação — Lia Hazan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>
        <Sidebar />
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
