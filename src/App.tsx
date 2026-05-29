import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import OurStoryPage from './pages/OurStoryPage';
import BlendsPage from './pages/BlendsPage';
import BrewingGuidesPage from './pages/BrewingGuidesPage';
import VisitPage from './pages/VisitPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#FDF8F3] min-h-screen text-[#1A0F08] selection:bg-[#D4A574] selection:text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/blends" element={<BlendsPage />} />
          <Route path="/brewing-guides" element={<BrewingGuidesPage />} />
          <Route path="/visit" element={<VisitPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
