import Layout from './components/Layout'
import Hero from './components/Hero'
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
      <Hero />

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
