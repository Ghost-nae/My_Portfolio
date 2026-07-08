const quals = [
  {
    level: 'NQF Level 5',
    title: 'Java Development',
    status: 'Certified',
    color: '#7c5bf5',
    icon: '☕',
  },
  {
    level: 'NQF Level 5',
    title: 'Software Testing',
    status: 'Certified',
    color: '#5b8af5',
    icon: '🧪',
  },
  {
    level: 'Tertiary',
    title: 'Chemical Engineering',
    status: 'Incomplete',
    color: '#8b90b0',
    icon: '⚗️',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-fade">
        <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
          Qualifications
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
          margin: '0 0 60px', letterSpacing: '-1px' }}>
          Education & Certifications
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {quals.map((q) => (
            <div key={q.title} className="glass skill-card" style={{ padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${q.color}, transparent)`,
              }} />
              <div style={{
                fontSize: 40, marginBottom: 16,
                filter: q.status === 'Incomplete' ? 'grayscale(0.5) opacity(0.6)' : 'none',
              }}>
                {q.icon}
              </div>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: q.color,
                textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace',
              }}>
                {q.level}
              </span>
              <h3 style={{ margin: '8px 0 12px', fontSize: 20, fontWeight: 700, color: 'white' }}>
                {q.title}
              </h3>
              <span style={{
                padding: '5px 12px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                background: q.status === 'Certified' ? 'rgba(34,197,94,0.12)' : 'rgba(139,144,176,0.12)',
                color: q.status === 'Certified' ? '#22c55e' : '#8b90b0',
                border: `1px solid ${q.status === 'Certified' ? 'rgba(34,197,94,0.25)' : 'rgba(139,144,176,0.2)'}`,
              }}>
                {q.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #education { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
