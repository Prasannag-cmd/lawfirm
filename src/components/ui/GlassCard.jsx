import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, gold = false }) {
  return (
    <motion.div
      className={`
        relative rounded-2xl overflow-hidden
        ${gold 
          ? 'bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 border border-gold/30' 
          : 'bg-white/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10'
        }
        backdrop-blur-xl shadow-lg
        ${className}
      `}
      whileHover={hover ? { 
        y: -8, 
        boxShadow: gold 
          ? '0 25px 50px -12px rgba(212, 175, 55, 0.25)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      } : {}}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {gold && (
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}
