import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import GlassCard from '../components/ui/GlassCard';
import { practiceAreas } from '../data/content';

export default function PracticeAreasPage() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-ivory border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
          >
            Comprehensive Legal Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4"
          >
            Practice Areas
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

      {/* Practice Areas Grid */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-sage/40 shadow-[0_4px_20px_rgba(44,53,46,0.03)] hover:shadow-[0_12px_30px_rgba(44,53,46,0.06)] transition-all duration-500 group relative overflow-hidden">
                    {/* Gold corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/10 flex items-center justify-center mb-6 group-hover:from-gold/20 group-hover:to-gold/10 transition-all duration-500">
                      <Icon className="text-gold" size={28} />
                    </div>

                    <h3 className="font-playfair text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                      {area.title}
                    </h3>

                    <p className="font-inter text-sm text-navy/55 leading-relaxed mb-6">
                      {area.description}
                    </p>

                    <div className="flex items-center gap-2 text-gold font-inter text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span>Learn More</span>
                      <span>→</span>
                    </div>

                    <div className="mt-4 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white border border-gold/15 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-[0_8px_30px_rgba(44,53,46,0.04)]">
              <div className="absolute inset-0 pattern-bg opacity-[0.03]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px]" />
              <div className="relative">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-4">
                  Need Legal Assistance?
                </h3>
                <p className="font-inter text-navy/60 mb-8 max-w-lg mx-auto">
                  Contact VN Law Firm for expert legal consultation tailored to your specific requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold to-gold-light text-navy font-inter font-semibold text-sm uppercase tracking-wider rounded hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
