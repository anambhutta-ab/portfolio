import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anam-fatima-bhutta/' },
  { label: 'GitHub', href: 'https://github.com/anambhutta-ab' },
]

function Contact() {
  return (
    <motion.section
      className="portfolio-section py-24 text-center"
      id="contact"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionHeading eyebrow="05 / Contact">Let&apos;s work together</SectionHeading>
      <p className="mx-auto mt-6 max-w-xl text-zinc-400">Interested in AI/ML or backend roles? Let&apos;s talk.</p>
      <div className="contact-transmission mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <motion.a
          className="rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
          href="mailto:anambhutta15@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
        >
          Email me
        </motion.a>
        {socialLinks.map((link) => (
          <motion.a
            className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-teal-400 hover:text-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

export default Contact
