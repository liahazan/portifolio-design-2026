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
    <article className="project-content" aria-labelledby="project-title">
      <h1 id="project-title" className="sr-only">
        {title}
      </h1>
      <ProjectBlocks blocks={blocks} />
    </article>
  );
}
