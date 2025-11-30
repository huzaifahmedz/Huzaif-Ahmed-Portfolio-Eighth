import ProjectCard, { ProjectCardPlaceholder } from '@/components/project-card'
import { PROJECTS } from '@/src/constants/data'
import { Locales } from '@/i18n/routing'

export function ProjectsSection({ locale }: { locale: Locales }) {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 gap-y-24">
      {PROJECTS.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}

