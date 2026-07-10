export default function LandingPage({ onNavigate }) {
  return (
    <>
      <header className="navbar">
        <div className="nav-logo">QuickBite</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Our Story</a></li>
          </ul>
        </nav>
        <div className="nav-right">
          <span className="nav-icon">🛒</span>
          <button className="btn-signin" onClick={onNavigate}>Task Manager</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-tag">Hot &amp; Fresh, Every Time</span>
          <h1 className="hero-title">Restaurant meals.<br /><em>Delivered to your door.</em></h1>
          <p className="hero-sub">Order from the best local restaurants and get your meal in under 30 minutes. Hot, fresh, and right on time.</p>
          <div className="hero-cta">
            <a href="#menu" className="btn-primary">Explore the Menu</a>
            <a href="#about" className="btn-ghost">Learn More</a>
          </div>
        </div>
        <div className="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85" alt="Delicious food" className="hero-img" />
          <div className="hero-overlay"></div>
        </div>
      </section>

      <section className="collections" id="menu">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>Two cravings, one platform. Explore what we have to offer.</p>
        </div>
        <div className="col-grid">
          <div className="col-card">
            <div className="col-img-wrap">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80" alt="Main Course" />
              <button className="col-btn">Order Meals</button>
            </div>
            <div className="col-body">
              <h3>Main Course</h3>
              <p>Biryanis, pasta, curries, and grilled platters from top-rated restaurants.</p>
            </div>
          </div>
          <div className="col-card">
            <div className="col-img-wrap">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=700&q=80" alt="Desserts" />
              <button className="col-btn">Order Desserts</button>
            </div>
            <div className="col-body">
              <h3>Desserts &amp; Drinks</h3>
              <p>Cakes, shakes, bubble teas, and artisan coffees.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feat-item">
          <span className="feat-icon">⚡</span>
          <h4>30-Min Delivery</h4>
          <p>Your food arrives hot within 30 minutes, guaranteed.</p>
        </div>
        <div className="feat-item">
          <span className="feat-icon">🍽️</span>
          <h4>500+ Restaurants</h4>
          <p>Choose from hundreds of local and chain restaurants daily.</p>
        </div>
        <div className="feat-item">
          <span className="feat-icon">📦</span>
          <h4>Live Tracking</h4>
          <p>Watch your order move from kitchen to your door in real time.</p>
        </div>
      </section>

      <section className="about-strip" id="about">
        <div className="about-text">
          <span className="about-label">Our Story</span>
          <h2>Food that brings people together</h2>
          <p>QuickBite was born from a simple idea — everyone deserves a great meal without the hassle. We partner with the finest local restaurants and ensure every order is delivered with care, speed, and a smile.</p>
          <button className="btn-primary" onClick={onNavigate}>Manage Orders</button>
        </div>
        <div className="about-img-wrap">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=80" alt="Fresh ingredients" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">QuickBite</div>
            <p>Bringing you the best meals from around the city.</p>
          </div>
          <div className="footer-links-col">
            <h5>Order</h5>
            <ul>
              <li><a href="#">Main Course</a></li>
              <li><a href="#">Desserts</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h5>Support</h5>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Delivery Info</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 QuickBite. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
