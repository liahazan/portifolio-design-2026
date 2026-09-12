"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname.startsWith("/projetos");
  const isAbout = pathname === "/sobre";

  return (
    <aside className="sidebar">
      <Link
        href="/"
        className="brand"
        aria-label="Lia Hazan — voltar à galeria"
      >
        <span>LIA</span>
        <br />
        <span>HAZAN</span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/" aria-current={isHome ? "page" : undefined}>
          PROJETOS
        </Link>
        <Link href="/sobre" aria-current={isAbout ? "page" : undefined}>
          SOBRE
        </Link>
      </nav>
      <div className="signature">
        Design gráfico
        <br />
        Direção de arte · Animação
      </div>
    </aside>
  );
}
