import type { Metadata } from "next";
import { about } from "@/data/about";
import { ContentPage } from "@/components/ContentPage";

export const metadata: Metadata = {
  title: `${about.title} — Lia Hazan`,
};

export default function SobrePage() {
  return <ContentPage title={about.title} blocks={about.blocks} />;
}
