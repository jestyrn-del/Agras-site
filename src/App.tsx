import './App.css'

const stats = [
  { value: '18k+', label: 'hectares monitored' },
  { value: '31%', label: 'average yield growth' },
  { value: '24/7', label: 'field intelligence' },
]

const features = [
  {
    icon: '🌾',
    title: 'Smart crop planning',
    text: 'Plan sowing, irrigation, and harvest windows using live field intelligence.',
  },
  {
    icon: '💧',
    title: 'Water savings',
    text: 'Reduce waste with sensor-based irrigation and soil moisture forecasting.',
  },
  {
    icon: '📈',
    title: 'Yield analytics',
    text: 'Track performance by region and crop with clear, actionable reporting.',
  },
  {
    icon: '🛰️',
    title: 'Satellite insights',
    text: 'Identify stress hotspots, vegetation trends, and field anomalies early.',
  },
]

const steps = [
  'Connect your field data and equipment',
  'Analyze crop health and soil variability',
  'Automate decisions and optimize every hectare',
]

const partners = ['GreenHarvest', 'NordFarm', 'AgriNova', 'FieldGrid', 'Solera']

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">A</div>
          <div className="brand-text">
            <span className="brand-name">Agras</span>
            <span className="brand-tag">precision farming</span>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#features">Features</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </nav>

        <button type="button" className="nav-button">
          Book a demo
        </button>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Smarter agriculture for higher returns</span>
            <h1>Grow more with less risk, water, and guesswork.</h1>
            <p>
              Agras helps farms, cooperatives, and agribusiness teams turn field data
              into faster decisions, healthier crops, and stronger harvests.
            </p>

            <div className="cta-row">
              <button type="button" className="primary-btn">
                Start your strategy
              </button>
              <button type="button" className="secondary-btn">
                Explore platform
              </button>
            </div>

            <div className="stats-grid" aria-label="Agras key stats">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Agriculture dashboard preview">
            <div className="visual-panel">
              <div className="panel-header">
                <span className="dot green" />
                <span className="dot amber" />
                <span className="dot red" />
              </div>

              <div className="chart-box">
                <div className="chart-bars" aria-hidden="true">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '64%' }} />
                  <span style={{ height: '79%' }} />
                  <span style={{ height: '93%' }} />
                  <span style={{ height: '100%' }} />
                </div>
                <div className="chart-legend">
                  <span>Yield</span>
                  <strong>+31%</strong>
                </div>
              </div>

              <div className="mini-cards">
                <div>
                  <label>Soil health</label>
                  <strong>86%</strong>
                </div>
                <div>
                  <label>Water use</label>
                  <strong>-27%</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section" aria-label="Trusted by agriculture brands">
          <p>Trusted by growers and agribusiness leaders</p>
          <div className="partners-row">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>

        <section id="features" className="features-section">
          <div className="section-heading">
            <span className="eyebrow">Why Agras</span>
            <h2>Everything your field operations need in one place.</h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="impact-section">
          <div className="impact-copy">
            <span className="eyebrow">Field to forecast</span>
            <h2>Turn every decision into a measurable advantage.</h2>
            <p>
              From crop monitoring to operational planning, Agras connects data across
              the farm so your team can move faster with confidence.
            </p>
            <ul>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="impact-card">
            <div className="impact-topline">
              <span>Season outlook</span>
              <strong>Excellent</strong>
            </div>
            <div className="impact-score">92</div>
            <div className="impact-meter" aria-hidden="true">
              <span />
            </div>
            <div className="impact-labels">
              <span>Risk</span>
              <span>Low</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
