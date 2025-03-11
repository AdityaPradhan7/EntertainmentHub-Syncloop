import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Granim from 'granim';
import LandingPage from './components/LandingPage';
import MovieApp from './components/MovieApp';
import MusicApp from './components/MusicApp';
import BookApp from './components/BookApp';
import './App.css';

const App = () => {
  useEffect(() => {
    new Granim({
      element: '#granim-canvas',
      direction: 'top-bottom',
      isPausedWhenNotInView: true,
      image: {
        source: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        blendingMode: 'multiply',
      },
      states: {
        "default-state": {
          gradients: [
            ['#29323c', '#485563'],
            ['#FF6B6B', '#556270'],
            ['#5fa8dd', '#6b87ab'],
            ['#f0ab51', '#eceba3'],
          ],
          transitionSpeed: 6000,
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="granim-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></canvas>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<MovieApp />} />
          <Route path="/music" element={<MusicApp />} />
          <Route path="/books" element={<BookApp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;