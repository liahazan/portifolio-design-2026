import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/types";

export function GalleryTile({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { thumbnail } = project;

  if (thumbnail) {
    return (
      <Link
        href={`/projetos/${project.slug}`}
        className="tile tile--media"
        aria-label={project.title}
        title={project.title}
      >
        {thumbnail.type === "gif" ? (
          // next/image não anima gifs de forma confiável, então usamos <img> puro.
          // eslint-disable-next-line @next/next/no-img-element
          <img className="tile-img" src={thumbnail.src} alt="" />
        ) : (
          <Image
            className="tile-img"
            src={thumbnail.src}
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
            quality={100}
          />
        )}
      </Link>
    );
  }

  return (
    <Link href={`/projetos/${project.slug}`} className="tile">
      <span className="number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="label">{project.title}</span>
    </Link>
  );
}
