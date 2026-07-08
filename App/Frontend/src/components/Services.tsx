const services = [
  { title: 'Full-Stack Web Development', icon: '🌐', desc: 'End-to-end applications from database to UI' },
  { title: 'Java Backend Development', icon: '☕', desc: 'Scalable Java services and microservices' },
  { title: 'REST API Development', icon: '⚡', desc: 'Clean, documented RESTful API design' },
  { title: 'Database Design', icon: '🗄️', desc: 'Schema design, optimization, and migrations' },
  { title: 'Frontend Development', icon: '🎨', desc: 'Angular and React UI implementation' },
  { title: 'Software Testing & QA', icon: '🧪', desc: 'Manual, Automation, regression, and API testing' },
  { title: 'UI Development', icon: '✦', desc: 'Responsive, accessible user interfaces' },
  { title: 'Application Deployment', icon: '🚀', desc: 'Docker containerization and deployment' },
  { title: 'Software Maintenance', icon: '🔧', desc: 'Bug fixes, refactoring, and performance tuning' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 48px', background: 'rgba(0,0,0,0.15)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-fade">
          <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
            What I offer
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
            margin: '0 0 60px', letterSpacing: '-1px' }}>
            Services
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {services.map((s, i) => (
              <div
                key={s.title}
                className="glass skill-card"
                style={{ padding: '28px 28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: `rgba(124,91,245,${0.08 + (i % 3) * 0.04})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, border: '1px solid rgba(124,91,245,0.2)',
                }}>
                  {s.icon}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: 'white' }}>
                    {s.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #services { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
