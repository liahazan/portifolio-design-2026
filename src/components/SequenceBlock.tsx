"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SequenceBlock as SequenceBlockType } from "@/data/types";

export function SequenceBlock({ block }: { block: SequenceBlockType }) {
  const { frames, alt, width, height, intervalMs = 1500 } = block;
  const [loadedCount, setLoadedCount] = useState(0);
  const [index, setIndex] = useState(0);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const allLoaded = loadedCount >= frames.length;

  // Frames já em cache do navegador podem nunca disparar onLoad.
  useEffect(() => {
    const alreadyComplete = imgRefs.current.filter((img) => img?.complete).length;
    if (alreadyComplete > 0) {
      setLoadedCount((c) => Math.max(c, alreadyComplete));
    }
  }, []);

  useEffect(() => {
    if (!allLoaded || frames.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [allLoaded, frames.length, intervalMs]);

  return (
    <div
      className="media-wrap"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div className="media-skeleton" aria-hidden="true" hidden={allLoaded} />
      {frames.map((src, i) => (
        <Image
          key={src}
          ref={(el) => {
            imgRefs.current[i] = el;
          }}
          className="project-image"
          src={src}
          alt={i === 0 ? alt : ""}
          width={width}
          height={height}
          sizes="(max-width: 700px) 100vw, 1100px"
          quality={100}
          priority
          style={{ opacity: allLoaded && i === index ? 1 : 0 }}
          onLoad={() => setLoadedCount((c) => c + 1)}
        />
      ))}
    </div>
  );
}
