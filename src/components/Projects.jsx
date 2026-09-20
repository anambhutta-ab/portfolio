import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

const featuredProjects = projects.slice(0, 3)

function ProjectLink({ href, label, disabled = false, internal = false }) {
  const className = disabled
    ? 'cursor-not-allowed text-zinc-600'
    : 'text-teal-400 transition-colors hover:text-teal-300'

  if (disabled) {
    return <span className={className} aria-disabled="true">{label}</span>
  }

  if (internal) {
    return <Link className={className} to={href}>{label}</Link>
  }

  return <a className={className} href={href}>{label}</a>
}

function ProjectImage({ project }) {
  return (
    <div className="flex aspect-[16/9] items-end bg-gradient-to-br from-teal-400/30 via-zinc-800 to-zinc-950 p-5" role="img" aria-label={`${project.title} image placeholder`}>
      <span className="max-w-xs text-lg font-semibold text-zinc-100">{project.title}</span>
    </div>
  )
}

function StackTags({ stack }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((technology) => (
        <li className="rounded-md border border-zinc-700/80 bg-zinc-950/70 px-2.5 py-1 text-xs text-zinc-400" key={technology}>{technology}</li>
      ))}
    </ul>
  )
}

function FeaturedCard({ project }) {
  return (
    <div className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40">
        <ProjectImage project={project} />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
          <p className="mt-3 line-clamp-1 text-sm leading-6 text-zinc-400">{project.description}</p>
          <div className="mt-5"><StackTags stack={project.stack} /></div>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-800 pt-5 text-sm font-medium">
            <ProjectLink href={project.liveUrl} label="Live Demo" disabled={!project.liveUrl} />
            <ProjectLink href={`/projects/${project.id}`} label="Case Study" internal />
          </div>
        </div>
      </article>
    </div>
  )
}

function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', duration: 30, loop: true })
  const isPaused = useRef(false)

  useEffect(() => {
    if (!emblaApi) return undefined

    const interval = window.setInterval(() => {
      if (!isPaused.current) emblaApi.scrollNext()
    }, 6000)

    return () => window.clearInterval(interval)
  }, [emblaApi])

  return (
    <motion.section
      className="portfolio-section border-t border-zinc-800 py-24"
      id="projects"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">03 / Projects</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Selected work</h2>

      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium text-zinc-200">Featured Projects</h3>
          <span className="text-xs uppercase tracking-[0.16em] text-zinc-600">Auto-scrolling</span>
        </div>
        <div
          className="overflow-hidden"
          onMouseEnter={() => { isPaused.current = true }}
          onMouseLeave={() => { isPaused.current = false }}
          ref={emblaRef}
        >
          <div className="-ml-4 flex">
            {featuredProjects.map((project) => <FeaturedCard key={project.id} project={project} />)}
          </div>
        </div>
      </div>

      <h3 className="mt-20 text-lg font-medium text-zinc-200">All Projects</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            className="group flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40"
            key={project.id}
            whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(45, 212, 191, 0.12)' }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <ProjectImage project={project} />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{project.description}</p>
              <div className="mt-5"><StackTags stack={project.stack} /></div>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-800 pt-5 text-sm font-medium">
                <ProjectLink href={project.liveUrl} label="Live Demo" disabled={!project.liveUrl} />
                <ProjectLink href={project.githubUrl} label="GitHub" disabled={!project.githubUrl} />
                <ProjectLink href={`/projects/${project.id}`} label="Case Study" internal />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
