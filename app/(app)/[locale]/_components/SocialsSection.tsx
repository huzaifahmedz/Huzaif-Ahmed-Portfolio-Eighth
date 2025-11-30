import Socials from '@/components/socials'
import { AUTHOR } from '@/src/constants/data'

export function SocialsSection() {
  // Convert AUTHOR to the format expected by Socials component
  const mainPageContent = {
    socials: {
      githubLink: AUTHOR.social?.github || '',
      email: AUTHOR.social?.email || '',
      linkedInLink: AUTHOR.social?.linkedin,
      twitter: AUTHOR.social?.twitter,
      youtube: AUTHOR.social?.youtube,
      location: AUTHOR.location,
    },
  }

  return <Socials content={mainPageContent as any} />
}
