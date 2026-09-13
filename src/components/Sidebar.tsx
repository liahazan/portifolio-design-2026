"use client";

import Image from "next/image";
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
        <Image
          className="brand-logo brand-logo--desktop"
          src="/logo-desktop.png"
          alt=""
          width={738}
          height={516}
          priority
        />
        <Image
          className="brand-logo brand-logo--mobile"
          src="/logo-mobile.png"
          alt=""
          width={1155}
          height={356}
          priority
        />
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
