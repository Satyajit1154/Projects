import { Link } from 'react-router-dom';
function ReportCTA() {
  return (
    <section className="report-cta" id="report">
      <div>
        <p className="eyebrow">MAKE YOUR VOICE COUNT</p>

        <h2>Notice a problem? Let's fix it.</h2>

        <p>
          Your next report could be the first step
          towards a better neighbourhood.
        </p>
      </div>

     <Link to="/report" className="primary-button">
      Get Started →
    </Link>
    </section>
  );
}

export default ReportCTA;
