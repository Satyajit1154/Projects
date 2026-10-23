import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          SMARTER CITIES START WITH US
        </p>

        <h1>
          Your City.
          <br />
          Your Voice.
          <br />
          <span>Real Change.</span>
        </h1>

        <p className="hero-description">
          Report civic problems, track their progress,
          and help make your neighbourhood a better place
          to live. Together, we can create cleaner,
          safer and smarter communities.
        </p>

        <div className="hero-actions">
            <Link to="/report" className="primary-button">
                Report an Issue →
            </Link>

            <a href="/#how-it-works" className="secondary-button">
                How It Works
            </a>
        </div>

        <p className="hero-note">
          Simple reporting. Transparent progress.
          Stronger communities.
        </p>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <div className="visual-header">
            <span>Community Overview</span>

            <span className="live-indicator">
              ● Live
            </span>
          </div>

          <div className="visual-icon">
            🏙️
          </div>

          <h3>A better city starts here.</h3>

          <p>
            Every reported problem is an opportunity
            to make a difference.
          </p>

          <div className="visual-tags">
            <span>Roads</span>
            <span>Cleanliness</span>
            <span>Public Safety</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;