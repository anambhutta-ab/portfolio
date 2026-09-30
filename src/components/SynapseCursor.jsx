import { useEffect, useRef } from 'react'

const trailCount = 5

function SynapseCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const trailRefs = useRef([])

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const target = { x: -100, y: -100 }
    const particles = Array.from({ length: trailCount }, () => ({ x: -100, y: -100 }))
    let frame = 0
    let pulseTimeout = 0

    function onPointerMove(event) {
      if (event.pointerType === 'touch') return
      target.x = event.clientX
      target.y = event.clientY
      cursorRef.current.style.opacity = '1'
      ringRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`
    }

    function onPointerDown(event) {
      if (event.pointerType === 'touch') return
      ringRef.current.classList.add('is-firing')
      window.clearTimeout(pulseTimeout)
      pulseTimeout = window.setTimeout(() => ringRef.current?.classList.remove('is-firing'), 260)
    }

    function onPointerLeave() {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
    }

    function animateTrail() {
      particles.forEach((particle, index) => {
        const source = index === 0 ? target : particles[index - 1]
        const easing = 0.28 - index * 0.025
        particle.x += (source.x - particle.x) * easing
        particle.y += (source.y - particle.y) * easing
        const element = trailRefs.current[index]
        if (!element) return
        element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) translate(-50%, -50%)`
        element.style.opacity = String(0.26 - index * 0.04)
      })
      frame = window.requestAnimationFrame(animateTrail)
    }

    document.body.classList.add('has-neural-cursor')
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    if (!reducedMotion) animateTrail()

    return () => {
      document.body.classList.remove('has-neural-cursor')
      window.cancelAnimationFrame(frame)
      window.clearTimeout(pulseTimeout)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <div className="synapse-cursor" ref={cursorRef} aria-hidden="true">
      <span className="synapse-cursor-ring" ref={ringRef} />
      {Array.from({ length: trailCount }, (_, index) => (
        <span className="synapse-cursor-particle" key={index} ref={(element) => { trailRefs.current[index] = element }} />
      ))}
    </div>
  )
}

export default SynapseCursor