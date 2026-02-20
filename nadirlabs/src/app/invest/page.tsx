"use client";
import { useEffect, useState } from "react";

export default function Invest() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0a0a 0%, #0d1117 50%, #0a0a0a 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Stars with parallax */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(2px 2px at 40px 60px, #ffffff, transparent),
          radial-gradient(1px 1px at 180px 120px, rgba(255,255,255,0.7), transparent),
          radial-gradient(2px 2px at 320px 80px, #ffffff, transparent),
          radial-gradient(1px 1px at 500px 200px, rgba(255,255,255,0.6), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "550px 280px",
        animation: "twinkle 12s ease-in-out infinite",
        transform: `translateY(${scrollY * 0.1}px)`,
        zIndex: 0
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 60px",
        maxWidth: "900px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out"
        }}>
          <span style={{
            display: "inline-block",
            padding: "8px 20px",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "30px",
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "30px",
            animation: "pulse 3s ease-in-out infinite"
          }}>
            Investor Relations
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: "300",
          lineHeight: "1.2",
          marginBottom: "30px",
          background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.2s"
        }}>
          Invest in the <span style={{ 
            fontStyle: "italic", 
            fontWeight: "200",
            background: "linear-gradient(135deg, #f5f5dc 0%, #d4d4aa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>lunar economy.</span>
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: "1.7",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "650px",
          marginBottom: "60px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.3s"
        }}>
          Nadir Labs is building the industrial infrastructure for humanity's presence beyond Earth. 
          We're seeking strategic investors who share our vision of a thriving lunar economy.
        </p>

        {/* Investment Thesis */}
        <div style={{
          marginBottom: "60px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.4s"
        }}>
          <h2 style={{
            fontSize: "28px",
            fontWeight: "300",
            marginBottom: "25px",
            color: "#ffffff"
          }}>Investment Thesis</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {[
              {
                title: "Massive Addressable Market",
                desc: "The lunar economy is projected to reach $100B+ annually by the 2040s. Early movers will capture significant value in infrastructure, resource extraction, and manufacturing."
              },
              {
                title: "Differentiated Technology",
                desc: "Our proprietary ISRU and materials processing approaches are protected by patents and represent years of rigorous research and development."
              },
              {
                title: "First-Mover Advantage",
                desc: "We're among the few organizations actively developing practical lunar industrial technology at this scale."
              },
              {
                title: "Strategic Partnerships",
                desc: "We maintain relationships with leading space agencies, research institutions, and industry players positioning us for future contracts and collaborations."
              }
            ].map((item, i) => (
              <div key={i} style={{
                padding: "25px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)"
              }}>
                <h3 style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "#ffffff"
                }}>{item.title}</h3>
                <p style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "rgba(255,255,255,0.6)"
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Status */}
        <div style={{
          marginBottom: "60px",
          padding: "35px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.5s"
        }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: "400",
            marginBottom: "20px",
            color: "#ffffff"
          }}>Current Funding Round</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "30px"
          }}>
            <div>
              <div style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "5px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>Round</div>
              <div style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#ffffff"
              }}>Series A</div>
            </div>
            <div>
              <div style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "5px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>Target</div>
              <div style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#ffffff"
              }}>$12M</div>
            </div>
            <div>
              <div style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "5px",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>Use of Funds</div>
              <div style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#ffffff"
              }}>R&D & Hardware</div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{
          padding: "40px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.6s"
        }}>
          <h3 style={{
            fontSize: "24px",
            fontWeight: "400",
            marginBottom: "15px",
            color: "#ffffff"
          }}>Interested in investing?</h3>
          <p style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "25px"
          }}>
            We welcome conversations with qualified investors and strategic partners.
          </p>
          <a href="/contact" className="cta-button" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 32px",
            background: "#ffffff",
            color: "#0a0a0a",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "600",
            transition: "all 0.3s ease"
          }}>
            Request Investor Deck
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Disclaimer */}
        <p style={{
          marginTop: "40px",
          fontSize: "12px",
          color: "rgba(255,255,255,0.4)",
          lineHeight: "1.6"
        }}>
          This communication is for informational purposes only and does not constitute an offer to sell 
          or a solicitation of an offer to buy any securities. Investment in early-stage companies 
          involves significant risk. Past performance is not indicative of future results.
        </p>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}
