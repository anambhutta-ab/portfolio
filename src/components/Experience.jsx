import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'AI/ML Developer',
    company: 'Freelance / Self-employed',
    dates: '2024 - Present',
    bullets: [
      'Built document-grounded RAG chatbots for business knowledge and FAQs.',
      'Developed FastAPI backends for LLM and machine learning workflows.',
      'Added testing, validation, and deployment practices for production quality.',
    ],
  },
  {
    title: 'Backend Engineering Intern',
    company: 'Company name · Placeholder',
    dates: '2023 - 2024',
    bullets: [
      'Implemented REST endpoints and data processing workflows with Python.',
      'Collaborated on testing, debugging, and maintainable backend improvements.',
    ],
  },
  {
    title: 'Software Engineering, COMSATS University',
    company: 'Bachelor of Science in Software Engineering',
    dates: '2020 - 2024',
    bullets: [
      'Focused coursework and projects on software engineering, AI/ML, and backend systems.',
      'Built practical applications using Python, APIs, databases, and modern web tools.',
    ],
  },
  {
    title: 'AI/ML Projects',
    company: 'Independent work',
    dates: '2022 - Present',
    bullets: [
      'Explored supervised learning, CNNs, transformers, embeddings, and vector search.',
      'Turned experiments into clear, deployable portfolio projects and reusable services.',
    ],
  },
]

function Experience() {
  return (
    <section className="portfolio-section border-t border-zinc-800 py-24" id="experience">
      <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">04 / Experience</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Where I have worked</h2>
      <div className="relative mt-12 ml-3 border-l border-zinc-700/80">
        {experiences.map((experience, index) => (
          <motion.article
            className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
            initial={{ opacity: 0, y: 18 }}
            key={`${experience.title}-${experience.dates}`}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
          >
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-teal-400 ring-4 ring-zinc-950" aria-hidden="true" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">{experience.title}</h3>
                <p className="mt-1 text-sm text-teal-400">{experience.company}</p>
              </div>
              <p className="shrink-0 text-sm text-zinc-500">{experience.dates}</p>
            </div>
            <ul className="mt-5 max-w-2xl space-y-2 text-sm leading-6 text-zinc-400">
              {experience.bullets.map((bullet) => <li className="relative pl-4 before:absolute before:left-0 before:text-teal-400 before:content-['•']" key={bullet}>{bullet}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
