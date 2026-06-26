import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBalanceScale } from 'react-icons/fa';
import { firmInfo } from '../data/content';

export default function IntroPage({ onComplete }) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] overflow-hidden select-none flex"
        exit={{ pointerEvents: 'none' }}
      >
        {/* Left Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isEntering ? '-100%' : 0 }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          className="w-1/2 h-full bg-warm-white border-r border-gold/10 flex items-center justify-end relative"
          style={{ transformOrigin: 'right' }}
        >
          {/* Subtle logo/background pattern */}
          <div className="absolute inset-0 pattern-bg opacity-[0.02]" />
        </motion.div>

        {/* Right Curtain */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isEntering ? '100%' : 0 }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          onAnimationComplete={() => {
            if (isEntering) {
              onComplete();
            }
          }}
          className="w-1/2 h-full bg-warm-white border-l border-gold/10 flex items-center justify-start relative"
          style={{ transformOrigin: 'left' }}
        >
          <div className="absolute inset-0 pattern-bg opacity-[0.02]" />
        </motion.div>

        {/* Central Seal (Gateway Card) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isEntering ? 0 : 1, 
              scale: isEntering ? 0.7 : 1 
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="pointer-events-auto bg-white border-2 border-gold/15 rounded-full w-[320px] h-[320px] md:w-[420px] md:h-[420px] shadow-[0_20px_50px_rgba(179,158,128,0.15)] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden"
          >
            {/* Inner gold border circle */}
            <div className="absolute inset-4 rounded-full border border-gold/10 pointer-events-none" />

            {/* Glowing ambient gold dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo emblem */}
              <motion.div
                initial={{ rotate: -15, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-gold mb-3"
              >
                <FaBalanceScale size={38} className="md:size-11" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-playfair text-xl md:text-2xl font-bold text-navy tracking-wider uppercase mb-1"
              >
                VN LAW FIRM
              </motion.h1>

              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="font-inter text-[9px] tracking-[0.25em] uppercase text-gold font-semibold mb-4"
              >
                Madurai
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="font-cormorant text-sm md:text-base text-navy/60 italic mb-6 max-w-[220px] md:max-w-[280px]"
              >
                "Justice with Integrity & Excellence"
              </motion.p>

              {/* CTA Button */}
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(179, 158, 128, 0.25)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-semibold text-[10px] tracking-wider uppercase rounded-lg border border-gold/20 shadow-md cursor-pointer hover:border-gold transition-all duration-300 flex items-center gap-2"
              >
                Enter Chambers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
