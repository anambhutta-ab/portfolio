import { motion, useReducedMotion } from 'framer-motion'
import NeuralCanvas from './NeuralCanvas'

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="hero relative flex min-h-screen items-center justify-center overflow-hidden px-3 pb-20 pt-32 text-center"
    >
      <NeuralCanvas />

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center"
        initial={prefersReducedMotion ? false : 'hidden'}
        animate="visible"
        transition={{ duration: 0.7, ease: 'easeOut' }}
        variants={textVariants}
      >
        <p className="eyebrow mb-6 text-base font-medium uppercase tracking-[0.2em] text-teal-400">
          Hello, I&apos;m
        </p>
        <h1 className="hero-title text-7xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-9xl" aria-label="Anam">
          {'Anam'.split('').map((letter, index) => (
            <motion.span
              aria-hidden="true"
              className="inline-block"
              key={letter}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, delay: prefersReducedMotion ? 0 : 0.18 + index * 0.1, ease: 'easeOut' }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="mt-5 text-xl font-medium text-zinc-300 sm:text-2xl">
          AI/ML &amp; Backend Engineer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          I build production RAG systems, LLM-powered apps, and fast Python backends.
        </p>
        <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <motion.a
            className="rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
          <motion.a
            className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-teal-400 hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            href="/cv/Anam_CV%2026.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero