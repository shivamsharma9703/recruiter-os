"use client";

import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Import your pipeline",
      desc: "Pull in candidates from Google Sheets, Notion, CSV, LinkedIn, or add manually. Your existing work, instantly organised.",
      visual: (
        <div>
          <div style={{
            fontSize: 10, fontWeight: 700, color: "#555",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 16, fontFamily: "var(--font)",
          }}>
            Import Sources
          </div>
          {[
            { icon: "⊞", name: "Google Sheets", sub: "14 candidates detected" },
            { icon: "◇", name: "Notion Board",  sub: "9 entries synced"       },
            { icon: "◎", name: "WhatsApp",       sub: "7 conversations tagged" },
          ].map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: 12, background: "#111", borderRadius: 9,
              border: "1px solid #1c1c1c", marginBottom: 8,
              animation: "fadeUp 0.3s ease both",
              animationDelay: `${i * 0.08}s`,
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: 8,
                background: "#1c1c1c", border: "1px solid #222",
                display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 15, color: "#666",
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#bbb", fontFamily: "var(--font)" }}>{s.name}</div>
                <div style={{ fontSize: 11, color: "#555", fontFamily: "var(--font)" }}>{s.sub}</div>
              </div>
              <div style={{
                padding: "3px 8px", borderRadius: 20,
                background: "#1c1c1c", border: "1px solid #2a2a2a",
                fontSize: 9, fontWeight: 700, color: "#555",
                fontFamily: "var(--font)",
              }}>
                Connected
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: "02",
      title: "AI scores every candidate",
      desc: "Every resume is parsed, skills extracted, and scored against your job description. Know your best candidates instantly.",
      visual: (
        <div>
          <div style={{
            fontSize: 10, fontWeight: 700, color: "#555",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 16, fontFamily: "var(--font)",
          }}>
            AI Scoring — Mia Chen
          </div>
          <div style={{
            background: "#111", border: "1px solid #1c1c1c",
            borderRadius: 12, padding: 16, marginBottom: 10,
          }}>
            <div style={{
              fontSize: 9, fontWeight: 700, color: "#555",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 10, fontFamily: "var(--font)",
            }}>
              Skill Match
            </div>
            {[
              { label: "Product Design", pct: 94 },
              { label: "Figma / Systems", pct: 89 },
              { label: "B2B SaaS Exp.",   pct: 82 },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  fontSize: 11, color: "#666", marginBottom: 4,
                  fontFamily: "var(--font)",
                }}>
                  <span>{s.label}</span>
                  <span style={{ fontFamily: "var(--mono)" }}>{s.pct}%</span>
                </div>
                <div style={{ height: 4, background: "#222", borderRadius: 2 }}>
                  <div style={{
                    height: "100%", background: "#aaa", borderRadius: 2,
                    width: `${s.pct}%`, transition: "width 1s ease",
                  }}/>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{
              flex: 1, background: "#111", border: "1px solid #1c1c1c",
              borderRadius: 9, padding: 12, textAlign: "center",
            }}>
              <div style={{
                fontSize: 24, fontWeight: 800, color: "#ccc",
                fontFamily: "var(--mono)", letterSpacing: "-0.04em",
              }}>94</div>
              <div style={{ fontSize: 10, color: "#555", marginTop: 2, fontFamily: "var(--font)" }}>AI Score</div>
            </div>
            <div style={{
              flex: 2, background: "#111", border: "1px solid #1c1c1c",
              borderRadius: 9, padding: 12,
            }}>
              <div style={{
                fontSize: 9, fontWeight: 700, color: "#555",
                letterSpacing: "0.08em", textTransform: "uppercase",
                marginBottom: 6, fontFamily: "var(--font)",
              }}>
                AI Summary
              </div>
              <div style={{ fontSize: 11, color: "#666", lineHeight: 1.6, fontFamily: "var(--font)" }}>
                Strong candidate. Top 6% match. Recommend fast-track to interview.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "Move through your pipeline",
      desc: "Drag candidates across custom stages. Track every interaction, schedule interviews, and never lose context.",
      visual: (
        <div>
          <div style={{
            fontSize: 10, fontWeight: 700, color: "#555",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 16, fontFamily: "var(--font)",
          }}>
            ATS Pipeline
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { stage: "Applied",   cards: [{ name: "Alex P.", score: 77 }, { name: "Tina M.", score: 72 }] },
              { stage: "Interview", cards: [{ name: "Jordan W.", score: 89 }] },
              { stage: "Offer",     cards: [{ name: "Mia C.", score: 94 }] },
            ].map((col, i) => (
              <div key={i} style={{
                flex: 1, background: "#0c0c0c",
                border: "1px solid #1c1c1c", borderRadius: 10, overflow: "hidden",
              }}>
                <div style={{
                  padding: "8px 10px", background: "#161616",
                  borderBottom: "1px solid #1c1c1c",
                  fontSize: 10, fontWeight: 700, color: "#555",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  fontFamily: "var(--font)",
                }}>
                  {col.stage}
                </div>
                <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                  {col.cards.map((c, j) => (
                    <div key={j} style={{
                      background: "#161616", border: `1px solid ${col.stage === "Offer" ? "#3d3d3d" : "#1c1c1c"}`,
                      borderRadius: 7, padding: 8,
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#bbb", fontFamily: "var(--font)" }}>{c.name}</div>
                      <div style={{
                        fontSize: 9, fontFamily: "var(--mono)", color: "#555",
                        marginTop: 4, textAlign: "right",
                      }}>
                        {c.score}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "Close and track revenue",
      desc: "Log placements, track fees, and see your revenue pipeline in real time. Built for agencies and independent recruiters.",
      visual: (
        <div>
          <div style={{
            fontSize: 10, fontWeight: 700, color: "#555",
            letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: 16, fontFamily: "var(--font)",
          }}>
            Revenue Dashboard
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
            {[
              { label: "MTD Revenue",    value: "$84K"  },
              { label: "Pipeline Value", value: "$192K" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "#111", border: "1px solid #1c1c1c",
                borderRadius: 10, padding: 14,
              }}>
                <div style={{
                  fontSize: 9, color: "#555", textTransform: "uppercase",
                  letterSpacing: "0.08em", fontWeight: 700,
                  marginBottom: 6, fontFamily: "var(--font)",
                }}>
                  {s.label}
                </div>
                <div style={{
                  fontSize: 24, fontWeight: 800, color: "#ccc",
                  fontFamily: "var(--mono)", letterSpacing: "-0.04em",
                }}>
                  {s.value}
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: "#111", border: "1px solid #1c1c1c",
            borderRadius: 10, padding: 14,
          }}>
            <div style={{
              fontSize: 9, color: "#555", textTransform: "uppercase",
              letterSpacing: "0.08em", fontWeight: 700,
              marginBottom: 10, fontFamily: "var(--font)",
            }}>
              Active Placements
            </div>
            {[
              { role: "Sr. Product Designer @ Figma", fee: "$18K" },
              { role: "ML Engineer @ Stripe",         fee: "$24K" },
              { role: "Head of Growth @ Linear",      fee: "$32K" },
            ].map((p, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                fontSize: 11, padding: "7px 0",
                borderBottom: i < 2 ? "1px solid #1c1c1c" : "none",
                fontFamily: "var(--font)",
              }}>
                <span style={{ color: "#666" }}>{p.role}</span>
                <span style={{ color: "#888", fontFamily: "var(--mono)" }}>{p.fee}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  // Auto advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how" style={{
      padding: "100px 48px",
      background: "#060606",
      borderTop: "1px solid #1c1c1c",
      borderBottom: "1px solid #1c1c1c",
    }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 64 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#666",
          marginBottom: 14, fontFamily: "var(--font)",
        }}>
          How It Works
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800, letterSpacing: "-0.04em",
          color: "#fff", lineHeight: 1.05,
          fontFamily: "var(--font)",
        }}>
          From chaos to{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            control
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

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <div key={i} onClick={() => setActiveStep(i)} style={{
              display: "flex", gap: 20,
              padding: "24px 0",
              borderBottom: i < steps.length - 1 ? "1px solid #1c1c1c" : "none",
              cursor: "pointer",
              transition: "all 0.2s",
            }}>
              {/* Number circle */}
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                border: `1px solid ${activeStep === i ? "#fff" : "#333"}`,
                background: activeStep === i ? "#fff" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700,
                color: activeStep === i ? "#000" : "#555",
                fontFamily: "var(--mono)",
                marginTop: 2,
                transition: "all 0.3s",
              }}>
                {step.num}
              </div>

              <div>
                <div style={{
                  fontSize: 15, fontWeight: 700,
                  color: activeStep === i ? "#fff" : "#555",
                  marginBottom: 6,
                  letterSpacing: "-0.01em",
                  fontFamily: "var(--font)",
                  transition: "color 0.3s",
                }}>
                  {step.title}
                </div>
                <div style={{
                  fontSize: 13, color: "#484848",
                  lineHeight: 1.7, fontFamily: "var(--font)",
                }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual panel */}
        <div style={{
          background: "#0c0c0c",
          border: "1px solid #1c1c1c",
          borderRadius: 18, padding: 32,
          minHeight: 340,
        }}>
          <div key={activeStep} style={{ animation: "fadeUp 0.4s ease both" }}>
            {steps[activeStep].visual}
          </div>
        </div>

      </div>
    </section>
  );
}