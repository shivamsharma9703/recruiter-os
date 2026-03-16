"use client";

export default function Pricing() {
  function goTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const plans = [
  {
    name: "Solo",
    desc: "For independent recruiters who are just getting started.",
    price: "$0",
    period: "Free forever. No card needed.",
    featured: false,
    badge: null,
    features: [
      "Up to 3 active jobs",
      "50 candidates per month",
      "AI resume scoring",
      "Basic CRM",
      "CSV and manual import",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    desc: "For serious recruiters and small teams who are ready to scale.",
    price: "$49",
    period: "Per month, billed monthly.",
    featured: true,
    badge: "Most Popular",
    features: [
      "Unlimited jobs and candidates",
      "Full AI suite",
      "Google Sheets, Notion and WhatsApp",
      "Revenue tracking module",
      "Up to 5 team seats",
      "Priority support",
    ],
    cta: "Book a Demo",
  },
  {
    name: "Agency",
    desc: "For recruitment agencies running multiple clients and teams.",
    price: "$149",
    period: "Per month, billed monthly.",
    featured: false,
    badge: null,
    features: [
      "Everything in Pro",
      "Unlimited team seats",
      "Advanced agency revenue suite",
      "Client portal access",
      "Dedicated onboarding",
    ],
    cta: "Contact Sales",
  },
];

  return (
    <section id="pricing" style={{ padding: "100px 48px" }}>

      {/* Header */}
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#666",
          marginBottom: 14, fontFamily: "var(--font)",
        }}>
          Pricing
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800, letterSpacing: "-0.04em",
          color: "#fff", lineHeight: 1.05,
          marginBottom: 16, fontFamily: "var(--font)",
        }}>
          Start free.{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            Scale when ready.
          </em>
        </h2>
        <p style={{
          fontSize: 16, color: "#666",
          maxWidth: 420, lineHeight: 1.7,
          margin: "0 auto", fontFamily: "var(--font)",
        }}>
          No credit card required. Upgrade or cancel at any time.
        </p>
      </div>

      {/* Pricing grid */}
      <div className="fade-up" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "#1c1c1c",
        border: "1px solid #1c1c1c",
        borderRadius: 20,
        overflow: "hidden",
        maxWidth: 1000,
        margin: "0 auto",
      }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            background: plan.featured ? "#fff" : "#060606",
            padding: "40px 36px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}>

            {/* Badge */}
            {plan.badge && (
              <div style={{
                position: "absolute", top: 20, right: 20,
                padding: "4px 10px", borderRadius: 20,
                border: `1px solid ${plan.featured ? "#aaa" : "#333"}`,
                fontSize: 9, fontWeight: 700,
                color: plan.featured ? "#666" : "#555",
                letterSpacing: "0.08em", textTransform: "uppercase",
                fontFamily: "var(--font)",
              }}>
                {plan.badge}
              </div>
            )}

            {/* Plan name */}
            <div style={{
              fontSize: 11, fontWeight: 700,
              color: plan.featured ? "#666" : "#666",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 10, fontFamily: "var(--font)",
            }}>
              {plan.name}
            </div>

            {/* Description */}
            <div style={{
              fontSize: 13,
              color: plan.featured ? "#666" : "#484848",
              marginBottom: 28, lineHeight: 1.6,
              fontFamily: "var(--font)",
            }}>
              {plan.desc}
            </div>

            {/* Price */}
            <div style={{
              fontSize: 42, fontWeight: 800,
              color: plan.featured ? "#000" : "#fff",
              letterSpacing: "-0.04em",
              fontFamily: "var(--mono)",
              lineHeight: 1,
            }}>
              {plan.price}
            </div>
            <div style={{
              fontSize: 12,
              color: plan.featured ? "#888" : "#555",
              marginTop: 4, marginBottom: 28,
              fontFamily: "var(--font)",
            }}>
              {plan.period}
            </div>

            {/* Features list */}
            <ul style={{ listStyle: "none", marginBottom: 32, flex: 1 }}>
              {plan.features.map((feat, j) => (
                <li key={j} style={{
                  fontSize: 13,
                  color: plan.featured ? "#444" : "#666",
                  padding: "7px 0",
                  borderBottom: `1px solid ${plan.featured ? "rgba(0,0,0,0.08)" : "#161616"}`,
                  display: "flex", alignItems: "center", gap: 9,
                  fontFamily: "var(--font)",
                }}>
                  {/* Check circle */}
                  <div style={{
                    width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                    border: `1px solid ${plan.featured ? "#bbb" : "#333"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4l2 2 3-3.5"
                        stroke={plan.featured ? "#666" : "#555"}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button onClick={() => goTo("#demo")} style={{
              width: "100%", padding: 13, borderRadius: 11,
              fontFamily: "var(--font)", fontSize: 13, fontWeight: 700,
              cursor: "pointer", letterSpacing: "-0.01em",
              transition: "all 0.2s",
              background: plan.featured ? "#000" : "transparent",
              color: plan.featured ? "#fff" : "#fff",
              border: plan.featured ? "none" : "1px solid #333",
            }}
              onMouseEnter={e => {
                if (plan.featured) {
                  e.currentTarget.style.background = "#1c1c1c";
                } else {
                  e.currentTarget.style.borderColor = "#666";
                  e.currentTarget.style.background = "#111";
                }
              }}
              onMouseLeave={e => {
                if (plan.featured) {
                  e.currentTarget.style.background = "#000";
                } else {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {plan.cta}
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}