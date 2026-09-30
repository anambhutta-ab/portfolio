import { useMemo, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import DataStreamContext from './DataStreamContext'

function ConnectedDataStream({ children }) {
  const streamRef = useRef(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const { scrollYProgress } = useScroll({
    target: streamRef,
    offset: ['start end', 'end start'],
  })

  const contextValue = useMemo(() => ({
    scrollYProgress,
    streamRef,
    activeSkill: hoveredSkill || selectedSkill,
    selectedSkill,
    setHoveredSkill,
    setSelectedSkill,
  }), [scrollYProgress, hoveredSkill, selectedSkill])

  // Particle moves from top to bottom as you scroll through the stream
  const particleY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <DataStreamContext.Provider value={contextValue}>
      <div className="connected-stream relative" ref={streamRef}>
        {/* Vertical data line */}
        <div className="connected-stream-line absolute left-6 top-0 h-full w-px bg-zinc-800" aria-hidden="true">
          {/* Glowing particle traveling down the line */}
          <motion.span
            className="connected-stream-particle absolute -left-[3px] h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_12px_2px_rgba(45,212,191,0.9)]"
            style={{ top: particleY }}
          />
        </div>

        {children}
      </div>
    </DataStreamContext.Provider>
  )
}

export default ConnectedDataStream