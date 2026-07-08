import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Services from './components/Services'
import TechExpertise from './components/TechExpertise'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

export default function App() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.section-fade').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div style={{ background: '#070B1F', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Particles />
      {/* Global background glow orbs */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,75,255,0.25) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'fixed', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90,60,220,0.12) 0%, transparent 70%)',
        top: '20%', right: '-15%', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'fixed', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(70,100,255,0.08) 0%, transparent 70%)',
        bottom: '10%', left: '-10%', pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Services />
        <TechExpertise />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
