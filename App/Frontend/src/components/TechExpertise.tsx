import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Java', level: 88, color: '#f89820' },
  { name: 'Spring Boot', level: 85, color: '#6db33f' },
  { name: 'React', level: 80, color: '#61dafb' },
  { name: 'Angular', level: 78, color: '#dd0031' },
  { name: 'Python', level: 70, color: '#3572A5' },
  { name: 'SQL', level: 82, color: '#336791' },
  { name: 'REST APIs', level: 90, color: '#7c5bf5' },
  { name: 'Docker', level: 72, color: '#2496ed' },
  { name: 'Git', level: 85, color: '#f05032' },
  { name: 'Software Testing', level: 78, color: '#22c55e' },
]

export default function TechExpertise() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="expertise" style={{ padding: '100px 48px', maxWidth: 1200, margin: '0 auto' }}>
      <div className="section-fade" ref={ref}>
        <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
          Proficiency levels
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
          margin: '0 0 60px', letterSpacing: '-1px' }}>
          Technical Expertise
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: 20 }}>
          {skills.map((skill) => (
            <div key={skill.name} className="glass" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>{skill.name}</span>
                <span style={{ fontSize: 13, color: skill.color, fontWeight: 700,
                  fontFamily: 'JetBrains Mono, monospace' }}>
                  {skill.level}%
                </span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div
                  className="progress-bar"
                  style={{
                    width: animated ? `${skill.level}%` : '0%',
                    height: '100%',
                    borderRadius: 3,
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                    transition: 'width 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `0 0 8px ${skill.color}50`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #expertise { padding: 80px 24px !important; }
          #expertise > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
