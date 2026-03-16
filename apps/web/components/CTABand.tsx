"use client";

export default function CTABand() {
  function goTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{
      padding: "80px 48px",
      borderTop: "1px solid #1c1c1c",
      borderBottom: "1px solid #1c1c1c",
      textAlign: "center",
      background: "#060606",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Dot grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.02,
        backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
      }}/>

      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{
          fontSize: "clamp(30px, 4vw, 52px)",
          fontWeight: 800, color: "#fff",
          letterSpacing: "-0.04em", marginBottom: 14,
          fontFamily: "var(--font)",
        }}>
          The future of recruiting{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            starts here.
          </em>
        </h2>

        <p style={{
          fontSize: 16, color: "#555",
          marginBottom: 36, maxWidth: 480,
          margin: "0 auto 36px",
          lineHeight: 1.7, fontFamily: "var(--font)",
        }}>
          Join the waitlist. Get early access. Help us build the platform
          the recruiting industry actually deserves.
        </p>

        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 12, flexWrap: "wrap",
        }}>
          <button onClick={() => goTo("#demo")} style={{
            padding: "18px 40px", borderRadius: 14,
            background: "#fff", border: "none",
            color: "#000", fontSize: 16, fontWeight: 700,
            fontFamily: "var(--font)", cursor: "pointer",
            transition: "all 0.2s", letterSpacing: "-0.01em",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
          >
            Get Early Access →
          </button>

          <button onClick={() => goTo("#pricing")} style={{
            padding: "18px 32px", borderRadius: 14,
            background: "transparent", border: "1px solid #2a2a2a",
            color: "#666", fontSize: 15, fontWeight: 700,
            fontFamily: "var(--font)", cursor: "pointer",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#666"; }}
          >
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}