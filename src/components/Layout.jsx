import './Layout.css'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="navbar fixed top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <a className="brand text-lg font-semibold tracking-tight" href="#top">Anam<span className="accent">.</span></a>
          <div className="nav-links flex items-center gap-6 text-sm text-zinc-400">
            {navigation.map((item) => <a className="nav-link transition-colors" key={item.href} href={item.href}>{item.label}</a>)}
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout