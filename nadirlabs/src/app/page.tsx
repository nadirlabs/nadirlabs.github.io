"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setParallaxOffset(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate moon opacity based on scroll - fades out as you scroll down
  const moonOpacity = Math.max(0, 1 - scrollY / 600);
  const glowOpacity = Math.max(0, 1 - scrollY / 500);

  const moonStyle = {
    transform: `translateY(${parallaxOffset}px) translateX(${-parallaxOffset * 0.2}px) rotate(${scrollY * 0.02}deg)`,
    opacity: moonOpacity,
    transition: "opacity 0.3s ease"
  };

  const glowStyle = {
    transform: `translateY(${parallaxOffset * 0.8}px) translateX(${-parallaxOffset * 0.15}px) scale(${1 + scrollY * 0.0005})`,
    opacity: glowOpacity,
    transition: "opacity 0.3s ease"
  };

  const starsStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
  };

  return (
    <div style={{
      minHeight: "200vh",
      background: "linear-gradient(180deg, #0a0a0a 0%, #0d1117 50%, #0a0a0a 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Stars Background with parallax */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
          radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6), transparent),
          radial-gradient(1px 1px at 160px 120px, #ffffff, transparent),
          radial-gradient(2px 2px at 200px 50px, rgba(255,255,255,0.7), transparent),
          radial-gradient(1px 1px at 250px 160px, #ffffff, transparent),
          radial-gradient(2px 2px at 300px 100px, rgba(255,255,255,0.5), transparent),
          radial-gradient(1px 1px at 350px 200px, #ffffff, transparent),
          radial-gradient(2px 2px at 400px 150px, rgba(255,255,255,0.8), transparent),
          radial-gradient(1.5px 1.5px at 500px 80px, #ffffff, transparent),
          radial-gradient(2px 2px at 600px 200px, rgba(255,255,255,0.6), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "650px 300px",
        animation: "twinkle 8s ease-in-out infinite",
        opacity: 0.8,
        ...starsStyle,
        zIndex: 0
      }} />

      {/* Shooting Star 1 */}
      <div style={{
        position: "fixed",
        top: "20%",
        left: "10%",
        width: "100px",
        height: "2px",
        background: "linear-gradient(90deg, rgba(255,255,255,0.8), transparent)",
        transform: `rotate(-45deg)`,
        animation: "shootingStar1 4s ease-in-out infinite",
        opacity: 0,
        zIndex: 0
      }} />

      {/* Shooting Star 2 */}
      <div style={{
        position: "fixed",
        top: "35%",
        left: "50%",
        width: "80px",
        height: "1.5px",
        background: "linear-gradient(90deg, rgba(255,255,255,0.6), transparent)",
        transform: `rotate(-30deg)`,
        animation: "shootingStar2 6s ease-in-out infinite 2s",
        opacity: 0,
        zIndex: 0
      }} />

      {/* Animated Moon with parallax and fade */}
      <div style={{
        position: "fixed",
        top: `calc(15% + ${parallaxOffset * 0.5}px)`,
        right: "15%",
        width: "280px",
        height: "280px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #f5f5dc 0%, #d4d4aa 40%, #a8a87a 70%, #6b6b4a 100%)",
        boxShadow: `
          0 0 60px rgba(245, 245, 220, 0.4),
          0 0 120px rgba(245, 245, 220, 0.2),
          inset -30px -30px 60px rgba(0,0,0,0.3)
        `,
        animation: "moonFloat 6s ease-in-out infinite",
        zIndex: 1,
        ...moonStyle
      }}>
        {/* Moon craters */}
        <div style={{
          position: "absolute",
          top: "20%",
          left: "25%",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "rgba(100,100,70,0.3)",
          boxShadow: "inset 2px 2px 4px rgba(0,0,0,0.3)",
          animation: "craterFloat 8s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          top: "50%",
          left: "60%",
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "rgba(100,100,70,0.25)",
          boxShadow: "inset 1px 1px 3px rgba(0,0,0,0.3)"
        }} />
        <div style={{
          position: "absolute",
          top: "65%",
          left: "20%",
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: "rgba(100,100,70,0.2)",
          boxShadow: "inset 3px 3px 6px rgba(0,0,0,0.3)"
        }} />
        <div style={{
          position: "absolute",
          top: "30%",
          left: "70%",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "rgba(100,100,70,0.3)",
          boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.3)"
        }} />
      </div>

      {/* Glowing Orb behind moon with parallax and fade */}
      <div style={{
        position: "fixed",
        top: `calc(18% + ${parallaxOffset * 0.4}px)`,
        right: "12%",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,250,220,0.15) 0%, transparent 70%)",
        animation: "glowPulse 4s ease-in-out infinite",
        zIndex: 0,
        ...glowStyle
      }} />

      {/* Main Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 60px",
        maxWidth: "800px"
      }}>
        {/* Logo/Brand */}
        <div style={{
          marginBottom: "40px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
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
            animation: "pulse 3s ease-in-out infinite"
          }}>
            Deep-Tech Space Engineering
          </span>
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          fontWeight: "300",
          lineHeight: "1.1",
          marginBottom: "30px",
          background: "linear-gradient(135deg, #ffffff 0%, #c0c0c0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.2s"
        }}>
          Building the<br />
          <span style={{
            fontStyle: "italic",
            fontWeight: "200",
            background: "linear-gradient(135deg, #f5f5dc 0%, #d4d4aa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>lunar industrial economy.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: "1.7",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "600px",
          marginBottom: "50px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.4s"
        }}>
          Nadir Labs is an early-stage deep-tech group prototyping the foundations of 
          space-industry. We develop lunar ISRU technologies, tether-based orbital infrastructure, 
          and experimental materials processing — from molten-regolith electrolysis to the FFC Cambridge process.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out 0.6s"
        }}>
          <a href="/about" className="cta-primary" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 36px",
            background: "#ffffff",
            color: "#0a0a0a",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(255,255,255,0.2)"
          }}>
            Our Mission
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="/careers" className="cta-secondary" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 36px",
            background: "transparent",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "50px",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            border: "1px solid rgba(255,255,255,0.3)",
            transition: "all 0.3s ease"
          }}>
            Join Us
          </a>
        </div>
      </div>

      {/* Technology Focus Sections */}
      <div style={{
        padding: "100px 60px",
        maxWidth: "900px",
        margin: "0 auto",
        opacity: scrollY > 100 ? 1 : 0,
        transform: `translateY(${scrollY > 100 ? 0 : 50}px)`,
        transition: "all 0.8s ease-out"
      }}>
        
        {/* ISRU Section */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "300",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Lunar In-Situ Resource Utilization
          </h2>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "650px"
          }}>
            We're developing technologies to extract and process materials directly on the Moon. 
            From regolith melting and oxygen extraction to metal reduction using molten-regolith electrolysis, 
            our research targets the critical building blocks of a lunar industrial base.
          </p>
        </div>

        {/* Orbital Infrastructure */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "300",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Orbital & Tether Infrastructure
          </h2>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "650px"
          }}>
            Our team models tether-based orbital systems for efficient lunar-to-Earth cargo delivery. 
            We explore rotating skyhooks, orbital rings, and other novel concepts that could dramatically 
            reduce the cost of moving materials between space destinations.
          </p>
        </div>

        {/* Research & Tools */}
        <div style={{ marginBottom: "80px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "300",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Research & Simulation Tools
          </h2>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "650px"
          }}>
            We build open-source simulation tools, concept architectures, and analysis frameworks 
            for space manufacturing. Our software helps researchers and enthusiasts explore 
            mission architectures, materials processing, and orbital mechanics.
          </p>
        </div>

        {/* Education */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: "300",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            Open Education & Outreach
          </h2>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "650px"
          }}>
            We believe advanced space-industrial engineering should be accessible. Through 
            open documentation, technical workshops, and educational resources, we empower 
            students, hobbyists, and independent researchers to contribute to the future of lunar industry.
          </p>
        </div>

      </div>

      {/* Floating Particles */}
      <div style={{
        position: "fixed",
        bottom: "100px",
        left: "10%",
        width: "4px",
        height: "4px",
        background: "rgba(255,255,255,0.6)",
        borderRadius: "50%",
        animation: "float 12s ease-in-out infinite",
        zIndex: 1
      }} />
      <div style={{
        position: "fixed",
        bottom: "200px",
        left: "25%",
        width: "3px",
        height: "3px",
        background: "rgba(255,255,255,0.4)",
        borderRadius: "50%",
        animation: "float 15s ease-in-out infinite 2s",
        zIndex: 1
      }} />
      <div style={{
        position: "fixed",
        bottom: "150px",
        left: "40%",
        width: "5px",
        height: "5px",
        background: "rgba(255,255,255,0.5)",
        borderRadius: "50%",
        animation: "float 18s ease-in-out infinite 1s",
        zIndex: 1
      }} />

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        @keyframes moonFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-300px) translateX(50px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.2); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
        @keyframes shootingStar1 {
          0% { opacity: 0; transform: rotate(-45deg) translateX(-100px); }
          10% { opacity: 1; }
          30% { opacity: 0; transform: rotate(-45deg) translateX(300px); }
          100% { opacity: 0; }
        }
        @keyframes shootingStar2 {
          0% { opacity: 0; transform: rotate(-30deg) translateX(-80px); }
          10% { opacity: 1; }
          30% { opacity: 0; transform: rotate(-30deg) translateX(200px); }
          100% { opacity: 0; }
        }
        @keyframes craterFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .cta-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 30px rgba(255,255,255,0.3);
        }
        .cta-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
        }
        .stat-item {
          transition: transform 0.3s ease;
        }
        .stat-item:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
