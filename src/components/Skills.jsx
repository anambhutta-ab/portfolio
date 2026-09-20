import { motion } from 'framer-motion'

const skillClusters = [
  {
    title: 'AI/ML',
    skills: ['RAG', 'LLMs', 'Embeddings', 'ChromaDB', 'LangChain', 'Supervised learning', 'CNNs', 'Transfer Learning', 'Transformers'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Python', 'FastAPI', 'REST', 'pytest', 'data processing', 'chunking', 'vector search'],
  },
  {
    title: 'Frontend & DevOps',
    skills: ['React', 'Vite', 'responsive UI', 'Git', 'Docker', 'Vercel / Render / Hugging Face deployments'],
  },
]

function Skills() {
  return (
    <section className="portfolio-section border-t border-zinc-800 py-24" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">02 / Skills</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Tools I use to build</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillClusters.map((cluster) => (
            <motion.article
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 transition-colors"
              key={cluster.title}
              whileHover={{ y: -6, boxShadow: '0 12px 36px rgba(45, 212, 191, 0.12)', borderColor: 'rgba(45, 212, 191, 0.45)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <h3 className="text-lg font-semibold text-zinc-100">{cluster.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cluster.skills.map((skill) => (
                  <li className="rounded-md border border-zinc-700/80 bg-zinc-950/70 px-3 py-1.5 text-sm text-zinc-400" key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
