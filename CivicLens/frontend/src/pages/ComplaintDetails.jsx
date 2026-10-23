
import { Link, useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ComplaintDetails() {
  const { id } = useParams();

  const savedComplaints = JSON.parse(
    localStorage.getItem('complaints') || '[]'
  );

  const complaint = savedComplaints.find(
    (item) => item.id === id
  );

  if (!complaint) {
    return (
      <div className="app">
        <Navbar />

        <main className="section">
          <h1>Complaint Not Found</h1>
          <p>
            We couldn't find a complaint with this ID.
          </p>

          <Link to="/complaints" className="primary-button">
            Back to My Complaints
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="complaints-page section">
        <Link to="/complaints" className="back-link">
          ← Back to My Complaints
        </Link>

        <div className="complaints-heading">
          <p className="eyebrow">COMPLAINT DETAILS</p>
          <h1>{complaint.title}</h1>
          <p>
            Review the information associated with your
            submitted civic issue.
          </p>
        </div>

        <article className="complaint-card detail-card">
          <div className="complaint-card-top">
            <span className="complaint-category">
              {complaint.category}
            </span>

            <span className="complaint-status">
              {complaint.status}
            </span>
          </div>

          <h2>Issue Description</h2>
          <p className="complaint-description">
            {complaint.description}
          </p>

          <h2>Location</h2>
          <p>{complaint.location}</p>

          <h2>Complaint Reference</h2>
          <p className="reference-id">{complaint.id}</p>

          <h2>Submitted On</h2>
          <p>
            {new Date(complaint.createdAt).toLocaleString()}
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default ComplaintDetails;
