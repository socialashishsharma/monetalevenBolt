import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Insights } from './components/Insights';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DeviceRedirect } from './components/DeviceRedirect';
import { BlogHome } from './components/blog/BlogHome';
import { BlogPost } from './components/blog/BlogPost';
import { NetWorthCalculatorHome } from './components/netWorthCalculator/NetWorthCalculatorHome';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <DeviceRedirect />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Services />
              <Insights />
              <Pricing />
              <Contact />
            </main>
          } />
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
          <Route path="/net_worth_calculator" element={<NetWorthCalculatorHome />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;