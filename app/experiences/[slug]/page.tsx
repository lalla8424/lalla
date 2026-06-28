import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperiencePage } from "@/components/sections/experience-page";
import { EXPERIENCE_PAGES } from "@/constants/homepage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(EXPERIENCE_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = EXPERIENCE_PAGES[slug];
  if (!experience) return { title: "Experience | Lalla Kids Art" };

  return {
    title: `${experience.title} | Lalla Kids Art`,
    description: experience.subtitle,
  };
}

export default async function ExperienceRoute({ params }: PageProps) {
  const { slug } = await params;
  if (!EXPERIENCE_PAGES[slug]) notFound();

  return <ExperiencePage slug={slug} />;
}
