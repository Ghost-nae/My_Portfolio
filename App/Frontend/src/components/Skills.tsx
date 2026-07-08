const categories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Java', color: '#f89820', icon: '☕' },
      { name: 'Python', color: '#3572A5', icon: '🐍' },
      { name: 'JavaScript', color: '#f7df1e', icon: 'JS' },
      { name: 'TypeScript', color: '#3178c6', icon: 'TS' },
      { name: 'HTML5', color: '#e34f26', icon: 'H5' },
      { name: 'CSS3', color: '#1572b6', icon: 'C3' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Spring Boot', color: '#6db33f', icon: '🌱' },
      { name: 'REST APIs', color: '#7c5bf5', icon: '⚡' },
      { name: 'Maven', color: '#c71a36', icon: 'M' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'Angular', color: '#dd0031', icon: 'A' },
      { name: 'React', color: '#61dafb', icon: '⚛' },
      { name: 'Bootstrap', color: '#7952b3', icon: 'B' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', color: '#336791', icon: '🐘' },
      { name: 'MySQL', color: '#4479a1', icon: 'DB' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Docker', color: '#2496ed', icon: '🐳' },
      { name: 'Kubernetes', color: '#326ce5', icon: 'K8s' },
      { name: 'Git', color: '#f05032', icon: '◎' },
      { name: 'GitHub', color: '#ffffff', icon: '' },
      { name: 'GitLab', color: '#fc6d26', icon: '◈' },
      { name: 'Postman', color: '#ff6c37', icon: 'PM' },
      { name: 'VS Code', color: '#007acc', icon: '{}' },
      { name: 'Figma', color: '#f24e1e', icon: '▽' },
    ],
  },
]

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 48px', background: 'rgba(0,0,0,0.15)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-fade">
          <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
            What I work with
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
            margin: '0 0 60px', letterSpacing: '-1px' }}>
            Skills & Tech Stack
          </h2>

          {categories.map((cat) => (
            <div key={cat.name} style={{ marginBottom: 48 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.1em',
                fontFamily: 'JetBrains Mono, monospace', fontSize: 12 }}>
                {cat.name}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 12 }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass skill-card"
                    style={{ padding: '20px 16px', textAlign: 'center', cursor: 'default' }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, margin: '0 auto 12px',
                      background: `${skill.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: skill.icon.length > 2 ? 11 : 20, color: skill.color,
                      fontWeight: 700, border: `1px solid ${skill.color}33`,
                      fontFamily: skill.icon.length > 2 ? 'JetBrains Mono, monospace' : 'inherit',
                    }}>
                      {skill.name === 'GitHub' ? <GitHubIcon /> : skill.icon}
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #skills { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  )
}
