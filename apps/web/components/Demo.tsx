"use client";

import { useState } from "react";

export default function Demo() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    company: "", role: "", size: "", challenge: "",
  });
  const [loading, setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError]         = useState("");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    if (!form.firstName.trim()) return "Please enter your first name.";
    if (!form.email.trim())     return "Please enter your email.";
    if (!form.email.includes("@")) return "Please enter a valid email.";
    return null;
  }

  async function submit() {
  const err = validate();
  if (err) { setError(err); return; }
  setError("");
  setLoading(true);

  try {
    const response = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  } catch (e) {
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    background: "#111",
    border: "1px solid #222",
    borderRadius: 10,
    color: "#fff",
    fontSize: 14,
    fontFamily: "var(--font)",
    fontWeight: 500,
    outline: "none",
    transition: "border-color 0.15s",
  };

  const labelStyle = {
    fontSize: 10, fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase" as const,
    color: "#484848", display: "block", marginBottom: 7,
    fontFamily: "var(--font)",
  };

  return (
    <section id="demo" style={{
      padding: "100px 48px",
      background: "#060606",
      borderTop: "1px solid #1c1c1c",
    }}>

      {/* Header */}
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "#666",
          marginBottom: 14, fontFamily: "var(--font)",
        }}>
          Book a Demo
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800, letterSpacing: "-0.04em",
          color: "#fff", lineHeight: 1.05,
          marginBottom: 16, fontFamily: "var(--font)",
        }}>
          See it in{" "}
          <em style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#aaa",
          }}>
            action
          </em>
        </h2>
        <p style={{
          fontSize: 16, color: "#666",
          maxWidth: 480, lineHeight: 1.7,
          margin: "0 auto", fontFamily: "var(--font)",
        }}>
          A 30-minute live walkthrough with the founding team.
          We will show you the full platform and answer every question you have.
        </p>
      </div>

      {/* Form card */}
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div className="fade-up" style={{
          background: "#0c0c0c",
          border: "1px solid #1c1c1c",
          borderRadius: 20, padding: 48,
          position: "relative", overflow: "hidden",
        }}>

          {/* Top shimmer line */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(90deg, transparent, #444, transparent)",
          }}/>

          {/* Success state */}
          {submitted ? (
            <div style={{
              textAlign: "center", padding: "20px 0",
              animation: "fadeUp 0.5s ease both",
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                border: "1px solid #444", background: "#161616",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M4 11l5 5 9-9"
                    stroke="#ccc" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="30" strokeDashoffset="30"
                    style={{ animation: "draw 0.5s ease forwards" }}
                  />
                </svg>
              </div>
              <div style={{
                fontSize: 22, fontWeight: 800, color: "#fff",
                letterSpacing: "-0.03em", marginBottom: 8,
                fontFamily: "var(--font)",
              }}>
                You&apos;re booked.
              </div>
              <div style={{
                fontSize: 15, color: "#555", marginBottom: 28,
                lineHeight: 1.7, fontFamily: "var(--font)",
              }}>
                Thanks {form.firstName}. We will email {form.email} within
                24 hours to confirm your slot.
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 16px", background: "#161616",
                border: "1px solid #222", borderRadius: 10,
                fontSize: 12, color: "#666", fontFamily: "var(--font)",
              }}>
                ✦ Check your email for a calendar invite
              </div>
            </div>
          ) : (
            <>
              {/* Form grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}>
                {/* First name */}
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    style={inputStyle}
                    placeholder="Jamie"
                    value={form.firstName}
                    onChange={e => update("firstName", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  />
                </div>

                {/* Last name */}
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    style={inputStyle}
                    placeholder="Chen"
                    value={form.lastName}
                    onChange={e => update("lastName", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Work Email</label>
                  <input
                    style={inputStyle}
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={e => update("email", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  />
                </div>

                {/* Company */}
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    style={inputStyle}
                    placeholder="Acme Recruiting"
                    value={form.company}
                    onChange={e => update("company", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  />
                </div>

                {/* Role */}
                <div>
                  <label style={labelStyle}>Your Role</label>
                  <select
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.role}
                    onChange={e => update("role", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  >
                    <option value="">Select your role...</option>
                    <option>Independent Recruiter</option>
                    <option>Agency Recruiter</option>
                    <option>Internal HR / TA</option>
                    <option>Founder</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Team size */}
                <div>
                  <label style={labelStyle}>Team Size</label>
                  <select
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.size}
                    onChange={e => update("size", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  >
                    <option value="">Select team size...</option>
                    <option>Just me</option>
                    <option>2–5</option>
                    <option>6–20</option>
                    <option>20+</option>
                  </select>
                </div>

                {/* Challenge — full width */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={labelStyle}>
                    What&apos;s your biggest recruiting challenge?
                  </label>
                  <textarea
                    style={{ ...inputStyle, resize: "none" }}
                    rows={3}
                    placeholder="e.g. Managing multiple pipelines, tracking revenue, poor candidate visibility..."
                    value={form.challenge}
                    onChange={e => update("challenge", e.target.value)}
                    onFocus={e => (e.target.style.borderColor = "#555")}
                    onBlur={e  => (e.target.style.borderColor = "#222")}
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  fontSize: 12, color: "#888",
                  marginTop: 12, fontFamily: "var(--font)",
                }}>
                  {error}
                </div>
              )}

              {/* Submit */}
              <div style={{ marginTop: 24 }}>
                <button
                  onClick={submit}
                  disabled={loading}
                  style={{
                    width: "100%", padding: "15px 32px",
                    borderRadius: 13, background: loading ? "#1c1c1c" : "#fff",
                    border: "none", color: loading ? "#555" : "#000",
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font)", cursor: loading ? "not-allowed" : "pointer",
                    transition: "all 0.2s", letterSpacing: "-0.01em",
                    display: "flex", alignItems: "center",
                    justifyContent: "center", gap: 8,
                  }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.background = "#e8e8e8"; }}
                  onMouseLeave={e => { if (!loading) e.currentTarget.style.background = "#fff"; }}
                >
                  {loading ? (
                    <>
                      <div style={{
                        width: 14, height: 14, borderRadius: "50%",
                        border: "1.5px solid #333", borderTopColor: "#888",
                        animation: "spin 0.7s linear infinite",
                      }}/>
                      Sending...
                    </>
                  ) : (
                    "Book My Demo →"
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}