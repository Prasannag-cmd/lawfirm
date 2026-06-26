import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { galleryImages } from '../../data/content';

export default function Gallery({ isPage = false }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-ivory relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {!isPage && <SectionHeading title="Office Gallery" subtitle="Our Professional Environment" />}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="break-inside-avoid inline-block w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-[0_4px_20px_rgba(44,53,46,0.03)]"
                onClick={() => setSelectedImage(image)}
              >
                <div className={`w-full ${
                  i % 3 === 0 ? 'h-72' : i % 3 === 1 ? 'h-56' : 'h-64'
                } bg-gradient-to-br ${
                  i % 6 === 0 ? 'from-navy/5 to-gold/10' :
                  i % 6 === 1 ? 'from-ivory to-gold/15' :
                  i % 6 === 2 ? 'from-gold/5 to-navy/10' :
                  i % 6 === 3 ? 'from-cream to-gold/10' :
                  i % 6 === 4 ? 'from-navy/8 to-ivory' :
                  'from-gold/10 to-cream'
                } flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 border border-gold/20 flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <span className="font-playfair text-2xl text-gold">{image.category.charAt(0)}</span>
                    </div>
                    <p className="font-inter text-sm text-navy/60">{image.alt}</p>
                    <p className="font-inter text-xs text-gold mt-1">{image.category}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="text-center">
                    <FaSearchPlus className="text-gold mx-auto mb-2" size={24} />
                    <p className="font-inter text-sm text-ivory">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white border border-gold/15 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-[60vh] bg-gradient-to-br from-ivory to-gold/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-playfair text-4xl text-gold">{selectedImage.category.charAt(0)}</span>
                  </div>
                  <p className="font-playfair text-2xl text-navy mb-2">{selectedImage.alt}</p>
                  <p className="font-inter text-sm text-gold">{selectedImage.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy/80 text-ivory hover:text-gold flex items-center justify-center transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
