import Layout from './components/Layout'
import './App.css'

const sections = [
  { id: 'about', eyebrow: '01 / About', title: 'A little about me' },
  { id: 'skills', eyebrow: '02 / Skills', title: 'Tools I use to build' },
  { id: 'projects', eyebrow: '03 / Projects', title: 'Selected work' },
  { id: 'experience', eyebrow: '04 / Experience', title: 'Where I have worked' },
]

function App() {
  return (
    <Layout>
      <section id="top" className="hero mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="hero-copy max-w-3xl">
          <p className="eyebrow mb-6 text-sm font-medium uppercase tracking-[0.2em] text-teal-400">Hello, I&apos;m Anam</p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-100 sm:text-7xl">I build thoughtful digital experiences.</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">A developer focused on creating clear, useful, and human-centered products for the web.</p>
          <a className="hero-button mt-10 inline-flex items-center rounded-md bg-teal-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400" href="#projects">View my work <span aria-hidden="true">&rarr;</span></a>
        </div>
      </section>

      <div className="section-list mx-auto max-w-6xl px-6 lg:px-8">
        {sections.map((section) => (
          <section className="portfolio-section border-t border-zinc-800 py-24" id={section.id} key={section.id}>
            <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">{section.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">{section.title}</h2>
            <p className="mt-6 max-w-xl text-zinc-500">This section is ready for content. More details coming soon.</p>
          </section>
        ))}

        <section className="portfolio-section border-t border-zinc-800 py-24" id="contact">
          <p className="eyebrow text-sm font-medium uppercase tracking-[0.2em] text-teal-400">05 / Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Let&apos;s make something useful.</h2>
          <p className="mt-6 max-w-xl text-zinc-400">Have a project in mind? I&apos;d love to hear about it.</p>
          <a className="contact-link mt-8 inline-block text-teal-400 underline decoration-teal-400/40 underline-offset-8 transition-colors hover:text-teal-300" href="mailto:hello@anam.dev">hello@anam.dev</a>
        </section>
      </div>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-zinc-600 lg:px-8">© 2026 Anam</footer>
    </Layout>
  )
}

export default App
