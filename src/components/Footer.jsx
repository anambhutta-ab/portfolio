const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anam' },
  { label: 'GitHub', href: 'https://github.com/anam' },
]

function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-zinc-800 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <p>© {new Date().getFullYear()} Anam. All rights reserved.</p>
      <nav className="flex gap-5" aria-label="Footer navigation">
        {socialLinks.map((link) => (
          <a className="transition-colors hover:text-teal-400" href={link.href} key={link.label} rel="noreferrer" target="_blank">{link.label}</a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
