export default function Navbar() {
  return (
    <nav className="tm-navbar">
      <a href="landing.html" className="tm-nav-logo">🍜 QuickBite</a>
      <span className="tm-nav-title">Task Manager</span>
      <button className="tm-nav-link" onClick={() => window.location.reload()}>
        Order Dashboard
      </button>
    </nav>
  );
}