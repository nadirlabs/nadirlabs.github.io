"use client";
import { useEffect, useState } from "react";

export default function About() {
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
      minHeight: "200vh",
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
          radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
          radial-gradient(2px 2px at 150px 80px, rgba(255,255,255,0.7), transparent),
          radial-gradient(1px 1px at 300px 150px, #ffffff, transparent),
          radial-gradient(2px 2px at 450px 50px, rgba(255,255,255,0.6), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "500px 250px",
        animation: "twinkle 10s ease-in-out infinite",
        transform: `translateY(${scrollY * 0.1}px)`,
        zIndex: 0
      }} />

      {/* Floating orbs background */}
      <div style={{
        position: "fixed",
        top: "10%",
        left: "5%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(100,150,255,0.08) 0%, transparent 70%)",
        animation: "orbFloat 20s ease-in-out infinite",
        zIndex: 0
      }} />
      <div style={{
        position: "fixed",
        bottom: "20%",
        right: "10%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,200,100,0.06) 0%, transparent 70%)",
        animation: "orbFloat2 25s ease-in-out infinite",
        zIndex: 0
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 60px",
        maxWidth: "1000px",
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
            About Nadir Labs
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: "300",
          lineHeight: "1.2",
          marginBottom: "40px",
          background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.2s"
        }}>
          Designing the foundations of<br />
          <span style={{ 
            fontStyle: "italic", 
            fontWeight: "200",
            background: "linear-gradient(135deg, #f5f5dc 0%, #d4d4aa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>lunar industry.</span>
        </h1>

        {/* Mission Statement */}
        <div style={{
          marginTop: "60px",
          padding: "40px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <p style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.8)",
            fontStyle: "italic"
          }}>
            &ldquo;To design and prototype the foundations of a scalable lunar industrial economy, 
            starting with small demonstrators, software tools, and open research.&rdquo;
          </p>
        </div>

        {/* Story Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          marginTop: "60px"
        }}>
          <div className="fade-in-up" style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.3s"
          }}>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "400",
              marginBottom: "20px",
              color: "#ffffff"
            }}>Our Origin</h3>
            <p style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.6)"
            }}>
              Founded in 2025, Nadir Labs emerged from a simple question: How do we build 
              a truly industrial presence beyond Earth? Unlike traditional space ventures focused 
              on transport or tourism, we're tackling the harder problem — creating the 
              manufacturing base that will make permanent lunar settlement economically viable.
            </p>
          </div>

          <div className="fade-in-up" style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.5s"
          }}>
            <h3 style={{
              fontSize: "24px",
              fontWeight: "400",
              marginBottom: "20px",
              color: "#ffffff"
            }}>Our Approach</h3>
            <p style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "rgba(255,255,255,0.6)"
            }}>
              We combine rigorous engineering with bold experimentation. Our team works across 
              materials science, orbital mechanics, and systems engineering to develop 
              practical demonstrators. We believe in learning by building — small, fast 
              experiments that validate concepts before scaling up.
            </p>
          </div>
        </div>

        {/* Research Areas */}
        <div style={{
          marginTop: "80px",
          paddingTop: "60px",
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "300",
            marginBottom: "40px",
            color: "#ffffff"
          }}>Research Areas</h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}>
            {[
              { 
                title: "Lunar ISRU", 
                desc: "In-situ resource utilization technologies for extracting oxygen, metals, and building materials from lunar regolith."
              },
              { 
                title: "Materials Processing", 
                desc: "Experimental methods including molten-regolith electrolysis and the FFC Cambridge process for lunar manufacturing."
              },
              { 
                title: "Orbital Infrastructure", 
                desc: "Tether-based systems, rotating skyhooks, and orbital ring concepts for efficient space transportation."
              },
              { 
                title: "Simulation Tools", 
                desc: "Open-source software for mission architecture, orbital mechanics, and materials processing analysis."
              }
            ].map((item, i) => (
              <div key={i} className="value-card" style={{
                padding: "30px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${0.6 + i * 0.15}s`
              }}>
                <h4 style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  marginBottom: "12px",
                  color: "#ffffff"
                }}>{item.title}</h4>
                <p style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "rgba(255,255,255,0.5)"
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source / Education */}
        <div style={{
          marginTop: "80px",
          paddingTop: "60px",
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h2 style={{
            fontSize: "32px",
            fontWeight: "300",
            marginBottom: "20px",
            color: "#ffffff"
          }}>Open Source & Education</h2>
          <p style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "700px"
          }}>
            We believe the future of space industry should be collaborative. We publish our 
            research openly, release simulation tools under open-source licenses, and host 
            technical workshops. Our goal is to make advanced space-industrial engineering 
            accessible to students, hobbyists, and independent researchers worldwide.
          </p>
          
          <div style={{
            display: "flex",
            gap: "40px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}>
            {[
              { name: "Open Papers", value: "8+" },
              { name: "GitHub Repos", value: "12" },
              { name: "Community Members", value: "500+" }
            ].map((stat, i) => (
              <div key={i} style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${0.8 + i * 0.1}s`
              }}>
                <div style={{
                  fontSize: "32px",
                  fontWeight: "300",
                  color: "#ffffff",
                  marginBottom: "4px"
                }}>{stat.value}</div>
                <div style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>{stat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="fade-in-up" style={{
          marginTop: "80px",
          padding: "40px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 1s"
        }}>
          <h3 style={{
            fontSize: "24px",
            fontWeight: "400",
            marginBottom: "15px",
            color: "#ffffff"
          }}>Want to contribute?</h3>
          <p style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "25px"
          }}>
            We're always looking for researchers, engineers, and enthusiasts to join our mission.
          </p>
          <a href="/careers" className="cta-button" style={{
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
            Get Involved
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
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
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-15px); }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .value-card {
          transition: all 0.3s ease !important;
        }
        .value-card:hover {
          transform: translateY(-8px) !important;
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
}
