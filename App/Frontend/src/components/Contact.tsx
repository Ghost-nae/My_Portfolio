import { useState } from 'react'

const socials = [
  {
    label: 'GitHub', href: 'https://github.com/Ghost-nae', color: '#ffffff',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/nkosinathi-manda-2388761b4/', color: '#0a66c2',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email', href: 'nkosinathinhlanhla4@gmail.com', color: '#ea4335',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp', href: 'https://wa.me/27681005684?text=Hi%20Nkosinathi,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.',
    color: '#25d366',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" style={{ padding: '100px 48px', background: 'rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="section-fade">
          <p style={{ fontSize: 13, color: '#7c5bf5', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
            Let's work together
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'white',
            margin: '0 0 16px', letterSpacing: '-1px' }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', margin: '0 0 52px', lineHeight: 1.6 }}>
            Open to opportunities, collaborations, and interesting projects.
          </p>

          <div className="glass-strong" style={{ padding: '48px' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                <Field label="Full Name" value={form.name} type="text"
                  onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Email Address" value={form.email} type="email"
                  onChange={(v) => setForm({ ...form, email: v })} required />
              </div>
              <div style={{ marginBottom: 20 }}>
                <Field label="Subject" value={form.subject} type="text"
                  onChange={(v) => setForm({ ...form, subject: v })} required />
              </div>
              <div style={{ marginBottom: 32 }}>
                <TextAreaField label="Message" value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })} required />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: 16 }}>
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 52 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.target} rel={s.rel} aria-label={s.label}
                className="glass"
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                  padding: '20px 28px', borderRadius: 16, textDecoration: 'none',
                  color: 'rgba(255,255,255,0.6)', transition: 'all 0.2s',
                  minWidth: 80,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = s.color
                  ;(e.currentTarget as HTMLElement).style.borderColor = `${s.color}40`
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${s.color}20`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = ''
                  ;(e.currentTarget as HTMLElement).style.transform = ''
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ''
                }}
              >
                {s.icon}
                <span style={{ fontSize: 12, fontWeight: 500 }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact { padding: 80px 24px !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
          #contact .glass-strong { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  )
}

function Field({ label, value, type, onChange, required }: {
  label: string; value: string; type: string; onChange: (v: string) => void; required?: boolean
}) {
  return (
    <div style={{ position: 'relative' }}>
      <label style={{
        display: 'block', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)',
        marginBottom: 8,
      }}>
        {label}
      </label>
      <input
        type={type} value={value} required={required}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: 10, fontSize: 15,
          background: 'rgba(255,255,255,0.05)', color: 'white',
          border: '1px solid rgba(255,255,255,0.1)', outline: 'none',
          fontFamily: 'Inter, sans-serif',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'rgba(124,91,245,0.6)')}
        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
      />
    </div>
  )
}

function TextAreaField({ label, value, onChange, required }: {
  label: string; value: string; onChange: (v: string) => void; required?: boolean
}) {
  return (
    <div>
      <label style={{
        display: 'block', fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)',
        marginBottom: 8,
      }}>
        {label}
      </label>
      <textarea
        value={value} required={required} rows={5}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%', padding: '14px 16px', borderRadius: 10, fontSize: 15,
          background: 'rgba(255,255,255,0.05)', color: 'white',
          border: '1px solid rgba(255,255,255,0.1)', outline: 'none',
          fontFamily: 'Inter, sans-serif', resize: 'vertical',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => (e.target.style.borderColor = 'rgba(124,91,245,0.6)')}
        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
      />
    </div>
  )
}
