import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/content';

export default function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/919003617313?text=${encodeURIComponent(firmInfo.whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-[90] group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
      <span className="absolute -inset-1 rounded-full bg-green-500/20 animate-pulse" />
      
      {/* Button */}
      <motion.div
        className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-white" size={28} />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-navy/95 backdrop-blur-sm text-ivory text-sm font-inter rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-navy/95 rotate-45" />
      </div>
    </motion.a>
  );
}
