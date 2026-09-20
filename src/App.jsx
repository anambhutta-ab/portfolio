import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import './App.css'

function App() {
  return (
    <Layout>
      <Hero />
      <div className="section-list mx-auto max-w-6xl px-6 lg:px-8">
        <About />
        <Skills />
        <Projects />
        <Experience />

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
