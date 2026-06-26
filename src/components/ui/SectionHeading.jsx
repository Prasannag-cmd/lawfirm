import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center' : ''}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="inline-block font-inter text-sm tracking-[0.3em] uppercase mb-4 text-gold font-medium"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold ${
          light ? 'text-ivory' : 'text-navy'
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-6 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent ${
          center ? 'mx-auto' : ''
        }`}
        style={{ width: '120px', transformOrigin: 'center' }}
      />
    </div>
  );
}
