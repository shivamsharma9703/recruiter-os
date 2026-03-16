export default function Vision() {
  const points = [
  {
    num: "01",
    title: "Recruiter Operating System",
    desc: "One place to see your open roles, pipeline health, AI suggestions, and revenue. Everything visible within five seconds of logging in.",
  },
  {
    num: "02",
    title: "Structured Talent Identity",
    desc: "Every candidate builds a verified, portable professional profile. It travels with them across every opportunity.",
  },
  {
    num: "03",
    title: "Hiring Intelligence Engine",
    desc: "The platform learns from every placement. Predictive matching, dropout prevention, and performance correlation built in.",
  },
  {
    num: "04",
    title: "Global Talent Marketplace",
    desc: "The long-term vision is a network where recruiters, candidates, and companies meet on infrastructure that already understands them.",
  },
];

  return (
    <section id="vision" style={{ padding: "100px 48px" }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 64 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#666",
          marginBottom: 14, fontFamily: "var(--font)",
        }}>
          Our Vision
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800, letterSpacing: "-0.04em",
          color: "#fff", lineHeight: 1.05,
          fontFamily: "var(--font)",
        }}>
          Building the world&apos;s{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            talent graph
          </em>
        </h2>
      </div>

      {/* Two column layout */}
      <div className="fade-up" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "start",
      }}>

        {/* Left — quote */}
        <div>
          <div style={{
            fontSize: "clamp(18px, 2vw, 26px)",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#777",
            lineHeight: 1.6,
            borderLeft: "2px solid #333",
            paddingLeft: 28,
            marginBottom: 32,
          }}>
            &ldquo;Greenhouse and Lever are workflow tools.
            We are building infrastructure. For recruiters,
            for candidates, and for the intelligence that
            sits between every hire.&rdquo;
          </div>
          <p style={{
            fontSize: 14, color: "#555",
            lineHeight: 1.8, fontFamily: "var(--font)",
          }}>
            Every hire should make the next hire smarter. Every candidate
            profile should build a real professional identity that travels
            with them. Every placement should add to something bigger
            than a spreadsheet.
          </p>
        </div>

        {/* Right — points */}
        <div>
          {points.map((pt, i) => (
            <div key={i} style={{
              display: "flex", gap: 16,
              padding: "20px 0",
              borderBottom: i < points.length - 1 ? "1px solid #1c1c1c" : "none",
            }}>
              <div style={{
                fontSize: 11, fontFamily: "var(--mono)",
                color: "#484848", minWidth: 28, marginTop: 2,
              }}>
                {pt.num}
              </div>
              <div>
                <div style={{
                  fontSize: 14, fontWeight: 700,
                  color: "#bbb", marginBottom: 5,
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font)",
                }}>
                  {pt.title}
                </div>
                <div style={{
                  fontSize: 13, color: "#555",
                  lineHeight: 1.7, fontFamily: "var(--font)",
                }}>
                  {pt.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}