import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from './Layout'
import Footer from './Footer'
import projects from '../data/projects'

const sectionDefinitions = [
  { title: 'Problem', key: 'problem' },
  { title: 'Your role', key: 'role' },
  { title: 'Architecture overview', key: 'architecture' },
  { title: 'Key technical decisions', key: 'decisions' },
  { title: 'Challenges & solutions', key: 'challenges' },
  { title: 'Results / impact', key: 'results' },
  { title: 'What I’d improve next', key: 'nextSteps' },
]

function CaseStudyContent({ content }) {
  if (Array.isArray(content)) {
    return (
      <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-zinc-400 marker:text-teal-400">
        {content.map((item) => <li key={item}>{item}</li>)}
      </ul>
    )
  }

  return content.split(/\n\s*\n/).map((paragraph) => (
    <p className="mt-4 text-sm leading-7 text-zinc-400 first:mt-0" key={paragraph}>{paragraph}</p>
  ))
}

function ArchitectureFlow({ steps }) {
  const isLongFlow = steps.length > 4

  return (
    <div className={`mt-6 min-w-0 flex justify-center ${isLongFlow ? 'flex-col items-center gap-3' : 'flex-col items-center gap-3 lg:flex-row lg:flex-nowrap lg:items-stretch'}`}>
      {steps.map((step, index) => (
        <div className={`relative flex items-center ${isLongFlow ? 'w-full max-w-2xl flex-col' : 'w-full flex-col lg:w-60 lg:flex-row'}`} key={step}>
          <motion.div
            className={`relative z-10 flex min-h-32 w-full flex-col rounded-lg border border-teal-400/25 bg-zinc-950/80 p-4 shadow-[0_0_24px_rgba(45,212,191,0.06)] ${isLongFlow ? 'md:min-h-28 md:flex-row md:items-center md:gap-4' : ''}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4, borderColor: 'rgba(45, 212, 191, 0.7)', boxShadow: '0 12px 30px rgba(45, 212, 191, 0.12)' }}
          >
            <span className="mb-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-400 text-xs font-bold text-zinc-950">{String(index + 1).padStart(2, '0')}</span>
            <p className="min-w-0 break-words text-sm leading-6 text-zinc-300">{step}</p>
          </motion.div>
          {index < steps.length - 1 && (
            <span className={`relative z-0 overflow-hidden rounded-full bg-teal-400/15 ${isLongFlow ? 'h-8 w-1' : 'h-8 w-1 lg:h-1 lg:w-3'}`} aria-hidden="true">
              <motion.span
                className={`block rounded-full bg-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.9)] ${isLongFlow ? 'h-1/2 w-full' : 'h-1/2 w-full lg:h-full lg:w-1/2'}`}
                animate={{ x: ['-100%', '300%'], y: ['-100%', '300%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: index * 0.25 }}
              />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectMedia({ project }) {
  return (
    <motion.figure
      className="mt-8 ml-auto w-fit max-w-full min-w-0 overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900/50 md:mt-0"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(45, 212, 191, 0.16)' }}
    >
      {project.image ? (
        <img className="block h-auto max-h-[28rem] max-w-full object-contain" src={project.image} alt={`${project.title} project preview`} />
      ) : (
        <div className="flex min-h-48 w-80 max-w-full items-center justify-center bg-zinc-900 px-6 text-center text-sm text-zinc-500" role="img" aria-label={`${project.title} media placeholder`}>
          Image or video placeholder
        </div>
      )}
      <figcaption className="border-t border-zinc-800 px-4 py-3 text-xs text-zinc-500">Project preview</figcaption>
    </motion.figure>
  )
}

function ProjectLink({ href, label, disabled = false }) {
  if (disabled) {
    return <span className="cursor-not-allowed text-zinc-600" aria-disabled="true">{label}</span>
  }

  return <a className="text-teal-400 transition-colors hover:text-teal-300" href={href}>{label}</a>
}

function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.id === slug)

  if (!project) {
    return (
      <Layout>
        <main className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:px-8">
          <Link className="text-sm text-teal-400 transition-colors hover:text-teal-300" to="/">&larr; Back to portfolio</Link>
          <h1 className="mt-12 text-4xl font-semibold text-zinc-100">Project not found</h1>
          <p className="mt-4 text-zinc-400">The project you are looking for does not exist.</p>
        </main>
        <Footer />
      </Layout>
    )
  }

  return (
    <Layout>
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:px-8">
        <Link className="text-sm text-teal-400 transition-colors hover:text-teal-300" to="/">&larr; Back to portfolio</Link>
        <header className="mt-12 max-w-5xl min-w-0">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-400">Project case study</p>
          <h1 className="mt-4 break-words text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">{project.title}</h1>
          <div className="mt-8 grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="min-w-0">
              <div className="break-words text-lg leading-8 text-zinc-400">
                {project.description.split(/\n\s*\n/).map((paragraph) => <p className="mt-3 first:mt-0" key={paragraph}>{paragraph}</p>)}
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => <li className="rounded-md border border-zinc-700/80 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-400" key={technology}>{technology}</li>)}
              </ul>
            </div>
            <ProjectMedia project={project} />
          </div>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {sectionDefinitions.map((section) => (
            <section className={`rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 ${section.title === 'Architecture overview' ? 'md:col-span-2' : ''}`} key={section.title}>
              <h2 className="text-xl font-semibold text-zinc-100">{section.title}</h2>
              {section.key === 'architecture' ? (
                <ArchitectureFlow steps={project.caseStudy[section.key]} />
              ) : (
                <CaseStudyContent content={project.caseStudy[section.key]} />
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-6 border-t border-zinc-800 pt-8 text-sm font-medium">
          <ProjectLink href={project.liveUrl} label="Live Demo" disabled={!project.liveUrl} />
          <ProjectLink href={project.githubUrl} label="GitHub" disabled={!project.githubUrl} />
        </div>
      </main>
      <Footer />
    </Layout>
  )
}

export default ProjectCaseStudy
