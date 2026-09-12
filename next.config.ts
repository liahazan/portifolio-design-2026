import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // As artes vêm do Canva com tipografia fina — qualidade 75 (padrão do Next)
    // gera artefatos visíveis no texto. Usamos 100 para as imagens dos projetos.
    qualities: [75, 100],
  },
};

export default nextConfig;
