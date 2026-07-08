const experiences = [
  {
    role: 'Software Engineer | Full-Stack Java Developer',
    type: 'Development',
    color: '#7c5bf5',
    responsibilities: [
      'Designing and developing scalable full-stack web applications using Java, Spring Boot, Angular, React, PostgreSQL, Docker, and RESTful APIs',
      'Designing backend architectures and building REST APIs',
      'Database design and optimization',
      'Frontend implementation with Angular and React',
      'Authentication & authorization systems',
      'Admin dashboards and reporting tools',
      'Performance optimization and code reviews',
      'Agile collaboration and sprint planning',
    ],
  },
  {
    role: 'Software Tester',
    type: 'Quality Assurance',
    color: '#5b8af5',
    responsibilities: [
      'Manual and Functional Testing',
      'Regression Testing across application releases',
      'API Testing using Postman',
      'Test Case Design and documentation',
      'Bug Reporting and defect tracking',
      'Quality Assurance processes and standards',
      'Collaboration with development teams',
      'Software validation and acceptance testing',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 48px', background: 'rgba(0,0,0,0.15)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-fade">
          <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
            Career path
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
            margin: '0 0 60px', letterSpacing: '-1px' }}>
            Professional Experience
          </h2>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: 32 }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: 0, top: 24, bottom: 24, width: 2,
              background: 'linear-gradient(to bottom, #7c5bf5, #5b8af5, transparent)',
            }} />

            {experiences.map((exp, i) => (
              <div key={exp.role} style={{ position: 'relative', marginBottom: i < experiences.length - 1 ? 56 : 0 }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -40, top: 24, width: 16, height: 16,
                  borderRadius: '50%', background: exp.color,
                  boxShadow: `0 0 16px ${exp.color}60`,
                  border: '3px solid #070B1F',
                }} />

                <div className="glass" style={{ padding: '32px 36px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
                    <div>
                      <span style={{
                        fontSize: 12, fontWeight: 600, color: exp.color, letterSpacing: '0.1em',
                        textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace',
                        display: 'block', marginBottom: 8,
                      }}>
                        {exp.type}
                      </span>
                      <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: 'white' }}>
                        {exp.role}
                      </h3>
                    </div>
                    <span style={{
                      padding: '6px 14px', borderRadius: 20, fontSize: 12,
                      background: `${exp.color}15`, color: exp.color,
                      border: `1px solid ${exp.color}30`, fontWeight: 600,
                    }}>
                      Johannesburg, SA
                    </span>
                  </div>

                  <ul style={{ margin: 0, padding: '0 0 0 0', listStyle: 'none', display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
                    {exp.responsibilities.map((r) => (
                      <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 10,
                        fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                        <span style={{ color: exp.color, marginTop: 2, flexShrink: 0 }}>▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #experience { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
