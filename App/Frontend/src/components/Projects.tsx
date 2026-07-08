const projects = [
  {
    title: 'Kalii Store',
    repo: 'Ghost-nae/Kalii-Store',
    description: 'A modern full-stack e-commerce clothing platform with secure user authentication, product browsing, shopping cart, inventory management, admin dashboard, and a secure checkout process.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
    color: '#7c5bf5',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=300&fit=crop&auto=format',
  },
  {
    title: 'Nova-Link',
    repo: 'Ghost-nae/Nova-Link',
    description: 'A digital payment platform inspired by PayShap for instant peer-to-peer money transfers with secure authentication, real-time payment processing, and transaction history.',
    tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    color: '#5b8af5',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop&auto=format',
  },
  {
    title: 'ThriveCheck',
    repo: 'Ghost-nae/ThriveCheck',
    description: 'A health and wellness management platform enabling users to monitor personal health metrics, appointments, reports, and overall wellness through an intuitive dashboard.',
    tech: ['Spring Boot', 'Angular', 'PostgreSQL'],
    color: '#22c55e',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=300&fit=crop&auto=format',
  },
  {
    title: 'FleetFlow',
    repo: 'Ghost-nae/FleetFlow',
    description: 'A fleet management solution helping organizations manage vehicles, drivers, maintenance schedules, fuel consumption, and logistics through a centralized enterprise dashboard.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=300&fit=crop&auto=format',
  },
  {
    title: 'IntercityRide',
    repo: 'Ghost-nae/IntercityRide',
    description: 'An online transportation booking platform for searching available routes, reserving seats, and managing bookings for long-distance travel.',
    tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
    color: '#ec4899',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=300&fit=crop&auto=format',
  },
  {
    title: 'Hotel Management System',
    repo: 'Ghost-nae/Hotel_Management-System',
    description: 'A hotel management application streamlining operations through room management, reservations, customer registration, booking management, payment processing, and admin tools.',
    tech: ['Python'],
    color: '#06b6d4',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=300&fit=crop&auto=format',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-fade">
        <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
          What I've built
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
          margin: '0 0 60px', letterSpacing: '-1px' }}>
          Featured Projects
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass project-card"
              style={{ overflow: 'hidden', position: 'relative' }}
            >
              {/* Animated top border */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${p.color}, transparent)`,
              }} />

              {/* Image */}
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, transparent 40%, rgba(7,11,31,0.9))`,
                }} />
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 700, color: 'white' }}>
                  {p.title}
                </h3>
                <p style={{ margin: '0 0 20px', fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                  {p.description}
                </p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                      background: `${p.color}18`, color: p.color,
                      border: `1px solid ${p.color}33`,
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <a
                    href={`https://github.com/${p.repo}`}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', flex: 1, justifyContent: 'center' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    Repository
                  </a>
                  <a href="#" className="btn-ghost"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', flex: 1, justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1h6zm11-3v8l-3.5-3.5-5 5-1.42-1.42 5-5L13 3h8z" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #projects { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
