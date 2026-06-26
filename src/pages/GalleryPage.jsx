import { motion } from 'framer-motion';
import Gallery from '../components/sections/Gallery';

export default function GalleryPage() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-ivory border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
          >
            Our Professional Environment
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4"
          >
            Office Gallery
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
            style={{ width: '120px', transformOrigin: 'center' }}
          />
        </div>
      </section>

      <Gallery isPage />
    </div>
  );
}
