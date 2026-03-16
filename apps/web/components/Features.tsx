"use client";
export default function Features() {
  const features = [
  {
    icon: "⬡",
    title: "ATS Pipeline",
    desc: "Drag-and-drop Kanban with custom stages, candidate cards, activity timelines, and AI match scores visible at a glance.",
  },
  {
    icon: "◈",
    title: "Recruiter CRM",
    desc: "Talent pools, tag-based segmentation, relationship timelines, and follow-up reminders. Structure around every candidate relationship.",
  },
  {
    icon: "✦",
    title: "AI Intelligence",
    desc: "Resume parsing, skill extraction, JD match scoring, AI-generated summaries, and suggested interview questions. All automatic.",
  },
  {
    icon: "◆",
    title: "Revenue Tracking",
    desc: "Agency mode with client database, placement fee tracking, commission logging, and a real-time revenue dashboard.",
  },
  {
    icon: "◉",
    title: "Candidate Portal",
    desc: "A branded application portal where candidates upload their CV, track their status, and book open interview slots.",
  },
  {
    icon: "⊞",
    title: "Smart Sourcing",
    desc: "Manual add, CSV import, Google Sheets sync, Notion integration, WhatsApp pipeline, and LinkedIn profile capture.",
  },
];

  return (
    <section id="features" style={{ padding: "100px 48px" }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 64 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#666",
          marginBottom: 14, fontFamily: "var(--font)",
        }}>
          Core Modules
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800, letterSpacing: "-0.04em",
          color: "#fff", lineHeight: 1.05,
          marginBottom: 16, fontFamily: "var(--font)",
        }}>
          Everything a recruiter<br/>
          needs to{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            operate
          </em>
        </h2>
        <p style={{
          fontSize: 16, color: "#666",
          maxWidth: 520, lineHeight: 1.7,
          fontFamily: "var(--font)",
        }}>
          Six tightly integrated modules. One clean interface. Zero chaos.
        </p>
      </div>

      {/* Grid */}
      <div className="fade-up" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "#1c1c1c",
        border: "1px solid #1c1c1c",
        borderRadius: 18,
        overflow: "hidden",
      }}>
        {features.map((f, i) => (
          <div key={i} style={{
            background: "#060606",
            padding: 36,
            transition: "background 0.2s",
            cursor: "default",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#0c0c0c")}
            onMouseLeave={e => (e.currentTarget.style.background = "#060606")}
          >
            {/* Icon */}
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "#161616", border: "1px solid #222",
              display: "flex", alignItems: "center",
              justifyContent: "center",
              fontSize: 18, color: "#aaa",
              marginBottom: 20,
            }}>
              {f.icon}
            </div>

            {/* Title */}
            <div style={{
              fontSize: 16, fontWeight: 700, color: "#fff",
              letterSpacing: "-0.02em", marginBottom: 10,
              fontFamily: "var(--font)",
            }}>
              {f.title}
            </div>

            {/* Description */}
            <div style={{
              fontSize: 13, color: "#666",
              lineHeight: 1.7, fontFamily: "var(--font)",
            }}>
              {f.desc}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}