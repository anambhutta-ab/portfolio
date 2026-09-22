import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectCaseStudy from './components/ProjectCaseStudy'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function Portfolio() {
  return (
    <Layout>
      <Hero />
      <div className="section-list mx-auto max-w-6xl px-6 lg:px-8">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </Layout>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
      </Routes>
    </>
  )
}

export default App
