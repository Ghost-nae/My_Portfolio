const socialIcons = [
  {
    label: 'GitHub', href: 'https://github.com/Ghost-nae',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/nkosinathi-manda-2388761b4/',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email', href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: 'Resume', href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2zm0-4h5v2H8V7z" />
      </svg>
    ),
  },
]

const stack = ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'React', 'Python', 'Docker']

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '80px 48px 60px',
      position: 'relative',
    }}>
      {/* Social icons — top right */}
      <div style={{
        position: 'absolute', top: 80, right: 48,
        display: 'flex', gap: 12,
      }}>
        {socialIcons.map((s) => (
         <a
  key={s.label}
  href={s.href}
  target={s.target}
  rel={s.rel}
  aria-label={s.label}
  className="glass"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 12,
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    transition: 'all 0.2s',
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLElement).style.color = '#fff'
    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,91,245,0.5)'
    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(124,91,245,0.3)'
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
    ;(e.currentTarget as HTMLElement).style.borderColor = ''
    ;(e.currentTarget as HTMLElement).style.boxShadow = ''
  }}
>
  {s.icon}
</a>
        ))}
      </div>

      <div style={{ maxWidth: 800 }}>
        {/* Profile image + username */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', overflow: 'hidden',
              border: '2px solid rgba(124,91,245,0.6)',
            }} className="animate-pulse-glow">
              <div style={{
                width: '100%', height: '100%', background: 'linear-gradient(135deg, #7c5bf5 0%, #5b8af5 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 700, color: 'white',
              }}>
                NM
              </div>
            </div>
            <div style={{
              position: 'absolute', bottom: 2, right: 2,
              width: 14, height: 14, borderRadius: '50%',
              background: '#22c55e', border: '2px solid #070B1F',
            }} />
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.5)', fontFamily: 'JetBrains Mono, monospace' }}>
              Ghost-nae
            </p>
            <p style={{ margin: 0, fontSize: 13, color: 'rgba(124,91,245,0.8)', marginTop: 2 }}>
              ● Available for work
            </p>
          </div>
        </div>

        {/* Main heading */}
        <div style={{ marginBottom: 20 }}>
          <h1 style={{
            margin: 0, fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800,
            lineHeight: 1.1, color: 'white', letterSpacing: '-1.5px',
          }}>
            Software Engineer
          </h1>
          <h1 style={{
            margin: 0, fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800,
            lineHeight: 1.1, letterSpacing: '-1.5px',
          }} className="gradient-text">
            Full-Stack Java Dev
          </h1>
        </div>

        <p style={{
          margin: '0 0 36px', fontSize: 18, color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.6, maxWidth: 560,
        }}>
          Building scalable enterprise applications with elegant interfaces
          and robust backend services based in Johannesburg, South Africa.
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 0, marginBottom: 44 }}>
          {stack.map((tech, i) => (
            <span key={tech} style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500,
                fontFamily: 'JetBrains Mono, monospace',
              }}>
                {tech}
              </span>
              {i < stack.length - 1 && (
                <span style={{ margin: '0 12px', color: 'rgba(124,91,245,0.5)', fontSize: 16 }}>|</span>
              )}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <button className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <button className="btn-ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div className="animate-scroll-bounce" style={{
          width: 24, height: 38, border: '2px solid rgba(255,255,255,0.2)', borderRadius: 12,
          display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{ width: 4, height: 8, borderRadius: 2, background: 'rgba(124,91,245,0.8)' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero { padding: 80px 24px 60px !important; }
          #hero .social-row { top: 72px !important; right: 24px !important; }
        }
      `}</style>
    </section>
  )
}
