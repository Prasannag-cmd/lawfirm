import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBalanceScale, FaLandmark, FaGavel, FaHandshake, FaAward, FaArrowRight, FaUniversity } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import GoldButton from '../ui/GoldButton';
import TypingQuote from '../ui/TypingQuote';
import { firmInfo } from '../../data/content';

const highlights = [
  { icon: FaBalanceScale, label: 'Expert Litigation', value: '25+ Years' },
  { icon: FaLandmark, label: 'Government Service', value: 'District Leader' },
  { icon: FaGavel, label: 'Court Experience', value: 'All Courts' },
  { icon: FaHandshake, label: 'Client Focus', value: '98% Satisfaction' },
  { icon: FaAward, label: 'Professional Ethics', value: 'Bar Council' },
  { icon: FaUniversity, label: 'High Court', value: 'Madurai Bench' },
];

export default function About() {
  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white relative overflow-hidden">
      {/* Background accents in terracotta/sage */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title="About the Advocate" subtitle="A Legacy of Legal Excellence" />
 
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image with Ken Burns zoom on hover */}
          <ScrollReveal animation="fadeLeft">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(44,53,46,0.04)] border border-silver/50 bg-cream/10 ken-burns-container">
                <img src="/images/advocate.jpg" alt="Advocate V. Nagendran" className="w-full h-auto object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/10 to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-sage/25 rounded-3xl -z-10" />
              
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white border border-silver/50 rounded-2xl px-6 py-4 shadow-sm"
              >
                <p className="font-playfair text-3xl font-bold text-gold">25+</p>
                <p className="font-inter text-xs text-text-secondary uppercase tracking-wider">Years of<br/>Excellence</p>
              </motion.div>
            </div>
          </ScrollReveal>
 
          {/* Content */}
          <ScrollReveal animation="fadeRight">
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-2">{firmInfo.advocate}</h3>
              <p className="font-inter text-xs text-gold tracking-[0.2em] uppercase mb-6 font-semibold">{firmInfo.designation} • {firmInfo.district}</p>
              
              <div className="space-y-6 mb-8">
                <p className="font-inter text-base text-text-secondary leading-relaxed font-light">
                  VN Law Firm is led by Advocate V. Nagendran, a respected legal professional and Former Additional Government Leader of Madurai District. With years of experience in legal practice and public service, he has built a reputation for delivering reliable legal counsel and effective representation.
                </p>
                
                {/* Character-by-character typing quote on hover */}
                <TypingQuote 
                  quote="Justice Through Experience, Integrity, and Commitment."
                  author={firmInfo.advocate}
                  designation="Former Additional Government Leader"
                />
                
                <p className="font-inter text-sm text-text-secondary/80 leading-relaxed font-light mt-4">
                  The firm is dedicated to offering personalized legal solutions tailored to the unique circumstances of every client. Whether handling litigation, legal documentation, advisory services, or dispute resolution, VN Law Firm approaches each matter with professionalism and attention to detail.
                </p>
              </div>
 
              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {highlights.map(({ icon: Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="bg-cream/20 border border-silver/50 rounded-2xl px-4 py-4 text-center hover:border-sage hover:bg-cream/40 transition-all duration-300"
                  >
                    <Icon className="text-sage mx-auto mb-2" size={20} />
                    <p className="font-playfair text-sm font-semibold text-navy">{value}</p>
                    <p className="font-inter text-[10px] text-text-secondary mt-1">{label}</p>
                  </motion.div>
                ))}
              </div>

              <Link to="/about">
                <GoldButton variant="outline" size="md">
                  Full Profile <FaArrowRight size={12} />
                </GoldButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

