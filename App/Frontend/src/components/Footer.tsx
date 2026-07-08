export default function Footer() {
  return (
    <footer style={{
      padding: '40px 48px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(0,0,0,0.3)',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        textAlign: 'center',
      }}>
        <span style={{ fontSize: 20, fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>
          NM<span style={{ color: '#7c5bf5' }}>.</span>
        </span>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
          Designed & Developed by <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Nkosinathi Manda</span>
        </p>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          © 2026 All Rights Reserved.
        </p>
        <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          Built with ❤️ using Angular, Spring Boot, React, and PostgreSQL.
        </p>
      </div>
    </footer>
  )
}
