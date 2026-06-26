import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import { practiceAreas } from '../../data/content';

export default function PracticeAreas() {
  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white relative overflow-hidden">
      {/* Soft natural noise grid pattern */}
      <div className="absolute inset-0 pattern-bg opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title="Practice Areas" subtitle="Comprehensive Legal Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.04, duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-silver/45 p-8 flex flex-col items-center text-center group cursor-pointer shadow-[0_4px_20px_rgba(44,53,46,0.03)] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(44,53,46,0.06)] hover:border-sage/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Sage Glow Top-Right Subtle effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-sage/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Centered Icon Top */}
                <div className="w-16 h-16 rounded-2xl bg-sage/10 border border-sage/15 flex items-center justify-center mb-5 group-hover:bg-sage group-hover:shadow-[0_0_15px_rgba(138,154,134,0.25)] transition-all duration-300">
                  <Icon className="text-terracotta group-hover:text-white transition-colors duration-300" size={24} />
                </div>

                {/* Title Center */}
                <h3 className="font-playfair text-lg font-semibold text-navy mb-3 group-hover:text-terracotta transition-colors duration-300 leading-snug">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[240px] font-light">
                  {area.description}
                </p>

                {/* Bottom Sage Underline Sweep Hover Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-sage scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium text-gold hover:text-navy transition-colors duration-300 group"
          >
            View All Practice Areas
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

