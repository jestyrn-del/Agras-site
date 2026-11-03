import './App.css'

const ContactLinks = [
  { name: 'MAX', href: 'https://max.ru/' },
  { name: 'Telegram', href: 'https://t.me/' },
];

function Header() {
  const logoUrl = 'https://via.placeholder.com/43'; // Replace with your actual logo URL
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Models', href: '#' },
    { name: 'Location', href: '#' },
    { name: 'Paths', href: '#' },
    { name: 'Situations', href: '#' },
    { name: 'Complectation', href: '#' },
    { name: 'Steps', href: '#' },
    { name: 'Penetration', href: '#' },
    { name: 'Calculate', href: '#' },
    { name: 'Client Work', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Callback', href: '#' }
  ];

  return (
    <header className="section header">
      <div className="header-logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      
      <div className="header-nav">
        {
          navLinks.map((link, index) => (
            <a key={index} href={link.href}>{link.name}</a>
          ))
        }
      </div>

      <div className="header-links">
        {
          ContactLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))
        }
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="section hero">
      <h2>Welcome to My App</h2>
      <p>Discover the power of AI in agriculture.</p>
    </section>
  )
}

function Models() {
  return (
    <section className="section models">
      <h2>Our Models</h2>
      <p>Explore our advanced AI models for agriculture.</p>
    </section>
  )
}

function Location() {
  return (
    <section className="section location">
      <h2>Location</h2>
      <p>Find us at our headquarters in Silicon Valley.</p>
    </section>
  )
}

function Paths() {
  return (
    <section className="section paths">
      <h2>Paths</h2>
      <p>Discover the different paths to success in agriculture.</p>
    </section>
  )
}

function Situations() {
  return (
    <section className="section situations">
      <h2>Situations</h2>
      <p>Learn how to handle various agricultural situations effectively.</p>
    </section>
  )
}

function Complectation() {
  return (
    <section className="section complectation">
      <h2>Complectation</h2>
      <p>Understand the complete setup and configuration of our solutions.</p>
    </section>
  )
}

function Steps() {
  return (
    <section className="section steps">
      <h2>Steps</h2>
      <p>Follow these steps to get started with our solutions.</p>
    </section>
  )
}

function Penetration() {
  return (
    <section className="section penetration">
      <h2>Penetration</h2>
      <p>Learn about market penetration strategies for agricultural technology.</p>
    </section>
  )
}

function Calculate() {
  return (
    <section className="section calculate">
      <h2>Calculate</h2>
      <p>Use our tools to calculate the best strategies for your agricultural needs.</p>
    </section>
  )
}

function ClientWork() {
  return (
    <section className="section client-work">
      <h2>Client Work</h2>
      <p>See how we have helped our clients achieve success in agriculture.</p>
    </section>
  )
}

function Partners() {
  return (
    <section className="section partners">
      <h2>Partners</h2>
      <p>Meet our trusted partners in the agricultural industry.</p>
    </section>
  )
}

function OurTeam() {
  return (
    <section className="section our-team">
      <h2>Our Team</h2>
      <p>Get to know the dedicated team behind our innovative solutions.</p>
    </section>
  )
}

function Documentation() {
  return (
    <section className="section documentation">
      <h2>Documentation</h2>
      <p>Access our comprehensive documentation for all our products and services.</p>
    </section>
  )
}

function Blog() {
  return (
    <section className="section blog">
      <h2>Blog</h2>
      <p>Read our latest articles and insights on agricultural technology.</p>
    </section>
  )
}

function Callback() {
  return (
    <section className="section callback">
      <h2>Callback</h2>
      <p>Request a callback from our team for personalized assistance.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="section footer">
      <p>&copy; 2024 My App. All rights reserved.</p>
    </footer>
  )
}







function App() {
  return (
    <>
      <Header />
      <Hero />
      <Models />
      <Location />
      <Paths />
      <Situations />
      <Complectation />
      <Steps />
      <Penetration />
      <Calculate />
      <ClientWork />
      <Partners />
      <OurTeam />
      <Documentation />
      <Blog />
      <Callback />
      <Footer />
    </> 
  )
}

export default App