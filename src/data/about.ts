import type { Project } from "./types";

// Mesma lógica de src/data/projects.ts: um bloco por imagem/gif/texto, em ordem.
export const about: Project = {
  slug: "sobre",
  title: "Sobre",
  blocks: [
    {
      type: "image",
      src: "/projects/sobre-e-contato/cover.png",
      alt: "Sobre e contato",
      width: 2800,
      height: 3796,
    },
  ],
};
