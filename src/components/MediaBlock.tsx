"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ImageBlock } from "@/data/types";

export function MediaBlock({
  block,
  priority,
}: {
  block: ImageBlock;
  priority?: boolean;
}) {
  const { overlay } = block;
  const [baseLoaded, setBaseLoaded] = useState(false);
  const [overlayLoaded, setOverlayLoaded] = useState(false);
  const baseRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLImageElement>(null);

  // Se a mídia já vier do cache do navegador, o evento onLoad pode nunca
  // disparar (ela já está "complete" antes do listener ser anexado).
  useEffect(() => {
    if (baseRef.current?.complete) setBaseLoaded(true);
  }, []);

  // O overlay só é montado depois que a base carrega, então esse efeito
  // roda de novo quando isso acontece e a ref passa a existir.
  useEffect(() => {
    if (overlay && overlayRef.current?.complete) setOverlayLoaded(true);
  }, [overlay, baseLoaded]);

  const allLoaded = overlay ? baseLoaded && overlayLoaded : baseLoaded;

  return (
    <div
      className="media-wrap"
      style={{ aspectRatio: `${block.width} / ${block.height}` }}
    >
      {/* Sem overlay: fica atrás da imagem e some sozinho conforme ela pinta
          na tela (não depende de hidratação). Com overlay: fica por cima e só
          some quando o estado confirmar que os dois terminaram. */}
      <div
        className={`media-skeleton${overlay ? " media-skeleton--top" : ""}`}
        aria-hidden="true"
        hidden={allLoaded}
      />
      {block.type === "gif" ? (
        // next/image não anima gifs de forma confiável, então usamos <img> puro.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={baseRef}
          className="project-image"
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          onLoad={() => setBaseLoaded(true)}
        />
      ) : (
        <Image
          ref={baseRef}
          className="project-image"
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          sizes="(max-width: 700px) 100vw, 1100px"
          quality={100}
          priority={priority}
          onLoad={() => setBaseLoaded(true)}
        />
      )}
      {overlay && baseLoaded && (
        <div
          className="media-overlay"
          style={{ aspectRatio: `${overlay.width} / ${overlay.height}` }}
        >
          {overlay.type === "gif" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              ref={overlayRef}
              className="media-overlay-img"
              src={overlay.src}
              alt={overlay.alt}
              width={overlay.width}
              height={overlay.height}
              onLoad={() => setOverlayLoaded(true)}
            />
          ) : (
            <Image
              ref={overlayRef}
              className="media-overlay-img"
              src={overlay.src}
              alt={overlay.alt}
              width={overlay.width}
              height={overlay.height}
              sizes="(max-width: 700px) 100vw, 1100px"
              quality={100}
              onLoad={() => setOverlayLoaded(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}
