import type { CSSProperties } from "react";

export type MediaOverlay = {
  type: "image" | "gif";
  src: string;
  alt: string;
  /** Dimensões intrínsecas do arquivo, usadas só para calcular a proporção. */
  width: number;
  height: number;
};

export type ImageBlock = {
  type: "image" | "gif";
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Mídia sobreposta no topo deste bloco (largura 100%, encostada no topo,
   * altura proporcional às suas próprias dimensões). Só começa a carregar
   * depois que a imagem base carregar, e o skeleton só some quando as duas
   * tiverem terminado.
   */
  overlay?: MediaOverlay;
};

export type TextBlock = {
  type: "text";
  content: string;
  /** Tag to render the text as. Defaults to "p". */
  as?: "h2" | "h3" | "p";
  /** Inline style overrides, e.g. custom fontFamily/size to preserve the original typography. */
  style?: CSSProperties;
};

export type ProjectBlock = ImageBlock | TextBlock;

export type Thumbnail = {
  type: "image" | "gif";
  src: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Capa exibida no card da galeria. Se ausente, o card cai no visual antigo (caixa cinza). */
  thumbnail?: Thumbnail;
  blocks: ProjectBlock[];
};
