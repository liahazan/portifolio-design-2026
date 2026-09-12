import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ContentPage } from "@/components/ContentPage";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projeto não encontrado" };
  return { title: `${project.title} — Lia Hazan` };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ContentPage title={project.title} blocks={project.blocks} />;
}
