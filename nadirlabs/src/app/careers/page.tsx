"use client";
import { useEffect, useState } from "react";

export default function Careers() {
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

  const jobs = [
    {
      title: "Materials Processing Engineer",
      team: "ISRU Research",
      location: "Remote (US/EU)",
      type: "Full-time",
      description: "Develop and test molten-regolith electrolysis systems for lunar oxygen and metal extraction.",
      requirements: ["Experience with high-temperature electrochemistry", "Knowledge of ceramic processes", "PhD or equivalent experience"]
    },
    {
      title: "Orbital Mechanics Engineer",
      team: "Infrastructure Modeling",
      location: "Remote (US/EU)",
      type: "Full-time",
      description: "Model tether-based orbital systems, skyhooks, and other novel transportation concepts.",
      requirements: ["Strong background in orbital mechanics", "Experience with trajectory optimization", "Programming skills (Python/MATLAB)"]
    },
    {
      title: "Senior Plasma Engineer",
      team: "Materials Processing",
      location: "Houston, TX (Hybrid)",
      type: "Full-time",
      description: "Design plasma-based systems for regolith processing and materials refinement.",
      requirements: ["5+ years in plasma physics", "Experience with vacuum systems", "Background in space or defense"]
    },
    {
      title: "Simulation Software Developer",
      team: "Software Tools",
      location: "Remote (Worldwide)",
      type: "Full-time",
      description: "Build open-source simulation and analysis tools for lunar mission architecture and ISRU modeling.",
      requirements: ["Strong programming skills", "Experience with numerical simulation", "Background in aerospace or physics"]
    },
    {
      title: "Research Scientist - Metallurgy",
      team: "Materials Science",
      location: "Houston, TX",
      type: "Full-time",
      description: "Research metal extraction and processing from lunar regolith simulants.",
      requirements: ["PhD in metallurgy or materials science", "Experience with electrolysis", "Publication record in relevant field"]
    },
    {
      title: "Technical Writer & Educator",
      team: "Outreach",
      location: "Remote (Worldwide)",
      type: "Part-time",
      description: "Create educational content, documentation, and technical resources for our open research.",
      requirements: ["Technical background", "Excellent writing skills", "Experience communicating complex topics"]
    }
  ];

  const benefits = [
    "Competitive compensation",
    "Remote-first culture",
    "Learning budget",
    "Open-source focus",
    "Conference attendance",
    "Flexible hours"
  ];

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
          radial-gradient(2px 2px at 40px 60px, #ffffff, transparent),
          radial-gradient(1px 1px at 200px 100px, rgba(255,255,255,0.7), transparent),
          radial-gradient(2px 2px at 350px 40px, #ffffff, transparent),
          radial-gradient(1px 1px at 500px 180px, rgba(255,255,255,0.6), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "550px 250px",
        animation: "twinkle 12s ease-in-out infinite",
        transform: `translateY(${scrollY * 0.1}px)`,
        zIndex: 0
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 60px",
        maxWidth: "1100px",
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
            Careers
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: "300",
          lineHeight: "1.2",
          marginBottom: "25px",
          background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.2s"
        }}>
          Join the <span style={{ 
            fontStyle: "italic", 
            fontWeight: "200",
            background: "linear-gradient(135deg, #f5f5dc 0%, #d4d4aa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>future</span> of space industry.
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 18px)",
          lineHeight: "1.7",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "600px",
          marginBottom: "60px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.3s"
        }}>
          We're building a team of researchers, engineers, and problem-solvers tackling 
          the hardest challenges in space industrialization. If you're passionate about 
          making lunar industry a reality, you belong here.
        </p>

        {/* Benefits */}
        <div className="fade-in-up" style={{
          marginBottom: "70px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.4s"
        }}>
          <h2 style={{
            fontSize: "24px",
            fontWeight: "400",
            marginBottom: "30px",
            color: "#ffffff"
          }}>Why Nadir Labs?</h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px"
          }}>
            {benefits.map((benefit, i) => (
              <span key={i} style={{
                padding: "12px 24px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "30px",
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "all 0.3s ease"
              }}>
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 style={{
            fontSize: "28px",
            fontWeight: "300",
            marginBottom: "35px",
            color: "#ffffff",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.5s"
          }}>
            Open Positions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {jobs.map((job, i) => (
              <div key={i} className="job-card" style={{
                padding: "35px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${0.6 + i * 0.1}s`
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "15px",
                  marginBottom: "15px"
                }}>
                  <div>
                    <h3 style={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "#ffffff",
                      marginBottom: "6px"
                    }}>{job.title}</h3>
                    <div style={{
                      display: "flex",
                      gap: "15px",
                      flexWrap: "wrap",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.5)"
                    }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {job.location}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                        </svg>
                        {job.team}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="apply-button" style={{
                    padding: "10px 24px",
                    background: "#ffffff",
                    color: "#0a0a0a",
                    border: "none",
                    borderRadius: "30px",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: "none",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap"
                  }}>
                    Apply
                  </button>
                </div>
                <p style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "15px"
                }}>
                  {job.description}
                </p>
                <div style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap"
                }}>
                  {job.requirements.map((req, j) => (
                    <span key={j} style={{
                      padding: "4px 12px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "15px",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.5)"
                    }}>
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Collaborations */}
        <div style={{
          marginTop: "60px",
          padding: "40px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <h3 style={{
            fontSize: "22px",
            fontWeight: "400",
            marginBottom: "15px",
            color: "#ffffff"
          }}>Research Collaborations</h3>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "20px"
          }}>
            We also welcome research collaborations with universities and institutions. 
            If you're working on relevant topics, we'd love to hear from you.
          </p>
          <a href="/contact" className="cta-link" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 28px",
            background: "transparent",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "600",
            border: "1px solid rgba(255,255,255,0.3)",
            transition: "all 0.3s ease"
          }}>
            Contact Us
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
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .job-card {
          transition: all 0.3s ease !important;
        }
        .job-card:hover {
          transform: translateY(-5px) !important;
          background: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        .apply-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255,255,255,0.2);
        }
        .cta-link:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }
      `}</style>
    </div>
  );
}
