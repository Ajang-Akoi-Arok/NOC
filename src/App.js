import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollToHash from './components/ScrollToHash';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import GetInvolved from './pages/GetInvolved';
import OurImpact from './pages/OurImpact';
import Footer from './components/Footer';
import organizationSchema from './config/organizationSchema';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(organizationSchema)}
            </script>
          </Helmet>
          <ScrollToHash />
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/our-impact" element={<OurImpact />} />
            </Routes>
          </PageTransition>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;