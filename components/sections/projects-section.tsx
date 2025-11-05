import { ProjectCard } from '@/components/project-card'

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">Featured Projects & Writing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="How I Led Localisation at VEED"
            description="Leading a cross-functional localization project across 8+ codebases and 10+ teams. We built custom tooling, automated translation workflows, and delivered an 8-18% revenue uplift in international markets."
            tags={['Leadership', 'i18n', 'Automation']}
            icon="✍️"
            href="/blog/localizing-veed"
          />
        </div>
      </div>
    </section>
  )
}
