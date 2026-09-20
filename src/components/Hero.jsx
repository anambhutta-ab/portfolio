import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

function Hero() {
  return (
    <section
      id="top"
      className="hero relative mx-auto flex min-h-screen max-w-6xl items-center justify-center overflow-hidden px-3 pb-20 pt-32 text-center lg:px-8"
    >
      {/* Neural network background */}
      <svg
        className="pointer-events-none absolute inset-0 h-300 w-250 opacity-20"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        
        {[ 
          [200, 180, 400, 140], [200, 180, 400, 200], [200, 180, 400, 260],
          [200, 260, 400, 140], [200, 260, 400, 200], [200, 260, 400, 260], [200, 260, 400, 320],
          [200, 340, 400, 200], [200, 340, 400, 260], [200, 340, 400, 320], [200, 340, 400, 380],
          [200, 420, 400, 260], [200, 420, 400, 320], [200, 420, 400, 380], [200, 420, 400, 440],
          [200, 500, 400, 380], [200, 500, 400, 440], [200, 500, 400, 500],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={`in-hid-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#9ca3af"
            strokeWidth="1"
            opacity="0.25"
          />
        ))}

        {[ 
          [400, 140, 600, 240], [400, 140, 600, 300],
          [400, 200, 600, 240], [400, 200, 600, 300],
          [400, 260, 600, 240], [400, 260, 600, 300], [400, 260, 600, 360],
          [400, 320, 600, 240], [400, 320, 600, 300], [400, 320, 600, 360],
          [400, 380, 600, 300], [400, 380, 600, 360],
          [400, 440, 600, 300], [400, 440, 600, 360], [400, 440, 600, 420],
          [400, 500, 600, 360], [400, 500, 600, 420],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={`hid-out-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#9ca3af"
            strokeWidth="1"
            opacity="0.25"
          />
        ))}

        {/* Nodes: Input layer */}
        {[180, 260, 340, 420, 500].map((y, i) => (
          <circle
            key={`input-${i}`}
            cx="200"
            cy={y}
            r="6"
            fill="#9ca3af"
            opacity="0.25"
          />
        ))}

        {/* Nodes: Hidden layer */}
        {[140, 200, 260, 320, 380, 440, 500].map((y, i) => (
          <circle
            key={`hidden-${i}`}
            cx="400"
            cy={y}
            r="6"
            fill="#9ca3af"
            opacity="0.25"
          />
        ))}

        {/* Nodes: Output layer */}
        {[240, 300, 360, 420].map((y, i) => (
          <circle
            key={`output-${i}`}
            cx="600"
            cy={y}
            r="7"
            fill="#9ca3af"
            opacity="1"
          />
        ))}
      </svg>

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: 'easeOut' }}
        variants={textVariants}
      >
        <p className="eyebrow mb-6 text-base font-medium uppercase tracking-[0.2em] text-teal-400">
          Hello, I&apos;m
        </p>
        <h1 className="text-6xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-8xl">
          Anam
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
            href="public/cv/Anam_CV 26.pdf"
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