import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KnowMore from './pages/KnowMore';
import HowItWorks from './pages/HowItWorks';


function App() {
 

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
