import { useEffect, useRef } from 'react'

function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const hero = canvas.parentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointer = { x: -1000, y: -1000, active: false }
    const trail = []
    const nodes = []
    let frame = 0
    let width = 0
    let height = 0
    let visible = true

    function resize() {
      const bounds = hero.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      nodes.length = 0

      const count = Math.max(28, Math.min(72, Math.round((width * height) / 19000)))
      for (let index = 0; index < count; index += 1) {
        const x = ((index * 0.61803398875) % 1) * width
        const y = ((index * 0.75487766625) % 1) * height
        nodes.push({ x, y, originX: x, originY: y, phase: (index * 2.3999632297) % (Math.PI * 2) })
      }
      if (reducedMotion) draw()
    }

    function updatePointer(event) {
      const bounds = hero.getBoundingClientRect()
      pointer.active = event.pointerType !== 'touch' && event.clientY >= bounds.top && event.clientY <= bounds.bottom
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
      if (pointer.active && event.type === 'pointermove') {
        const previous = trail.at(-1)
        if (!previous || Math.hypot(pointer.x - previous.x, pointer.y - previous.y) > 7) {
          trail.push({ x: pointer.x, y: pointer.y, time: performance.now() })
          if (trail.length > 12) trail.shift()
        }
      }
    }

    function drawTrail(time) {
      trail.forEach((particle) => {
        const age = time - particle.time
        if (age > 360) return
        context.beginPath()
        context.arc(particle.x, particle.y, 1.5 + (age / 360) * 2, 0, Math.PI * 2)
        context.fillStyle = `rgba(45, 212, 191, ${(1 - age / 360) * 0.45})`
        context.fill()
      })
    }

    function moveNode(node, time) {
      const floatX = reducedMotion ? 0 : Math.sin(time * 0.00035 + node.phase) * 11
      const floatY = reducedMotion ? 0 : Math.cos(time * 0.0003 + node.phase) * 9
      let targetX = node.originX + floatX
      let targetY = node.originY + floatY
      const dx = pointer.x - node.x
      const dy = pointer.y - node.y
      const distance = Math.hypot(dx, dy)

      if (pointer.active && distance < 190) {
        const force = (1 - distance / 190) * 0.2
        targetX += dx * force
        targetY += dy * force
      }

      node.x += (targetX - node.x) * (reducedMotion ? 1 : 0.045)
      node.y += (targetY - node.y) * (reducedMotion ? 1 : 0.045)
      return pointer.active && distance < 190
    }

    function drawLinks(node, index) {
      for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
        const next = nodes[nextIndex]
        const distance = Math.hypot(node.x - next.x, node.y - next.y)
        if (distance > 140) continue

        const nearPointer = pointer.active && Math.hypot(pointer.x - (node.x + next.x) / 2, pointer.y - (node.y + next.y) / 2) < 190
        context.beginPath()
        context.moveTo(node.x, node.y)
        context.lineTo(next.x, next.y)
        context.strokeStyle = `rgba(${nearPointer ? '0, 133, 140' : '161, 161, 170'}, ${nearPointer ? 0.62 : 0.24 * (1 - distance / 140)})`
        context.lineWidth = nearPointer ? 1.3 : 0.85
        context.stroke()
      }
    }

    function drawNodes(time) {
      nodes.forEach((node, index) => {
        const highlighted = moveNode(node, time)
        drawLinks(node, index)
        context.beginPath()
        context.arc(node.x, node.y, highlighted ? 2.8 : 1.8, 0, Math.PI * 2)
        context.fillStyle = highlighted ? 'rgba(45, 212, 191, 1)' : 'rgba(161, 161, 170, 0.68)'
        context.shadowBlur = highlighted ? 18 : 0
        context.shadowColor = '#2dd4bf'
        context.fill()
        context.shadowBlur = 0
      })
    }

    function draw(time = 0) {
      context.clearRect(0, 0, width, height)
      drawTrail(time)
      drawNodes(time)

      if (!reducedMotion && visible) frame = window.requestAnimationFrame(draw)
    }

    function start() {
      if (!frame && !reducedMotion) frame = window.requestAnimationFrame(draw)
      else if (reducedMotion) draw()
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else {
        window.cancelAnimationFrame(frame)
        frame = 0
      }
    })

    resize()
    observer.observe(hero)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', updatePointer, { passive: true })
    start()

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', updatePointer)
    }
  }, [])

  return (
    <div className="hero-network" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default NeuralCanvas