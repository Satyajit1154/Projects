
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ReportIssue() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    location: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

 
function handleSubmit(event) {
  event.preventDefault();

  const newComplaint = {
    id: crypto.randomUUID(),
    ...formData,
    status: 'Submitted',
    createdAt: new Date().toISOString(),
  };

  const existingComplaints = JSON.parse(
    localStorage.getItem('complaints') || '[]'
  );

  const updatedComplaints = [
    ...existingComplaints,
    newComplaint,
  ];

  localStorage.setItem(
    'complaints',
    JSON.stringify(updatedComplaints)
  );

  console.log('Saved complaint:', newComplaint);

  alert('Complaint submitted successfully!');

  setFormData({
    category: '',
    title: '',
    description: '',
    location: '',
  });
}


  return (
    <div className="app">
      <Navbar />

      <main className="report-page section">
        <div className="report-heading">
          <p className="eyebrow">
            HELP IMPROVE YOUR COMMUNITY
          </p>

          <h1>Report a Civic Issue</h1>

          <p>
            Tell us what is wrong in your neighbourhood.
            Your report will help the responsible team
            understand the problem.
          </p>
        </div>

        <div className="report-card">
          <h2>Issue Details</h2>

          <p className="form-description">
            Fields marked with * are required.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="category">
                Issue Category *
              </label>

              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="roads">Roads and Potholes</option>
                <option value="garbage">Garbage and Cleanliness</option>
                <option value="water">Water Leakage</option>
                <option value="streetlights">Streetlights</option>
                <option value="drainage">Drainage</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="title">Issue Title *</label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Large pothole near the bus stop"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">
                Description *
              </label>

              <textarea
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the problem..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>

              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Area, street or landmark"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="photo">
                Upload a Photo (optional)
              </label>

              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
              />
            </div>

            <button type="submit" className="primary-button">
              Submit Report →
            </button>
          </form>

          <Link to="/" className="secondary-button">
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ReportIssue;
