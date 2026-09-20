import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'AI/ML Developer',
    company: 'Freelance / Self-employed',
    dates: '2025 - Present',
    bullets: [
      'Built document-grounded RAG chatbots for business knowledge and FAQs.',
      'Developed FastAPI backends for LLM and machine learning workflows.',
      'Added testing, validation, and deployment practices for production quality.',
    ],
  },
  {
    title: 'Backend Engineering Intern',
    company: 'Netsol Technologies · Lahore, Pakistan',
    dates: 'August 2025 - September 2025',
    bullets: [
      'Implemented REST endpoints and data processing workflows with Python.',
      'Supported integration between Flutter application workflows and FastAPI backend services.',
      'Collaborated in an Agile development environment while following coding standards.'
    ],
  },
  {
    title: 'Final Year Project - Machine Learning',
    company: 'Software Engineering, COMSATS University',
    dates: '2025 - 2026',
    bullets: [
      'Focused coursework and projects on software engineering, AI/ML, and backend systems.',
      'Built Final Year Project focused on Machine Learning - Skin Disease Detection Application.',
      'Fine-tuned pretrained ResNet50, EfficientNetB3, and MobileNet models for skin disease classification.',
      'Applied early stopping and regularization, achieving up to 93% validation accuracy.',
      'Developed a FastAPI inference endpoint for real-time image-based predictions'
    ],
  }
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
