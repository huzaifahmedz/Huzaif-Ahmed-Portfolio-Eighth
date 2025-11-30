'use client'

import { Icons } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Project } from '@/src/constants/data'
import { AUTHOR } from '@/src/constants/data'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import React from 'react'
import { cleanString } from '@/lib/utils'

export default function ProjectTemplate({ project }: { project: Project }) {
  const imageUrl =
    project.heroImage ||
    (typeof project.image === 'object' && project.image?.asset?.url) ||
    '/projects/project-1.webp'

  const author = {
    name: AUTHOR.name,
    avatar: AUTHOR.avatar?.asset?.url || '',
    initials: AUTHOR.initials,
    link: AUTHOR.social?.github || '#',
  }

  return (
    <div className="py-[76px] container mx-auto grid grid-cols-4 md:grid-cols-8 min-h-screen">
      <div className="col-span-4 md:col-span-3 p-6 md:pr-12">
        <Link href="/#projects">
          <Button size={'sm'} variant={'ghost'}>
            <Icons.ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="mt-5 md:mt-10">
          <Image
            src={imageUrl}
            width={1920}
            height={1080}
            alt={project.title}
            className="rounded-[0.5rem] border block md:hidden mb-5 w-full"
          />
          <div className="flex flex-wrap gap-2">
            <Link href={author.link} target="_blank">
              <Badge variant={'default'}>
                <Avatar className="w-4 h-4">
                  <AvatarImage src={author.avatar} />
                  <AvatarFallback>{author.initials}</AvatarFallback>
                </Avatar>
                <div className="ml-2">
                  <p className="text-sm font-medium font-cal translate-y-[1.5px]">
                    {author.name}
                  </p>
                </div>
              </Badge>
            </Link>
          </div>
          <h1
            style={{
              viewTransitionName: `${cleanString(project.slug || project._id)}-title`,
            }}
            className="text-5xl font-cal mt-7"
          >
            {project.title}
          </h1>
          <p
            style={{
              viewTransitionName: `${cleanString(project.slug || project._id)}-desc`,
            }}
            className="mt-2 text-lg text-muted-foreground"
          >
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(project.tags || project.technologies || []).map((tag, index) => (
              <Badge
                key={tag}
                variant={'outline'}
                style={{
                  viewTransitionName: `${cleanString(project.slug || project._id)}-badge-${cleanString(String(index))}`,
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center flex-wrap gap-2 border-t mt-7 py-7">
            {project.githubLink && project.githubLink !== '#' ? (
              <Link href={project.githubLink} target="_blank">
                <Button size={'sm'}>
                  <Icons.Github className="w-5 h-5" />
                  Github repository
                </Button>
              </Link>
            ) : (
              <Button size={'sm'} disabled>
                <Icons.Github className="w-5 h-5" />
                Github repository
              </Button>
            )}

            {project.previewUrl && project.previewUrl !== '#' ? (
              <Link href={project.previewUrl} target="_blank">
                <Button size={'sm'}>
                  <Icons.Globe className="w-5 h-5" />
                  Live website
                </Button>
              </Link>
            ) : (
              <Button size={'sm'} disabled>
                <Icons.Globe className="w-5 h-5" />
                Live website
              </Button>
            )}
          </div>
          {(!project.githubLink || project.githubLink === '#' || !project.previewUrl || project.previewUrl === '#') && (
            <p className="text-xs text-muted-foreground opacity-40">
              If button is disabled it means that the link is not provided.
            </p>
          )}
        </div>
      </div>
      <div className="col-span-4 md:col-span-5 px-6 md:p-6 md:pl-12 md:border-l">
        <Image
          src={imageUrl}
          width={1920}
          height={1080}
          alt={project.title}
          style={{
            viewTransitionName: `${cleanString(project.slug || project._id)}-image`,
          }}
          className="rounded-[0.5rem] border hidden md:block object-cover"
        />
        <div className="space-y-2 md:mt-10">
          <p className="text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  )
}
