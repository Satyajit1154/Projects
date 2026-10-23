
function HowItWorks() {
  return (
    <section
      className="how-it-works section"
      id="how-it-works"
    >
      <div className="section-heading">
        <p className="eyebrow">THREE SIMPLE STEPS</p>
        <h2>From problem to progress.</h2>
      </div>

      <div className="steps-grid">
        <article className="step-card">
          <span className="step-number">01</span>
          <h3>Report</h3>
          <p>
            Describe the issue and share its location
            with a photo if available.
          </p>
        </article>

        <article className="step-card">
          <span className="step-number">02</span>
          <h3>Review</h3>
          <p>
            The platform helps categorize the report
            for review by the responsible team.
          </p>
        </article>

        <article className="step-card">
          <span className="step-number">03</span>
          <h3>Resolve</h3>
          <p>
            Follow progress and provide feedback
            once the issue has been addressed.
          </p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
