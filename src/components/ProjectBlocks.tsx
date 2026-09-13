import type { ProjectBlock } from "@/data/types";
import { MediaBlock } from "./MediaBlock";

export function ProjectBlocks({ blocks }: { blocks: ProjectBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === "text") {
          const Tag = block.as ?? "p";
          return (
            <Tag key={i} className="project-text" style={block.style}>
              {block.content}
            </Tag>
          );
        }

        return <MediaBlock key={i} block={block} priority={i === 0} />;
      })}
    </>
  );
}
