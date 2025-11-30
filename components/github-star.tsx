'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'

export default function GithubStarBtn({
  stars,
  className,
}: {
  stars: number
  className?: string
}) {
  return (
    <Link
      className={cn(
        buttonVariants({
          variant: 'rainbow',
          size: 'sm',
        }),
        'inline-flex',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={'https://github.com/huzaifahmedz'}
    >
      <div className="flex items-center">
        <Icons.Github />
        <span className="ml-1">GitHub</span>
      </div>
    </Link>
  )
}
