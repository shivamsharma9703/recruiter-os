"use client";

export default function Nav() {
  function goTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "18px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: "1px solid #1c1c1c",
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(20px)",
    }}>

      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div style={{
          width: 28, height: 28, background: "#fff", borderRadius: 7,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="7" y="2" width="2" height="12" rx="1" fill="black"/>
            <rect x="2" y="7" width="12" height="2" rx="1" fill="black"/>
          </svg>
        </div>
        <span style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>Recruiter OS</span>
      </a>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {[
          { label: "Features",     id: "#features" },
          { label: "How it works", id: "#how"      },
          { label: "Pricing",      id: "#pricing"  },
          { label: "Vision",       id: "#vision"   },
          { label: "Book Demo",    id: "#demo"     },
        ].map((item) => (
          <button key={item.id} onClick={() => goTo(item.id)} style={{
            background: "none", border: "none", cursor: "pointer",
            fontSize: 13, color: "#888", fontWeight: 600,
            fontFamily: "var(--font)", padding: 0,
            transition: "color 0.15s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "#888")}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA Buttons */}
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => goTo("#demo")} style={{
          padding: "11px 20px", borderRadius: 10,
          background: "transparent", border: "1px solid #2a2a2a",
          color: "#666", fontSize: 13, fontWeight: 700,
          fontFamily: "var(--font)", cursor: "pointer",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#666"; }}
        >
          Book Demo
        </button>

        <button onClick={() => goTo("#demo")} style={{
          padding: "11px 20px", borderRadius: 10,
          background: "#fff", border: "none",
          color: "#000", fontSize: 13, fontWeight: 700,
          fontFamily: "var(--font)", cursor: "pointer",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
          onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
        >
          Get Early Access
        </button>
      </div>
    </nav>
  );
}