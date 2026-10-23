import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Civic<span>Lens</span>
      </Link>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#impact">Our Impact</a>
      </nav>

      <Link to="/report" className="nav-button">
        Report an Issue
      </Link>
    </header>
  );
}

export default Navbar;
