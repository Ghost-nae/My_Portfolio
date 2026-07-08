import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Services', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 32px',
      height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(7, 11, 31, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <span style={{ fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: '-0.5px' }}>
        NM<span style={{ color: '#7c5bf5' }}>.</span>
      </span>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="hidden-mobile">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="nav-link"
            style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
              fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: '4px 0',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {l}
          </button>
        ))}
        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: 13 }}
          onClick={() => scrollTo('Contact')}>
          Hire Me
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
        className="show-mobile"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          {menuOpen
            ? <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 64, left: 0, right: 0,
          background: 'rgba(10,14,40,0.97)', backdropFilter: 'blur(20px)',
          padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 16,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)}
              style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)',
                fontSize: 16, fontWeight: 500, cursor: 'pointer', textAlign: 'left',
                fontFamily: 'Inter, sans-serif',
              }}>
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
