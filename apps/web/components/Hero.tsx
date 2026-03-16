"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  function goTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "120px 48px 80px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Animated grid background */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        animation: "gridMove 8s linear infinite",
        pointerEvents: "none",
      }}/>

      {/* Radial vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, #000 100%)",
        pointerEvents: "none",
      }}/>

      {/* Scan line */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: 2, height: "100%",
        background: "linear-gradient(transparent, rgba(255,255,255,0.06), transparent)",
        animation: "scanH 6s linear infinite",
        pointerEvents: "none",
      }}/>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Beta badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "5px 14px", borderRadius: 20,
          border: "1px solid #222", marginBottom: 28,
          animation: "fadeUp 0.5s ease both",
        }}>
          <div style={{
            width: 5, height: 5, borderRadius: "50%",
            background: "#666", animation: "pulse 2s ease infinite",
          }}/>
          <span style={{
            fontSize: 11, fontWeight: 700, color: "#666",
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font)",
          }}>
            Now in private beta
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{
          fontSize: "clamp(44px, 7vw, 90px)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: "#fff",
          marginBottom: 24,
          animation: "fadeUp 0.7s 0.1s ease both",
          fontFamily: "var(--font)",
        }}>
          The Operating System<br/>
          for{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            Recruiters
          </em>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "#666",
          maxWidth: 560,
          lineHeight: 1.7,
          margin: "0 auto 44px",
          animation: "fadeUp 0.7s 0.2s ease both",
          fontFamily: "var(--font)",
        }}>
          Not another ATS. A complete intelligence layer built around
          pipeline management, CRM, AI scoring, and revenue tracking.
          Built for the way recruiters actually work.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 12, flexWrap: "wrap",
          animation: "fadeUp 0.7s 0.3s ease both",
        }}>
          <button onClick={() => goTo("#demo")} style={{
            padding: "18px 40px", borderRadius: 14,
            background: "#fff", border: "none",
            color: "#000", fontSize: 16, fontWeight: 700,
            fontFamily: "var(--font)", cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: "-0.01em",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e8e8e8")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
          >
            Book a Demo →
          </button>

          <button onClick={() => goTo("#features")} style={{
            padding: "18px 32px", borderRadius: 14,
            background: "transparent", border: "1px solid #2a2a2a",
            color: "#666", fontSize: 15, fontWeight: 700,
            fontFamily: "var(--font)", cursor: "pointer",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#666"; }}
          >
            See Features
          </button>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 40,
          marginTop: 64,
          paddingTop: 32,
          borderTop: "1px solid #1c1c1c",
          animation: "fadeUp 0.7s 0.5s ease both",
          flexWrap: "wrap",
        }}>
          {[
            { value: "10×", label: "Faster Pipeline" },
            { value: "88%", label: "Match Accuracy"  },
            { value: "$0",  label: "To Get Started"  },
            { value: "5min", label: "To Full Setup"  },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: 28, fontWeight: 800, color: "#fff",
                letterSpacing: "-0.04em",
                fontFamily: "var(--mono)",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: 11, color: "#555",
                textTransform: "uppercase", letterSpacing: "0.08em",
                fontWeight: 700, marginTop: 4,
                fontFamily: "var(--font)",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}