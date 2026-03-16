export default function Marquee() {
  const items = [
    "ATS Pipeline", "AI Resume Scoring", "Recruiter CRM",
    "Revenue Tracking", "Candidate Portal", "Google Sheets Import",
    "Notion Sync", "WhatsApp Integration", "LinkedIn Capture",
    "Agency Mode", "Multi-tenant SaaS", "AI Interview Questions",
  ];

  // Double the items so the scroll loops seamlessly
  const doubled = [...items, ...items];

  return (
    <div style={{
      padding: "20px 0",
      borderTop: "1px solid #1c1c1c",
      borderBottom: "1px solid #1c1c1c",
      overflow: "hidden",
      background: "#060606",
    }}>
      <div style={{
        display: "flex",
        gap: 48,
        width: "max-content",
        animation: "marqueeScroll 22s linear infinite",
      }}>
        {doubled.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 48,
          }}>
            <span style={{
              fontSize: 12, fontWeight: 700, color: "#484848",
              letterSpacing: "0.12em", textTransform: "uppercase",
              whiteSpace: "nowrap", fontFamily: "var(--font)",
            }}>
              {item}
            </span>
            <span style={{ color: "#222", fontSize: 12 }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}