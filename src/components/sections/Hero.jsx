import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';
import { firmInfo } from '../../data/content';
import GoldButton from '../ui/GoldButton';

export default function Hero() {
  const whatsappUrl = `https://wa.me/919003617313?text=${encodeURIComponent(firmInfo.whatsappMessage)}`;

  // Soft 600ms ease transition
  const softEase = { duration: 0.6, ease: [0.25, 1, 0.5, 1] };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[90px] bg-warm-white">
      {/* Background with diagonal sunbeams effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Sand and Sage subtle background blend */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, #FAF9F6 0%, #EFEBE4 60%, #E2DDD5 100%)'
          }}
        />
        
        {/* Diagonal Sunbeams - soft CSS shapes */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[140%] bg-white/40 rotate-[35deg] blur-3xl" />
        <div className="absolute top-[10%] -left-[30%] w-[50%] h-[120%] bg-white/20 rotate-[30deg] blur-2xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-[70px] md:py-[90px] lg:py-[120px] w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT (60% width on large screens) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            {/* Soft Badge: FORMER ADDITIONAL GOVERNMENT LEADER */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={softEase}
              className="inline-flex items-center px-4 py-2 rounded-full border border-sage/30 bg-white/80 backdrop-blur-sm mb-6 self-center lg:self-start shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-sage mr-2.5 animate-pulse" />
              <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-text-secondary font-bold">
                Former Additional Government Leader
              </span>
            </motion.div>

            {/* Main Heading: VN LAW FIRM */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...softEase, delay: 0.15 }}
              className="font-playfair text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-normal text-navy mb-4 leading-[1.05] tracking-tight"
            >
              VN LAW FIRM
            </motion.h1>

            {/* Subheading: Advocate V. Nagendran */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...softEase, delay: 0.3 }}
              className="font-playfair text-xl sm:text-2xl xl:text-3xl font-medium text-gold mb-6 italic"
            >
              Advocate V. Nagendran
            </motion.h2>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...softEase, delay: 0.45 }}
              className="font-inter text-base sm:text-lg text-text-secondary max-w-xl mb-3 leading-relaxed"
            >
              Trusted Legal Excellence. Proven Advocacy.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...softEase, delay: 0.55 }}
              className="font-inter text-sm sm:text-base text-text-secondary/80 max-w-lg mb-10 leading-relaxed font-light"
            >
              At VN Law Firm, we are committed to providing professional legal representation, strategic advice, and dedicated advocacy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...softEase, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* Primary: Book Consultation */}
              <GoldButton href="/contact" variant="primary" className="w-full sm:w-auto">
                <FaCalendarAlt size={14} />
                Book Consultation
              </GoldButton>
              
              {/* Secondary: WhatsApp Consultation */}
              <GoldButton href={whatsappUrl} variant="outline" className="w-full sm:w-auto">
                <FaWhatsapp className="text-emerald-600" size={16} />
                WhatsApp Consultation
              </GoldButton>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Slow-Breathing Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm sm:max-w-md flex justify-center items-center">
              
              {/* Soft Ambient Sage/Sand Glow behind Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-[20%] left-[20%] w-56 h-56 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

              {/* Breathing Image Container */}
              <div className="relative w-full px-4">
                
                {/* Visual Image container with breathing cycle & Ken Burns hover zoom */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(44,53,46,0.04)] border border-silver/50 bg-cream/20 ken-burns-container">
                  {/* Subtle breathing class applied directly to the image element */}
                  <img
                    src="/images/chamber.png"
                    alt="VN Law Firm Calm Sanctuary"
                    className="w-full h-[400px] sm:h-[480px] object-cover animate-breath"
                    loading="eager"
                  />
                  
                  {/* Elegant minimalist overlay tag */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md border border-silver/40 rounded-2xl p-5 shadow-sm text-center">
                      <p className="font-playfair text-base sm:text-lg italic text-navy font-medium">
                        "Justice Through Experience, Integrity, and Commitment."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

