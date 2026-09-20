import { Link, useParams } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import projects from '../data/projects'

const sections = [
  { title: 'Problem', text: 'Describe the user or business problem this project was designed to solve, including the constraints that shaped the solution.' },
  { title: 'Your role', text: 'Add your responsibilities here, from discovery and architecture through implementation, testing, and deployment.' },
  { title: 'Architecture overview', text: 'Replace this placeholder with an architecture diagram or image showing how the main services and data flows connect.' },
  { title: 'Key technical decisions', text: 'Explain the important technology and design choices, along with the trade-offs behind them.' },
  { title: 'Challenges & solutions', text: 'Document the hardest technical or product challenges and how you worked through them.' },
  { title: 'Results / impact', text: 'Add measurable outcomes, user feedback, performance improvements, or other evidence of impact.' },
  { title: 'What I’d improve next', text: 'Capture the next iteration ideas, technical debt, and improvements you would prioritize with more time.' },
]

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
        <header className="mt-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-400">Project case study</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((technology) => <li className="rounded-md border border-zinc-700/80 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-400" key={technology}>{technology}</li>)}
          </ul>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <section className={`rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 ${section.title === 'Architecture overview' ? 'md:col-span-2' : ''}`} key={section.title}>
              <h2 className="text-xl font-semibold text-zinc-100">{section.title}</h2>
              {section.title === 'Architecture overview' ? (
                <div className="mt-5 flex min-h-44 items-center justify-center rounded-md border border-dashed border-teal-400/30 bg-teal-400/5 p-6 text-center text-sm text-zinc-500">Architecture diagram placeholder</div>
              ) : (
                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{section.text}</p>
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
