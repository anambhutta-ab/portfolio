import { motion } from 'framer-motion'

function About() {
  return (
    <section className="portfolio-section border-t border-zinc-800 py-24" id="about">
      <motion.div
        className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-teal-400/40 bg-teal-400/10 text-3xl font-semibold text-teal-400" aria-label="Anam avatar placeholder">
          A
        </div>
        <div className="max-w-2xl">
          <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">01 / About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">A little about me</h2>
          <div className="mt-6 space-y-3 text-base leading-7 text-zinc-400">
            <p>Recent software engineering grad focused on AI/ML and backend development.</p>
            <p>I enjoy building RAG chatbots, document QA systems, and ML APIs.</p>
            <p>I care about production quality: tests, clean code, and reliable deployment.</p>
            <p>I&apos;m looking for AI/ML or backend engineer roles.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
