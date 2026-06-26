import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { firmInfo } from '../../data/content';
import ScrollReveal from '../ui/ScrollReveal';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'AI Assistant', to: '/ai-assistant' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white border-t border-gold/20 overflow-hidden">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-[70px] md:py-[90px] lg:py-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <ScrollReveal animation="fadeUp" delay={0}>
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0 border border-gold/20 shadow-md">
                  <img src="/images/logo.jpg" alt="VN Law Firm" className="h-9 w-auto" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">VN Law Firm</h3>
                  <p className="font-inter text-xs tracking-wider text-gold uppercase">Est. Madurai</p>
                </div>
              </div>
              <p className="font-cormorant text-lg text-white/70 leading-relaxed mb-6">
                Professional legal representation with integrity, expertise, and unwavering commitment to justice.
              </p>
              <p className="font-inter text-sm text-gold font-semibold">Adv. {firmInfo.advocate}</p>
              <p className="font-inter text-xs text-white/40 mt-1">{firmInfo.designation}</p>
            </div>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6 text-white">
                Quick Links
                <span className="block w-8 h-[2px] bg-gold mt-2" />
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="font-inter text-sm text-white/70 hover:text-gold hover:pl-2 transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6 text-white">
                Contact Us
                <span className="block w-8 h-[2px] bg-gold mt-2" />
              </h4>
              <div className="space-y-4">
                <a href={`tel:${firmInfo.phone}`} className="flex items-start gap-3 group">
                  <FaPhone className="text-gold mt-1 flex-shrink-0" size={14} />
                  <span className="font-inter text-sm text-white/70 group-hover:text-gold transition-colors">{firmInfo.phoneDisplay}</span>
                </a>
                <a href={`mailto:${firmInfo.email}`} className="flex items-start gap-3 group">
                  <FaEnvelope className="text-gold mt-1 flex-shrink-0" size={14} />
                  <span className="font-inter text-sm text-white/70 group-hover:text-gold transition-colors">{firmInfo.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-gold mt-1 flex-shrink-0" size={14} />
                  <span className="font-inter text-sm text-white/70">
                    {firmInfo.officeAddress.line1},<br />{firmInfo.officeAddress.line2},<br />{firmInfo.officeAddress.city}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div>
              <h4 className="font-playfair text-lg font-bold mb-6 text-white">
                Follow Us
                <span className="block w-8 h-[2px] bg-gold mt-2" />
              </h4>
              <p className="font-inter text-sm text-white/70 mb-6">Stay connected for legal updates and firm news.</p>
              <div className="flex gap-3">
                {[{ icon: FaFacebook, label: 'Facebook' }, { icon: FaLinkedin, label: 'LinkedIn' }, { icon: FaTwitter, label: 'Twitter' }, { icon: FaInstagram, label: 'Instagram' }]
                  .map(({ icon: Icon, label }) => (
                    <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-gold/20 hover:border-gold/30 hover:text-gold transition-all">
                      <Icon size={16} />
                    </a>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-xs text-white/40 text-center md:text-left">
              © {currentYear} VN Law Firm. All rights reserved. | Advocate {firmInfo.advocate}
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Disclaimer'].map(text => (
                <a key={text} href="#" className="font-inter text-xs text-white/40 hover:text-gold transition-colors">{text}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
