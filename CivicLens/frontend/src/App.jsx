
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ReportIssue from './pages/ReportIssue';
import MyComplaints from './pages/MyComplaints';
import ComplaintDetails from './pages/ComplaintDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<ReportIssue />} />
       <Route path="/complaints" element={<MyComplaints />} />
       <Route
        path="/complaints/:id"
        element={<ComplaintDetails />}
      />
    </Routes>
  );
}

export default App;
