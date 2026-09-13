import type { ProjectBlock } from "@/data/types";
import { MediaBlock } from "./MediaBlock";
import { SequenceBlock } from "./SequenceBlock";

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

        if (block.type === "sequence") {
          return <SequenceBlock key={i} block={block} />;
        }

        return <MediaBlock key={i} block={block} priority={i === 0} />;
      })}
    </>
  );
}
