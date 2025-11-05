import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon?: string
  href?: string
}

export function ProjectCard({ title, description, tags, icon, href }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  const baseClasses = "bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} block`}>
        {cardContent}
      </Link>
    )
  }

  return <div className={baseClasses}>{cardContent}</div>
}
