import Link from 'next/link'
import React from 'react'
import { Icons } from './icons'
import { useTranslations } from 'next-intl'

interface SocialsContent {
  socials: {
    githubLink: string
    email: string
    linkedInLink?: string
    twitter?: string
    youtube?: string
    location?: string
    discordName?: string
    discordId?: string
  }
}

export default function Socials({ content }: { content: SocialsContent }) {
  const t = useTranslations('ContactSection')

  const SOCIALS = [
    {
      icon: Icons.Github,
      name: 'huzaifahmedz',
      link: content.socials.githubLink,
    },
    ...(content.socials.linkedInLink
      ? [
          {
            icon: Icons.LinkedIn,
            name: 'Huzaif Ahmed',
            link: content.socials.linkedInLink,
          },
        ]
      : []),
    ...(content.socials.discordName && content.socials.discordId
      ? [
          {
            icon: Icons.Discord,
            name: content.socials.discordName,
            link: `https://discord.com/users/${content.socials.discordId}`,
          },
        ]
      : []),
    {
      icon: Icons.Gmail,
      name: content.socials.email,
      link: `mailto:${content.socials.email}`,
    },
    ...(content.socials.location
      ? [
          {
            icon: Icons.Location,
            name: content.socials.location,
            link: null,
          },
        ]
      : []),
  ].filter((social) => social.link !== null || social.name)

  return (
    <div className="p-8">
      <h3 className="text-2xl font-cal">{t('socials')}</h3>
      <p className="text-muted-foreground text-balance">
        {t('socialsDescription')}
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {SOCIALS.map((social, index) => {
          const Component = social.link ? Link : 'div'
          const props = social.link
            ? {
                target: '_blank',
                href: social.link,
                rel: 'noopener noreferrer',
              }
            : {}

          return (
            <Component
              key={`${social.link || social.name}-${index}`}
              {...props}
              className={`border p-4 flex items-center bg-background/30 ${
                social.link
                  ? 'hover:bg-rose-500/5 hover:text-rose-500 transition-all cursor-pointer'
                  : 'cursor-default'
              }`}
            >
              <social.icon className="w-4 h-4 mr-2" />
              <span className="font-cal translate-y-[2px]">{social.name}</span>
            </Component>
          )
        })}
      </div>
    </div>
  )
}
