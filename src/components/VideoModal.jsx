import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function getEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}`
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      const videoId = parsedUrl.searchParams.get('v')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url
    }

    if (parsedUrl.hostname.includes('vimeo.com')) {
      const videoId = parsedUrl.pathname.split('/').filter(Boolean).pop()
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url
    }
  } catch {
    return null
  }

  return null
}

function VideoModal({ project, onClose }) {
  const embedUrl = getEmbedUrl(project.demoVideoUrl)
  const isEmbed = Boolean(embedUrl)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-label={`${project.title} demo video`}
        aria-modal="true"
      >
        <motion.div
          className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-teal-400/25 bg-zinc-900 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
            <h2 className="pr-4 text-base font-semibold text-zinc-100">{project.title} demo</h2>
            <button
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xl text-zinc-400 transition-colors duration-100 hover:bg-zinc-800 hover:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              type="button"
              onClick={onClose}
              aria-label="Close video modal"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="aspect-video bg-black">
            {isEmbed ? (
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title={`${project.title} demo video`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video className="h-full w-full" controls autoPlay src={project.demoVideoUrl}>
                Your browser does not support embedded videos.
              </video>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default VideoModal