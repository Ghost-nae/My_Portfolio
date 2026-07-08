const highlights = [
  'Enterprise Applications', 'RESTful APIs', 'Database-Driven Systems',
  'Responsive Web Apps', 'Authentication Systems', 'Admin Dashboards',
  'Full-Stack Solutions', 'Manual Testing', 'API Testing', 'Regression Testing',
  'Agile Development', 'Clean Architecture', 'Automation Testing',
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-fade">
        <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
          Who I am
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
          margin: '0 0 60px', letterSpacing: '-1px' }}>
          About Me
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: 'white', margin: '0 0 20px' }}>
              Nkosinathi Manda
            </h3>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 20px' }}>
              A Software Engineer and Full-Stack Java Developer based in Johannesburg, South Africa.
              I specialize in building scalable enterprise applications using Java, Spring Boot,
              React, Angular, PostgreSQL, and Docker.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: '0 0 20px' }}>
              My expertise spans creating responsive user interfaces and robust backend services
              from RESTful API design and database architecture to authentication systems and
              full-featured admin dashboards.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0 }}>
              I bring a solid foundation in Software Testing including Manual Testing, Automation Testing, API Testing
              with Postman, Regression Testing, and Defect Reporting enabling me to deliver
              high-quality, production-ready software.
            </p>
          </div>

          {/* Right: highlights grid */}
          <div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 20, fontWeight: 500 }}>
              Areas of expertise
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {highlights.map((h) => (
                <span key={h} style={{
                  padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500,
                  background: 'rgba(124,91,245,0.1)', color: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(124,91,245,0.2)',
                }}>
                  {h}
                </span>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 40 }}>
              {[
                { num: '6+', label: 'Projects Shipped' },
                { num: '5+', label: 'Tech Stacks' },
                { num: '2', label: 'Roles Mastered' },
                { num: 'NQF 5', label: 'Certified' },
              ].map((s) => (
                <div key={s.label} className="glass" style={{ padding: '20px 24px' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'white' }} className="gradient-text">
                    {s.num}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
