import React from 'react'
import { Project } from '@/src/constants/data'
import { notFound } from 'next/navigation'
import ProjectTemplate from './_components/project-template'
import { PROJECTS } from '@/src/constants/data'

type ProjectPageProps = {
  params: Promise<{ slug: string; locale: string }>
}

export const experimental_ppr = true

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug: paramsSlug, locale } = await params

  const project = PROJECTS.find((p) => p.slug === paramsSlug)

  if (!project) return notFound()

  const imageUrl =
    project.heroImage ||
    (typeof project.image === 'object' && project.image?.asset?.url) ||
    '/projects/project-1.webp'

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/${locale}/project/${project.slug}`,
      languages: {
        en: `/en/project/${project.slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      url: `/project/${project.slug}`,
      siteName: "Huzaif Ahmed's Portfolio",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      cardType: 'summary_large_image',
      title: project.title,
      description: project.shortDescription,
      images: [imageUrl],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug: paramsSlug } = await params
  const project = PROJECTS.find((p) => p.slug === paramsSlug)

  if (!project) return notFound()

  return <ProjectTemplate project={project} />
}
