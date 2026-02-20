"use client";
import { useEffect, useState } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0a0a0a 0%, #0d1117 50%, #0a0a0a 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Stars */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(2px 2px at 60px 90px, #ffffff, transparent),
          radial-gradient(1px 1px at 180px 140px, rgba(255,255,255,0.7), transparent),
          radial-gradient(2px 2px at 320px 60px, #ffffff, transparent),
          radial-gradient(1px 1px at 480px 200px, rgba(255,255,255,0.6), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "550px 280px",
        animation: "twinkle 14s ease-in-out infinite"
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "80px 60px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "80px"
        }}>
          {/* Left Column */}
          <div>
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
                marginBottom: "30px"
              }}>
                Contact
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 6vw, 56px)",
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
              Let's build<br />
              <span style={{ fontStyle: "italic", fontWeight: "200" }}>the future together.</span>
            </h1>

            <p style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "50px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.3s"
            }}>
              Have questions about our technology, partnerships, or career opportunities? 
              We'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.4s"
            }}>
              <h3 style={{
                fontSize: "16px",
                fontWeight: "500",
                marginBottom: "20px",
                color: "#ffffff"
              }}>Headquarters</h3>
              <div style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "rgba(255,255,255,0.6)"
              }}>
                <p>2101 NASA Road One, Suite 400</p>
                <p>Houston, TX 77058</p>
                <p>United States</p>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3 style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "15px",
                  color: "#ffffff"
                }}>General Inquiries</h3>
                <a href="mailto:hello@nadirlabs.com" style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}>
                  hello@nadirlabs.com
                </a>
              </div>

              <div style={{ marginTop: "30px" }}>
                <h3 style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "15px",
                  color: "#ffffff"
                }}>Press</h3>
                <a href="mailto:press@nadirlabs.com" style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  transition: "color 0.3s ease"
                }}>
                  press@nadirlabs.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out 0.3s"
          }}>
            {submitted ? (
              <div style={{
                padding: "60px 40px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)",
                textAlign: "center"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto 25px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  marginBottom: "12px",
                  color: "#ffffff"
                }}>Message Sent!</h3>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.6)"
                }}>
                  Thanks for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                padding: "40px",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.08)"
              }}>
                <div style={{ marginBottom: "25px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box"
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box"
                    }}
                    placeholder="you@example.com"
                  />
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                      cursor: "pointer"
                    }}
                  >
                    <option value="" style={{ color: "#666" }}>Select a topic</option>
                    <option value="general" style={{ background: "#1a1a1a" }}>General Inquiry</option>
                    <option value="partnership" style={{ background: "#1a1a1a" }}>Partnership</option>
                    <option value="careers" style={{ background: "#1a1a1a" }}>Careers</option>
                    <option value="press" style={{ background: "#1a1a1a" }}>Press</option>
                    <option value="other" style={{ background: "#1a1a1a" }}>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <label style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: "500",
                    marginBottom: "8px",
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "#ffffff",
                      fontSize: "15px",
                      outline: "none",
                      transition: "all 0.3s ease",
                      boxSizing: "border-box",
                      resize: "vertical",
                      fontFamily: "inherit"
                    }}
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    background: "#ffffff",
                    color: "#0a0a0a",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        input:focus, textarea:focus, select:focus {
          border-color: rgba(255,255,255,0.4) !important;
          background: rgba(255,255,255,0.08) !important;
        }
        a:hover {
          color: #ffffff !important;
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,255,255,0.15);
        }
      `}</style>
    </div>
  );
}
