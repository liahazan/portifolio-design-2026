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
          width={725}
          height={478}
          priority
        />
        <Image
          className="brand-logo brand-logo--mobile"
          src="/logo-mobile.png"
          alt=""
          width={1109}
          height={287}
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
        <p className="signature-title">Product &amp; Visual Designer</p>
        <p className="signature-text">
          Soluções simples para problemas complexos, pensadas a partir das
          pessoas.
        </p>
        <p className="signature-tagline">Direção de Arte · Animação</p>
      </div>
    </aside>
  );
}
