import { motion } from 'framer-motion';
import Contact from '../components/sections/Contact';

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-ivory border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
            style={{ width: '120px', transformOrigin: 'center' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-inter text-navy/60 mt-4 max-w-lg mx-auto"
          >
            Reach out for expert legal consultation. We're here to help with your legal matters.
          </motion.p>
        </div>
      </section>

      <Contact isPage />
    </div>
  );
}
