import type { Project } from "./types";

// Como adicionar/editar um projeto:
// 1. Coloque os arquivos (imagens/gifs exportados do Canva) em public/projects/<slug>/
// 2. Adicione ou edite a entrada correspondente aqui, com um bloco por imagem/gif/texto,
//    na ordem em que devem aparecer na página do projeto.
// A ordem deste array define a ordem e a numeração na galeria da home.
export const projects: Project[] = [
  {
    slug: "atelier-bandeira-de-mello",
    title: "Atelier Bandeira de Mello",
    thumbnail: {
      type: "gif",
      src: "/projects/atelier-bandeira-de-mello/thumbnail.gif",
    },
    blocks: [
      {
        type: "gif",
        src: "/projects/atelier-bandeira-de-mello/cover.gif",
        alt: "Atelier Bandeira de Mello",
        width: 2800,
        height: 14000,
      },
    ],
  },
  {
    slug: "visit-para",
    title: "Visit Pará",
    thumbnail: {
      type: "image",
      src: "/projects/visit-para/thumbnail.png",
    },
    blocks: [
      {
        type: "image",
        src: "/projects/visit-para/001.png",
        alt: "Visit Pará — App | Web",
        width: 2800,
        height: 1112,
      },
      {
        type: "gif",
        src: "/projects/visit-para/002.gif",
        alt: "Animação do logo Visit Pará se montando",
        width: 2800,
        height: 1088,
      },
      {
        type: "image",
        src: "/projects/visit-para/003.png",
        alt: "Telas do aplicativo Visit Pará",
        width: 2800,
        height: 2048,
      },
      {
        type: "gif",
        src: "/projects/visit-para/004.gif",
        alt: "Animação das telas do aplicativo Visit Pará",
        width: 2800,
        height: 2048,
      },
      {
        type: "image",
        src: "/projects/visit-para/005.png",
        alt: "Telas do site Visit Pará e página do COP30",
        width: 2800,
        height: 6672,
      },
    ],
  },
  {
    slug: "manaca",
    title: "Manacá",
    thumbnail: {
      type: "image",
      src: "/projects/manaca/thumbnail.png",
    },
    blocks: [
      {
        type: "image",
        src: "/projects/manaca/cover.png",
        alt: "Manacá",
        width: 200,
        height: 1000,
      },
    ],
  },
  {
    slug: "saude-em-casa-livro",
    title: "Saúde em Casa — Livro",
    thumbnail: {
      type: "image",
      src: "/projects/saude-em-casa-livro/thumbnail.png",
    },
    blocks: [
      {
        type: "image",
        src: "/projects/saude-em-casa-livro/cover.png",
        alt: "Saúde em Casa — Livro",
        width: 2800,
        height: 14000,
      },
    ],
  },
  {
    slug: "visualizacao-de-dados",
    title: "Visualização de Dados",
    thumbnail: {
      type: "image",
      src: "/projects/visualizacao-de-dados/thumbnail.png",
    },
    blocks: [
      {
        type: "image",
        src: "/projects/visualizacao-de-dados/cover.png",
        alt: "Visualização de Dados",
        width: 2800,
        height: 6646,
      },
    ],
  },
  {
    slug: "saude-em-casa-cartilha",
    title: "Saúde em Casa — Cartilha",
    thumbnail: {
      type: "image",
      src: "/projects/saude-em-casa-cartilha/thumbnail.png",
    },
    blocks: [
      {
        type: "image",
        src: "/projects/saude-em-casa-cartilha/cover.png",
        alt: "Saúde em Casa — Cartilha",
        width: 2800,
        height: 9011,
      },
    ],
  },
  {
    slug: "animacao-direcao-de-arte",
    title: "Animação / Direção de Arte",
    thumbnail: {
      type: "image",
      src: "/projects/animacao-direcao-de-arte/thumbnail.png",
    },
    blocks: [
      {
        type: "image",
        src: "/projects/animacao-direcao-de-arte/cover.png",
        alt: "Animação / Direção de Arte",
        width: 2800,
        height: 7658,
      },
    ],
  },
];
