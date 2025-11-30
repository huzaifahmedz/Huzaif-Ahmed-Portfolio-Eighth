import React from 'react'
import { Icons } from './icons'
import GithubStarBtn from './github-star'
import Link from 'next/link'
import { Button } from './ui/button'
import { getTranslations } from 'next-intl/server'
import { Locales } from '@/i18n/routing'

export default async function Topbar({ locale }: { locale: Locales }) {
  const t = await getTranslations({ locale, namespace: 'Topbar' })

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-[12px] border-b z-50 bg-black/30">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Icons.Logo className="w-7 h-7" />
          <h2 className="font-cal translate-y-[2px] text-2xl">
            Huzaif{' '}
            <span className="bg-linear-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent">
              Ahmed
            </span>
          </h2>
        </Link>
        <div className="flex items-center justify-end gap-2">
          <Link href="#projects" className="hidden lg:flex">
            <Button size={'sm'} variant={'ghost'}>
              {t('projects')}
            </Button>
          </Link>
          <Link href="#contact" className="hidden lg:flex">
            <Button size={'sm'} variant={'ghost'}>
              {t('contact')}
            </Button>
          </Link>
          <GithubStarBtn stars={0} />
        </div>
      </div>
    </header>
  )
}
