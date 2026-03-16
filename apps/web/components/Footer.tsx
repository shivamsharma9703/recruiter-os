"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Product: [
      { label: "Features",     href: "#features" },
      { label: "How it works", href: "#how"      },
      { label: "Pricing",      href: "#pricing"  },
      { label: "Book Demo",    href: "#demo"     },
    ],
    Company: [
      { label: "Vision",   href: "#vision" },
      { label: "Blog",     href: "#"       },
      { label: "Careers",  href: "#"       },
      { label: "Contact",  href: "#"       },
    ],
    Legal: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Security",         href: "#" },
      { label: "GDPR",             href: "#" },
    ],
  };

  return (
    <footer style={{
      padding: "60px 48px 40px",
      borderTop: "1px solid #1c1c1c",
      background: "#000",
    }}>

      {/* Top grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr",
        gap: 48,
        marginBottom: 48,
      }}>

        {/* Brand column */}
        <div>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 14,
          }}>
            <div style={{
              width: 24, height: 24, background: "#fff", borderRadius: 6,
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <rect x="7" y="2" width="2" height="12" rx="1" fill="black"/>
                <rect x="2" y="7" width="12" height="2" rx="1" fill="black"/>
              </svg>
            </div>
            <span style={{
              fontSize: 13, fontWeight: 800,
              color: "#fff", fontFamily: "var(--font)",
            }}>
              Recruiter OS
            </span>
          </div>
          <p style={{
            fontSize: 12, color: "#484848",
            lineHeight: 1.8, maxWidth: 240,
            fontFamily: "var(--font)",
          }}>
            The operating system for professional recruiters.
            Pipeline, CRM, AI and revenue all in one place.
          </p>

          {/* Status badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            marginTop: 20, padding: "5px 10px",
            border: "1px solid #1c1c1c", borderRadius: 20,
          }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "#666", animation: "pulse 2s ease infinite",
            }}/>
            <span style={{
              fontSize: 10, color: "#484848", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "var(--font)",
            }}>
              Private Beta
            </span>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <div style={{
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#484848", marginBottom: 16,
              fontFamily: "var(--font)",
            }}>
              {title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {items.map((item) => (
                <a key={item.label} href={item.href} style={{
                  fontSize: 13, color: "#555",
                  textDecoration: "none", fontWeight: 500,
                  fontFamily: "var(--font)",
                  transition: "color 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "#1c1c1c", marginBottom: 24 }}/>

      {/* Bottom row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{
          fontSize: 11, color: "#484848",
          fontFamily: "var(--font)",
        }}>
          © {year} Recruiter OS. All rights reserved.
        </div>
        <div style={{
          fontSize: 11, color: "#333",
          fontFamily: "var(--mono)",
        }}>
          v0.1 · Private Beta
        </div>
      </div>

    </footer>
  );
}