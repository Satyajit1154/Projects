
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyComplaints() {
const navigate = useNavigate();
  const [complaints] = useState(() => {
    const savedComplaints = localStorage.getItem('complaints');

    return savedComplaints
      ? JSON.parse(savedComplaints)
      : [];
  });

  return (
    <div className="app">
      <Navbar />

      <main className="complaints-page section">
        <div className="complaints-heading">
          <p className="eyebrow">YOUR CIVIC CONTRIBUTION</p>
          <h1>My Complaints</h1>
          <p>
            View the civic issues you have reported
            and check their current status.
          </p>
        </div>

        <div className="complaints-summary">
          <div>
            <span>Total Complaints</span>
            <h2>{complaints.length}</h2>
          </div>

          <div>
            <span>Submitted</span>
            <h2>
              {complaints.filter(
                (complaint) => complaint.status === 'Submitted'
              ).length}
            </h2>
          </div>
        </div>

        {complaints.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <h2>No complaints yet</h2>
            <p>
              You haven't reported any civic issues.
              Start by submitting your first complaint.
            </p>

            <Link to="/report" className="primary-button">
              Report an Issue →
            </Link>
          </div>
        ) : (
          <div className="complaints-list">
            {complaints.map((complaint) => (
                <article
                className="complaint-card"
                key={complaint.id}
                onClick={() => navigate(`/complaints/${complaint.id}`)}
                role="link"
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                    navigate(`/complaints/${complaint.id}`);
                    }
                }}
                >
                <div className="complaint-card-top">
                  <span className="complaint-category">
                    {complaint.category}
                  </span>

                  <span className="complaint-status">
                    {complaint.status}
                  </span>
                </div>

                <h2>{complaint.title}</h2>

                <p className="complaint-description">
                  {complaint.description}
                </p>

                <div className="complaint-meta">
                  <span>📍 {complaint.location}</span>

                  <span>
                    ID: {complaint.id.slice(0, 8)}
                  </span>
                </div>

                <p className="complaint-date">
                  Reported:{' '}
                  {new Date(
                    complaint.createdAt
                  ).toLocaleString()}
                </p>
              </article>
            ))}
          </div>
        )}

        <div className="complaints-actions">
          <Link to="/report" className="primary-button">
            + Report Another Issue
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MyComplaints;
