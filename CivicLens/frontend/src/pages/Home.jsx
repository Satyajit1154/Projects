import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ReportCTA from '../components/ReportCTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ReportCTA />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
