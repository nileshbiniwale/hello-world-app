export default function Page() {
  return (
    <main style={{ background: "#0f172a", color: "#e2e8f0", minHeight: "100vh" }}>
      
      <div style={{ maxWidth: "1100px", margin: "auto", padding: "40px 20px" }}>
        
        {/* Header */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "22px", fontWeight: "bold", color: "#38bdf8" }}>
            RSA
          </div>

          <nav>
            <a href="#" style={{ marginLeft: 20, color: "#94a3b8" }}>Home</a>
            <a href="#" style={{ marginLeft: 20, color: "#94a3b8" }}>How It Works</a>
            <a href="#" style={{ marginLeft: 20, color: "#94a3b8" }}>Programs</a>
          </nav>
        </header>

        {/* Hero */}
        <section style={{ textAlign: "center", padding: "80px 20px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Your Career. Designed, Not Discovered.
          </h1>

          <p style={{ color: "#94a3b8", maxWidth: "700px", margin: "auto" }}>
            RightStepAhead (RSA) is an AI-powered platform helping individuals discover, plan, and execute their ideal career path.
          </p>

          <div style={{ marginTop: "30px" }}>
            <button style={{
              padding: "12px 24px",
              borderRadius: "8px",
              background: "#38bdf8",
              color: "#0f172a",
              marginRight: "10px",
              border: "none"
            }}>
              Get Your Path
            </button>

            <button style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1px solid #38bdf8",
              color: "#38bdf8",
              background: "transparent"
            }}>
              Explore RSA
            </button>
          </div>
        </section>

        {/* Section */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2>What RSA Does</h2>
          <p style={{ color: "#94a3b8" }}>
            AI + Guidance + Toolkits to turn confusion into clear career paths.
          </p>
        </section>

      </div>
    </main>
  );
}