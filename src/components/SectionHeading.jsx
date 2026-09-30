import { useContext, useLayoutEffect, useRef, useState } from 'react'
import { motion, useTransform } from 'framer-motion'
import DataStreamContext from './DataStreamContext'

function SectionHeading({ eyebrow, children }) {
  const headingRef = useRef(null)
  const [packetProgress, setPacketProgress] = useState(0.5)
  const { scrollYProgress, streamRef } = useContext(DataStreamContext)

  useLayoutEffect(() => {
    const updateHeadingPosition = () => {
      if (!headingRef.current || !streamRef?.current) return

      const streamBounds = streamRef.current.getBoundingClientRect()
      const headingBounds = headingRef.current.getBoundingClientRect()
      const progress = (headingBounds.top - streamBounds.top) / streamRef.current.offsetHeight
      setPacketProgress(Math.min(0.98, Math.max(0.02, progress)))
    }

    updateHeadingPosition()
    window.addEventListener('resize', updateHeadingPosition)

    return () => window.removeEventListener('resize', updateHeadingPosition)
  }, [streamRef])

  const glow = useTransform(
    scrollYProgress,
    [Math.max(0, packetProgress - 0.018), packetProgress, Math.min(1, packetProgress + 0.018)],
    [0, 1, 0],
  )
  const headingColor = useTransform(glow, [0, 1], ['#f4f4f5', '#99f6e4'])
  const headingShadow = useTransform(glow, [0, 1], ['0 0 0 rgba(45, 212, 191, 0)', '0 0 26px rgba(45, 212, 191, 0.7)'])
  const headingScale = useTransform(glow, [0, 1], [1, 1.015])

  return (
    <div ref={headingRef}>
      <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">{eyebrow}</p>
      <motion.h2
        className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl"
        style={{ color: headingColor, textShadow: headingShadow, scale: headingScale, transformOrigin: 'left center' }}
      >
        {children}
      </motion.h2>
    </div>
  )
}

export default SectionHeading