import Link from "next/link";
import type { ProjectBlock } from "@/data/types";
import { ProjectBlocks } from "./ProjectBlocks";

export function ContentPage({
  title,
  blocks,
}: {
  title: string;
  blocks: ProjectBlock[];
}) {
  return (
    <article aria-labelledby="project-title">
      <div className="toolbar">
        <Link href="/" className="back">
          ← Voltar à galeria
        </Link>
        <h1 id="project-title" className="project-title">
          {title}
        </h1>
      </div>
      <ProjectBlocks blocks={blocks} />
      <div className="project-bottom">
        <Link href="/" className="back">
          ← Voltar à galeria
        </Link>
      </div>
    </article>
  );
}
