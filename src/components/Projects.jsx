import { useContext, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
import VideoModal from './VideoModal'
import SectionHeading from './SectionHeading'
import DataStreamContext from './DataStreamContext'

const featuredProjects = projects.slice(0, 3)
const relatedSkillTerms = {
  'Retrieval-Augmented Generation (RAG)': ['rag'],
  'Large Language Models (LLMs)': ['llm', 'llama', 'groq'],
  Embeddings: ['embedding'],
  'Vector Databases': ['qdrant', 'vector'],
  'Supervised Learning': ['classification', 'validation accuracy'],
  CNNs: ['resnet', 'efficientnet', 'mobilenet', 'cnn'],
  'Transfer Learning': ['pretrained', 'fine-tun'],
  Transformers: ['transformer', 'llama'],
  Chunking: ['chunk'],
  'Vector search': ['qdrant', 'vector'],
  pytest: ['pytest', 'wrote tests for core utilities'],
  'Responsive UI': ['responsive'],
  Git: ['github'],
  Render: ['render.com'],
}

function projectMatchesSkill(project, skill) {
  if (!skill) return false
  const searchableContent = [project.title, project.description, project.liveUrl, project.githubUrl, ...project.stack, JSON.stringify(project.caseStudy)]
    .join(' ')
    .toLowerCase()
  const terms = relatedSkillTerms[skill] ?? [skill]
  return terms.some((term) => searchableContent.includes(term.toLowerCase()))
}

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

  return <a className={className} href={href} rel="noreferrer" target="_blank">{label}</a>
}

function DemoLink({ project, onOpenVideo }) {
  if (project.liveUrl) {
    return <a className="text-teal-400 transition-colors duration-100 hover:text-teal-300" href={project.liveUrl} rel="noreferrer" target="_blank">View Demo</a>
  }

  if (project.demoVideoUrl) {
    return <button className="text-teal-400 transition-colors duration-100 hover:text-teal-300" type="button" onClick={() => onOpenVideo(project)}>View Demo</button>
  }

  return null
}

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <div className="aspect-[16/9] overflow-hidden bg-zinc-900">
        <img className="h-full w-full object-cover" src={project.image} alt={`${project.title} preview`} />
      </div>
    )
  }

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

function FeaturedCard({ project, onOpenVideo, activeSkill }) {
  const matchesSkill = projectMatchesSkill(project, activeSkill)

  return (
    <div className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
      <article className={`project-node flex h-full flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 ${activeSkill ? (matchesSkill ? 'project-match' : 'project-dim') : ''}`}>
        <ProjectImage project={project} />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
          <p className="mt-3 line-clamp-1 text-sm leading-6 text-zinc-400">{project.description}</p>
          <div className="mt-5"><StackTags stack={project.stack} /></div>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-800 pt-5 text-sm font-medium">
            <DemoLink project={project} onOpenVideo={onOpenVideo} />
            <ProjectLink href={`/projects/${project.id}`} label="Case Study" internal />
          </div>
        </div>
      </article>
    </div>
  )
}

function Projects() {
  const { activeSkill } = useContext(DataStreamContext)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', duration: 30, loop: true })
  const isPaused = useRef(false)
  const [activeVideoProject, setActiveVideoProject] = useState(null)

  useEffect(() => {
    if (!emblaApi) return undefined

    const interval = window.setInterval(() => {
      if (!isPaused.current) emblaApi.scrollNext()
    }, 6000)

    return () => window.clearInterval(interval)
  }, [emblaApi])

  return (
    <motion.section
      className="portfolio-section py-24"
      id="projects"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
    >
      <SectionHeading eyebrow="03 / Projects">Selected work</SectionHeading>

      <div className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium text-zinc-200">Featured Projects</h3>
        </div>
        <div
          className="overflow-hidden"
          onMouseEnter={() => { isPaused.current = true }}
          onMouseLeave={() => { isPaused.current = false }}
          ref={emblaRef}
        >
          <div className="-ml-4 flex">
            {featuredProjects.map((project) => <FeaturedCard activeSkill={activeSkill} key={project.id} project={project} onOpenVideo={setActiveVideoProject} />)}
          </div>
        </div>
      </div>

      <h3 className="mt-20 text-lg font-medium text-zinc-200">All Projects</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            className={`project-node group flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 ${activeSkill ? (projectMatchesSkill(project, activeSkill) ? 'project-match' : 'project-dim') : ''}`}
            key={project.id}
            whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(0, 133, 140, 0.12)' }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            <ProjectImage project={project} />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{project.description}</p>
              <div className="mt-5"><StackTags stack={project.stack} /></div>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-800 pt-5 text-sm font-medium">
                <DemoLink project={project} onOpenVideo={setActiveVideoProject} />
                <ProjectLink href={project.githubUrl} label="GitHub" disabled={!project.githubUrl} />
                <ProjectLink href={`/projects/${project.id}`} label="Case Study" internal />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {activeVideoProject && <VideoModal project={activeVideoProject} onClose={() => setActiveVideoProject(null)} />}
    </motion.section>
  )
}

export default Projects
