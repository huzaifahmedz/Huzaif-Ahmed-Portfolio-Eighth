'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import { Icons } from './icons'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'
import { AUTHOR } from '@/src/constants/data'

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

export default function ContactForm() {
  const t = useTranslations('ContactSection')
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    )
    const mailtoLink = `mailto:${AUTHOR.social?.email}?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    form.reset()
    toast.success('Opening email client...')
  }

  return (
    <div
      style={{ '--hero-width': 'calc(100%)' } as React.CSSProperties}
      className="relative order-last md:order-first"
    >
      <div className="relative z-20 horizontal-line after:top-0"></div>
      <div className="relative p-10 bg-background/40 backdrop-blur-xs z-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Smith"
                      className="font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@domain.com"
                      className="font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I'm writing to you cause..."
                      className="font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end gap-2">
              <Button
                type="reset"
                onClick={() => form.reset()}
                variant="outline"
                className="cursor-pointer"
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="cursor-pointer"
              >
                {t('sendBtn')}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="vertical-line z-10"></div>
      <div className="relative horizontal-line z-10"></div>
      <div className="vertical-line left-[unset]! right-0 z-10"></div>
      <div className="absolute bottom-1/2 left-0 top-0 h-full w-full opacity-0 blur-[180px] [background-image:linear-gradient(to_bottom,#f43f5e,#f43f5e,transparent_40%)] animate-image-glow"></div>
    </div>
  )
}
