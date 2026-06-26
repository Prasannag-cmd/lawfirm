import { motion } from 'framer-motion';
import { FaBalanceScale, FaLandmark, FaGavel, FaHandshake, FaAward, FaUniversity, FaUserTie, FaBriefcase } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import ScrollReveal from '../components/ui/ScrollReveal';
import GoldButton from '../components/ui/GoldButton';
import { aboutTimeline, firmInfo } from '../data/content';

const highlights = [
  { icon: FaBalanceScale, label: 'Expert Litigation', value: '25+ Years' },
  { icon: FaLandmark, label: 'Government Service', value: 'District Leader' },
  { icon: FaGavel, label: 'Court Experience', value: 'All Courts' },
  { icon: FaHandshake, label: 'Client Focus', value: '98% Satisfaction' },
  { icon: FaAward, label: 'Professional Ethics', value: 'Bar Council' },
  { icon: FaUniversity, label: 'High Court', value: 'Represented' },
];

const expertise = [
  { icon: FaUserTie, title: 'Government Legal Leadership', desc: 'Served as Additional Government Leader for Madurai District, representing the state in critical legal matters across courts and tribunals.' },
  { icon: FaBriefcase, title: 'Comprehensive Practice', desc: 'Full-spectrum legal services from civil litigation and criminal defense to corporate advisory, property disputes, and family law.' },
  { icon: FaGavel, title: 'Courtroom Excellence', desc: 'Known for meticulous preparation, powerful courtroom advocacy, and a deep understanding of procedural and substantive law.' },
  { icon: FaHandshake, title: 'Client-Centric Approach', desc: 'Every case receives personal attention with transparent communication, realistic assessments, and dedicated representation.' },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-ivory border-b border-gold/10 overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold"
          >
            Distinguished Legal Career
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4"
          >
            About the Advocate
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
            style={{ width: '120px', transformOrigin: 'center' }}
          />
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Image Column */}
            <ScrollReveal animation="fadeLeft" className="lg:col-span-2">
              <div className="relative sticky top-28">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/10">
                  <img
                    src="/images/advocate.jpg"
                    alt="Advocate V. Nagendran"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                </div>
                {/* Decorative */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/20 rounded-3xl -z-10" />

                {/* Name card */}
                <div className="mt-6 bg-white rounded-2xl border border-gold/10 p-6 shadow-lg shadow-navy/5">
                  <h3 className="font-playfair text-xl font-bold text-navy">{firmInfo.advocate}</h3>
                  <p className="font-inter text-sm text-gold mt-1">{firmInfo.designation}</p>
                  <p className="font-inter text-xs text-navy/50 mt-0.5">{firmInfo.district}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <GoldButton href="/contact" size="sm" className="w-full justify-center">
                      Schedule Consultation
                    </GoldButton>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Column */}
            <ScrollReveal animation="fadeRight" className="lg:col-span-3">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
                  A Legacy of Legal Excellence in Madurai
                </h2>

                <div className="space-y-5 mb-10">
                  <p className="font-cormorant text-xl text-navy/70 leading-relaxed">
                    With over 25 years of distinguished legal practice, Advocate V. Nagendran stands as a pillar of legal excellence in Madurai. His tenure as Former Additional Government Leader for Madurai District has endowed him with unparalleled insight into government legal procedures and administrative law.
                  </p>
                  <p className="font-inter text-base text-navy/60 leading-relaxed">
                    Mr. Nagendran's practice encompasses a comprehensive range of legal services, from complex civil litigation and criminal defense to property disputes and corporate advisory. His approach combines deep legal knowledge with genuine concern for each client's well-being, ensuring that every case receives the attention it deserves.
                  </p>
                  <p className="font-inter text-base text-navy/60 leading-relaxed">
                    Known for his meticulous preparation, powerful courtroom advocacy, and unwavering commitment to justice, he has successfully represented thousands of clients across all levels of the judiciary. His former government service gives him a unique perspective that benefits every client.
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                  {highlights.map(({ icon: Icon, label, value }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i, duration: 0.5 }}
                      className="bg-ivory border border-gold/10 rounded-2xl px-4 py-4 text-center hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
                    >
                      <Icon className="text-gold mx-auto mb-2" size={22} />
                      <p className="font-playfair text-sm font-bold text-navy">{value}</p>
                      <p className="font-inter text-[11px] text-navy/40 mt-1">{label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Expertise */}
                <h3 className="font-playfair text-2xl font-bold text-navy mb-6 gold-underline inline-block">
                  Areas of Expertise
                </h3>
                <div className="grid sm:grid-cols-2 gap-5 mt-8">
                  {expertise.map(({ icon: Icon, title, desc }, i) => (
                    <ScrollReveal key={title} delay={i * 0.1}>
                      <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gold/20 hover:shadow-lg transition-all duration-300 group h-full">
                        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                          <Icon className="text-gold" size={20} />
                        </div>
                        <h4 className="font-playfair text-lg font-bold text-navy mb-2">{title}</h4>
                        <p className="font-inter text-sm text-navy/55 leading-relaxed">{desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-ivory">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <SectionHeading title="Professional Journey" subtitle="Career Timeline" />

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/40 to-gold/10 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-gold/40 to-gold/10 md:hidden" />

            {aboutTimeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={`relative flex items-center gap-8 mb-14 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gold border-4 border-ivory z-10 shadow-lg shadow-gold/20" />
                  
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'
                  }`}>
                    <span className="inline-block font-inter text-xs tracking-[0.2em] uppercase text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-3 font-medium">
                      {item.year}
                    </span>
                    <h4 className="font-playfair text-xl font-bold text-navy mb-2">{item.title}</h4>
                    <p className="font-inter text-sm text-navy/55 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
