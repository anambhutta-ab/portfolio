import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function Hero() {
  return (
    <section id="top" className="hero mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 pb-20 pt-32 text-center lg:px-8">
      <motion.div
        className="flex max-w-3xl flex-col items-center"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: 'easeOut' }}
        variants={textVariants}
      >
        <p className="eyebrow mb-6 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">Hello, I&apos;m</p>
        <h1 className="text-6xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-8xl">Anam</h1>
        <p className="mt-5 text-xl font-medium text-zinc-300 sm:text-2xl">AI/ML &amp; Backend Engineer</p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">I build production RAG systems, LLM-powered apps, and fast Python backends.</p>
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
            href="/cv.pdf"
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
