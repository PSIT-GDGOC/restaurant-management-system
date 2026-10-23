import './App.css'
import OrderStatus from './components/OrderStatus';
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">🍽️</span>
          <span>Food<span className="brand-highlight">Desk</span></span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">Get Started ↗</a>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              SMART RESTAURANT MANAGEMENT
            </div>

            <h1>
              Your restaurant.
              <br />
              <span>One simple</span>
              <br />
              system.
            </h1>

            <p className="hero-description">
              Manage orders, organize your menu, and keep your restaurant
              running smoothly — all from one place.
            </p>

            <div className="hero-actions">
              <a href="#features" className="primary-button">
                Explore Features <span>→</span>
              </a>
              <a href="#menu" className="secondary-button">
                Explore Menu
              </a>
            </div>

            <div className="hero-note">
              <span>✓</span> Simple to use
              <span>✓</span> Built for restaurants
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="food-illustration">🍲</div>
            <div className="floating-card order-card">
              <span className="card-icon">🛍️</span>
              <div>
                <strong>Order management</strong>
                <small>Everything in one place</small>
              </div>
              <span className="check-icon">✓</span>
            </div>
            <div className="floating-card menu-card">
              <span className="menu-emoji">🥗</span>
              <div>
                <strong>Fresh menu</strong>
                <small>Easy to organize</small>
              </div>
            </div>
            <div className="visual-tag">Made for hospitality ✨</div>
          </div>
        </section>

 
        <section style={{ padding: '2rem 1rem' }}>
          <OrderStatus />
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-label">WHAT YOU CAN DO</span>
            <h2>Less chaos. <span>More hospitality.</span></h2>
            <p>Tools to help your restaurant team stay organized.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon orange">📋</div>
              <h3>Order Management</h3>
              <p>Keep track of customer orders and their status in one place.</p>
              <a href="#contact">Learn more ↗</a>
            </article>

            <article className="feature-card">
              <div className="feature-icon green">🥘</div>
              <h3>Menu Management</h3>
              <p>Organize dishes, prices, and availability with ease.</p>
              <a href="#menu">Learn more ↗</a>
            </article>

            <article className="feature-card">
              <div className="feature-icon purple">📊</div>
              <h3>Restaurant Overview</h3>
              <p>Build a clearer picture of your restaurant operations.</p>
              <a href="#contact">Learn more ↗</a>
            </article>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div>
            <span className="section-label">A BETTER WORKFLOW</span>
            <h2>Good food deserves <span>great management.</span></h2>
            <p>
              From the first order to the final bill, bring your daily
              restaurant workflow together in one convenient system.
            </p>
          </div>
          <div className="workflow-list">
            <div><span>01</span><strong>Receive customer orders</strong><span>→</span></div>
            <div><span>02</span><strong>Manage your menu</strong><span>→</span></div>
            <div><span>03</span><strong>Keep operations organized</strong><span>→</span></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="section-label">READY TO GET ORGANIZED?</span>
            <h2>Make room for <span>better service.</span></h2>
            <p>Explore the project and help us make it better.</p>
          </div>
          <a
            className="primary-button"
            href="https://github.com/PSIT-GDGOC/restaurant-management-system"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">🍽️</span>
          <span>Food<span className="brand-highlight">Desk</span></span>
        </a>
        <p>A community-built restaurant management project.</p>
        <a href="https://github.com/PSIT-GDGOC/restaurant-management-system" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </div>
  )
}

export default App