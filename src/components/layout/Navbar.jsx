import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { firmInfo } from '../../data/content';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'AI Assistant', to: '/ai-assistant' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chimeEnabled, setChimeEnabled] = useState(() => {
    return localStorage.getItem('vn-chime-enabled') === 'enabled';
  });

  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Sync state with localStorage changes periodically
  useEffect(() => {
    const syncChime = () => {
      setChimeEnabled(localStorage.getItem('vn-chime-enabled') === 'enabled');
    };
    const interval = setInterval(syncChime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleChime = () => {
    const nextVal = chimeEnabled ? 'disabled' : 'enabled';
    localStorage.setItem('vn-chime-enabled', nextVal);
    setChimeEnabled(!chimeEnabled);
    
    // Play a brief preview chime if enabled
    if (!chimeEnabled) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.frequency.setValueAtTime(880, ctx.currentTime);
          gain.gain.setValueAtTime(0, ctx.currentTime);
          gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 1.2);
        }
      } catch (e) {}
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-white/85 backdrop-blur-[20px] h-[90px] flex items-center border-b border-silver/45 shadow-[0_2px_15px_rgba(138,154,134,0.02)]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
              <img 
                src="/images/logo.jpg" 
                alt="VN Law Firm Logo" 
                className="h-10 lg:h-11 xl:h-12 w-auto mix-blend-multiply flex-shrink-0 rounded-md"
              />
              <div className="hidden sm:block">
                <span className="font-playfair text-lg xl:text-xl font-medium block leading-tight text-navy">
                  VN Law Firm
                </span>
                <span className="font-inter text-[9px] xl:text-[10px] tracking-[0.2em] uppercase text-sage block mt-0.5 font-semibold">
                  Advocates & Legal Consultants
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1.5 lg:gap-2 xl:gap-8 flex-shrink">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-2 xl:px-4 py-2 font-inter text-xs lg:text-sm xl:text-base transition-colors duration-300 group whitespace-nowrap ${
                    location.pathname === link.to
                      ? 'text-terracotta font-semibold'
                      : 'text-text-primary/80 hover:text-terracotta'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-terracotta transition-all duration-300 ${
                    location.pathname === link.to ? 'w-6' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 xl:gap-4 flex-shrink-0">
              {/* Sound Chime Toggle */}
              <button
                onClick={toggleChime}
                title={chimeEnabled ? "Mute ambient chimes" : "Enable ambient chimes"}
                className="p-2.5 rounded-full border border-silver/50 bg-cream/10 text-text-secondary hover:text-terracotta hover:bg-cream/35 transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                {chimeEnabled ? <FaVolumeUp size={14} className="text-sage" /> : <FaVolumeMute size={14} />}
              </button>

              <a
                href={`tel:${firmInfo.phone}`}
                className="hidden lg:inline-flex items-center justify-center gap-1.5 px-3 xl:px-5 py-2 xl:py-2.5 border border-terracotta/40 text-terracotta hover:bg-terracotta hover:text-white transition-all duration-300 rounded-md font-inter font-semibold text-xs tracking-wider uppercase whitespace-nowrap flex-shrink-0 cursor-pointer"
              >
                <FaPhone className="size-3 flex-shrink-0" />
                <span className="flex-shrink-0">Call Now</span>
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg transition-colors duration-300 text-navy hover:text-terracotta flex-shrink-0"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] lg:hidden"
          >
            <div className="absolute inset-0 bg-warm-white/98 backdrop-blur-xl" />
            
            <div className="relative h-full flex flex-col items-center justify-center gap-3 pt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className={`font-playfair text-2xl py-2 block transition-colors duration-300 ${
                      location.pathname === link.to ? 'text-terracotta' : 'text-navy hover:text-terracotta'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col gap-3 items-center"
              >
                {/* Audio Mobile Toggle */}
                <button
                  onClick={toggleChime}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-silver/50 bg-cream/10 text-text-secondary rounded-lg font-inter text-xs font-semibold cursor-pointer"
                >
                  {chimeEnabled ? <FaVolumeUp size={14} className="text-sage" /> : <FaVolumeMute size={14} />}
                  <span>{chimeEnabled ? "Chimes On" : "Chimes Muted"}</span>
                </button>

                <a
                  href={`tel:${firmInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 h-12 bg-terracotta text-white font-inter font-semibold rounded-lg hover:bg-hover-gold transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm"
                >
                  <FaPhone size={14} className="flex-shrink-0" />
                  <span className="flex-shrink-0">{firmInfo.phoneDisplay}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

