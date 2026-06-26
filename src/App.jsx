import { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBell, FaTimes } from 'react-icons/fa';

import IntroPage from './components/IntroPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import MouseGlow from './components/ui/MouseGlow';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import GalleryPage from './pages/GalleryPage';
import AIAssistantPage from './pages/AIAssistantPage';
import ContactPage from './pages/ContactPage';

gsap.registerPlugin(ScrollTrigger);

// Synthesize a beautiful pure chime tone using Web Audio API
const playChimeTone = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    
    const playTone = (freq, type, gainValue, duration) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      
      gainNode.gain.setValueAtTime(0, now);
      // Soft fade in (attack)
      gainNode.gain.linearRampToValueAtTime(gainValue, now + 0.08);
      // Long resonant decay
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start(now);
      osc.stop(now + duration);
    };
    
    // Resonant chime chord: A5, E6, A6, C#7 for a calm, zen chord
    playTone(880, 'sine', 0.12, 3.5);   // Fundamental
    playTone(1320, 'sine', 0.06, 3.0);  // Harmonious fifth
    playTone(1760, 'sine', 0.04, 2.5);  // High octave
    playTone(2200, 'sine', 0.02, 1.8);  // Shimmering third
  } catch (error) {
    console.warn("Audio Context chime failed:", error);
  }
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => ScrollTrigger.refresh(), 300);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practice-areas" element={<PracticeAreasPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('vn-intro-seen');
  });

  // Chime choice state: 'enabled', 'disabled', or null (unanswered)
  const [chimeChoice, setChimeChoice] = useState(() => {
    return localStorage.getItem('vn-chime-enabled');
  });

  const hasPlayedChimeRef = useRef(false);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
    sessionStorage.setItem('vn-intro-seen', 'true');
  }, []);

  // Listen for scroll to trigger chime once
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        const choice = localStorage.getItem('vn-chime-enabled');
        if (choice === 'enabled' && !hasPlayedChimeRef.current) {
          hasPlayedChimeRef.current = true;
          playChimeTone();
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const enableChime = () => {
    localStorage.setItem('vn-chime-enabled', 'enabled');
    setChimeChoice('enabled');
    // Play immediately to confirm
    playChimeTone();
  };

  const disableChime = () => {
    localStorage.setItem('vn-chime-enabled', 'disabled');
    setChimeChoice('disabled');
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-warm-white text-text-primary">
        {showIntro && <IntroPage onComplete={handleIntroComplete} />}
        
        {!showIntro && (
          <>
            <MouseGlow />
            <Navbar />
            <ScrollToTop />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
            <WhatsAppFloat />

            {/* Ambient Chime Opt-In Banner (Fades in if choice is not set yet) */}
            <AnimatePresence>
              {!chimeChoice && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 1 }}
                  className="fixed bottom-6 left-6 z-[200] max-w-sm w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-md border border-silver/60 rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 border border-sage/15 flex items-center justify-center text-sage">
                      <FaBell size={18} className="animate-bounce" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-playfair text-sm font-semibold text-navy">Mindful Chime Opt-In</h4>
                        <button onClick={disableChime} className="text-text-secondary/50 hover:text-text-primary p-0.5 cursor-pointer">
                          <FaTimes size={12} />
                        </button>
                      </div>
                      <p className="font-inter text-xs text-text-secondary mt-1.5 leading-relaxed font-light">
                        We play a soft, synthesized chime once on scroll to set a calm tone. Would you like to enable this sound?
                      </p>
                      <div className="flex gap-3 mt-4">
                        <button 
                          onClick={enableChime}
                          className="flex-1 px-4 py-2 bg-sage hover:bg-sage/90 text-white rounded-lg font-inter text-[10px] uppercase tracking-wider font-semibold shadow-sm cursor-pointer transition-colors"
                        >
                          Enable Sound
                        </button>
                        <button 
                          onClick={disableChime}
                          className="flex-1 px-4 py-2 border border-silver hover:bg-cream/20 text-text-secondary rounded-lg font-inter text-[10px] uppercase tracking-wider font-semibold cursor-pointer transition-colors"
                        >
                          Mute Chimes
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

