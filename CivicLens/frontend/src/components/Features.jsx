
function Features() {
  return (
    <section className="impact section" id="impact">
      <div className="section-heading">
        <p className="eyebrow">WHY CIVICLENS?</p>

        <h2>Small reports. Meaningful change.</h2>

        <p>
          A simple way for citizens and local authorities
          to work together.
        </p>
      </div>

      <div className="feature-grid">
        <article className="feature-card">
          <div className="feature-icon">📍</div>
          <h3>Report Locally</h3>
          <p>
            Report potholes, garbage, water leaks and
            other civic issues in your area.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🔎</div>
          <h3>Track Progress</h3>
          <p>
            Follow your complaints and see updates
            as they move towards resolution.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI-Assisted Reporting</h3>
          <p>
            AI will help categorize complaints and
            identify potentially similar reports.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Features;
