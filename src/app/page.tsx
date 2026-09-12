import { projects } from "@/data/projects";
import { GalleryTile } from "@/components/GalleryTile";

export default function Home() {
  return (
    <section className="gallery" aria-label="Galeria de projetos">
      {projects.map((project, i) => (
        <GalleryTile key={project.slug} project={project} index={i} />
      ))}
    </section>
  );
}
