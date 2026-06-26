import { motion } from 'framer-motion';
import { FaTrophy, FaCheckCircle, FaSmile, FaComments } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import AnimatedCounter from '../ui/AnimatedCounter';
import ScrollReveal from '../ui/ScrollReveal';
import { statistics } from '../../data/content';

const icons = [FaTrophy, FaCheckCircle, FaSmile, FaComments];

const reasons = [
  { title: 'Former Government Leader', description: 'Unique advantage of government legal experience providing deep institutional knowledge and courtroom authority.' },
  { title: 'Proven Track Record', description: 'Over 5,000 successfully resolved cases spanning civil, criminal, corporate, and family law domains.' },
  { title: 'Client-Centric Approach', description: 'Personalized legal strategies tailored to each client\'s specific needs with transparent communication.' },
  { title: 'Comprehensive Expertise', description: 'Full-spectrum legal services from initial consultation through final resolution under one trusted firm.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white relative overflow-hidden border-t border-gold/10">
      <div className="absolute inset-0 pattern-bg opacity-[0.03]" />
      <div className="absolute top-[20%] right-[5%] w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <SectionHeading title="Why Choose VN Law Firm" subtitle="Trusted Legal Partner" />

        {/* Statistics Section (High-Contrast Navy Blue Block) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-navy border border-gold/20 rounded-3xl p-8 md:p-12 text-center mb-20 shadow-[0_8px_30px_rgba(44,53,46,0.04)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />
          {statistics.map((stat, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="relative group">
                  <Icon className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-2 font-playfair">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-inter text-xs sm:text-sm text-white/80 tracking-wider uppercase font-semibold">{stat.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.1} animation={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}>
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="font-playfair text-xl font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">{reason.title}</h4>
                  <p className="font-inter text-sm text-navy/70 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
