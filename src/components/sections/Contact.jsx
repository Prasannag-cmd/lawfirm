import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaCheckCircle, FaEnvelopeOpen, FaPhoneAlt } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import GoldButton from '../ui/GoldButton';
import { firmInfo } from '../../data/content';

const caseTypes = [
  'Civil Litigation', 'Criminal Defense', 'Property Disputes', 'Family Law',
  'Divorce Matters', 'Consumer Protection', 'Documentation', 'Legal Consultation',
  'Corporate Advisory', 'Government Matters', 'Other'
];

export default function Contact({ isPage = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', caseType: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.phone.trim()) errs.phone = 'Phone is required';
    else if (!/^[\d+\-\s()]{10,}$/.test(formData.phone)) errs.phone = 'Invalid phone number';
    if (!formData.caseType) errs.caseType = 'Please select a case type';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => { 
        setSubmitted(false); 
        setFormData({ name: '', email: '', phone: '', caseType: '', message: '' }); 
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const whatsappUrl = `https://wa.me/919003617313?text=${encodeURIComponent(firmInfo.whatsappMessage)}`;
  const inputClass = "w-full px-5 py-4 rounded-xl bg-white border border-silver/50 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-sage focus:ring-4 focus:ring-sage/10 transition-all duration-300";

  return (
    <section id="contact" className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white relative overflow-hidden border-t border-silver/30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {!isPage && <SectionHeading title="Consultation Request" subtitle="First Consultation Free" />}

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal animation="fadeLeft" className="lg:col-span-3">
            <div className="bg-cream/20 border border-silver/50 rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(44,53,46,0.04)] backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="font-playfair text-2xl sm:text-3xl text-navy font-semibold mb-2">Book Your Strategy Session</h3>
                <p className="font-inter text-sm text-text-secondary font-light">
                  Your first 30-minute introductory consultation is completely free. We will outline a legal approach tailored to your specific matter in full confidentiality.
                </p>
              </div>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <FaCheckCircle className="text-sage mx-auto mb-4" size={48} />
                  <h3 className="font-playfair text-2xl font-bold text-navy mb-2">Request Submitted</h3>
                  <p className="font-inter text-text-secondary max-w-md mx-auto font-light">
                    Thank you. We have received your consultation request and will call/email you shortly to confirm your slot on the schedule.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name"
                        className={`${inputClass} ${errors.name ? 'border-red-400' : 'border-silver/45'}`} />
                      {errors.name && <p className="mt-1 text-xs text-red-500 font-light">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address"
                        className={`${inputClass} ${errors.email ? 'border-red-400' : 'border-silver/45'}`} />
                      {errors.email && <p className="mt-1 text-xs text-red-500 font-light">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your contact number"
                        className={`${inputClass} ${errors.phone ? 'border-red-400' : 'border-silver/45'}`} />
                      {errors.phone && <p className="mt-1 text-xs text-red-500 font-light">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block font-inter text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">Practice Area / Case Type *</label>
                      <select name="caseType" value={formData.caseType} onChange={handleChange}
                        className={`${inputClass} ${errors.caseType ? 'border-red-400' : 'border-silver/45'}`}>
                        <option value="">Select consultation type</option>
                        {caseTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.caseType && <p className="mt-1 text-xs text-red-500 font-light">{errors.caseType}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block font-inter text-xs text-text-secondary uppercase tracking-widest mb-2 font-medium">Brief Description of Matter *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Please provide general context of your case so we can assign the right chamber and prep materials..."
                      rows={4} className={`${inputClass} resize-none ${errors.message ? 'border-red-400' : 'border-silver/45'}`} />
                    {errors.message && <p className="mt-1 text-xs text-red-500 font-light">{errors.message}</p>}
                  </div>
                  
                  <GoldButton type="submit" className="w-full justify-center">
                    Book Free Consultation
                  </GoldButton>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal animation="fadeRight" className="lg:col-span-2 h-full">
            <div className="h-full flex flex-col justify-between gap-6">
              <div className="bg-cream/15 border border-silver/50 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(44,53,46,0.04)]">
                <h3 className="font-playfair text-xl font-semibold text-navy mb-6">
                  VN Law Firm
                  <span className="block w-8 h-[2px] bg-terracotta mt-2" />
                </h3>
                <div className="space-y-6">
                  <a href={`tel:${firmInfo.phone}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-sage/10 border border-sage/15 flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-all">
                      <FaPhoneAlt className="text-sage" size={14} />
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-text-secondary uppercase tracking-widest font-semibold">Phone</p>
                      <p className="font-inter text-sm text-text-primary group-hover:text-terracotta transition-colors font-medium mt-0.5">{firmInfo.phoneDisplay}</p>
                    </div>
                  </a>
                  <a href={`mailto:${firmInfo.email}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-sage/10 border border-sage/15 flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-all">
                      <FaEnvelopeOpen className="text-sage" size={14} />
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-text-secondary uppercase tracking-widest font-semibold">Email</p>
                      <p className="font-inter text-sm text-text-primary group-hover:text-terracotta transition-colors mt-0.5">{firmInfo.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sage/10 border border-sage/15 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-sage" size={14} />
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-text-secondary uppercase tracking-widest font-semibold">Office Address</p>
                      <p className="font-inter text-sm text-text-primary mt-0.5 leading-relaxed font-light">
                        {firmInfo.officeAddress.line1}<br />
                        {firmInfo.officeAddress.line2}<br />
                        {firmInfo.officeAddress.city}, {firmInfo.officeAddress.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sage/10 border border-sage/15 flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-sage" size={14} />
                    </div>
                    <div>
                      <p className="font-inter text-[10px] text-text-secondary uppercase tracking-widest font-semibold">Working Hours</p>
                      <p className="font-inter text-sm text-text-primary mt-0.5 font-light">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="font-inter text-xs text-text-secondary/75 mt-0.5 italic font-light">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3">
                <a href={`tel:${firmInfo.phone}`} className="flex flex-col items-center gap-2 px-4 py-4 bg-white/70 border border-silver/50 rounded-2xl hover:border-sage hover:bg-white hover:shadow-sm transition-all duration-300">
                  <FaPhoneAlt className="text-terracotta" size={16} />
                  <span className="font-inter text-[10px] uppercase tracking-wider text-text-secondary mt-0.5">Call</span>
                </a>
                <a href={`mailto:${firmInfo.email}`} className="flex flex-col items-center gap-2 px-4 py-4 bg-white/70 border border-silver/50 rounded-2xl hover:border-sage hover:bg-white hover:shadow-sm transition-all duration-300">
                  <FaEnvelopeOpen className="text-terracotta" size={16} />
                  <span className="font-inter text-[10px] uppercase tracking-wider text-text-secondary mt-0.5">Email</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-4 py-4 bg-white/70 border border-silver/50 rounded-2xl hover:border-sage hover:bg-white hover:shadow-sm transition-all duration-300">
                  <FaWhatsapp className="text-emerald-600" size={18} />
                  <span className="font-inter text-[10px] uppercase tracking-wider text-text-secondary mt-0.5">WhatsApp</span>
                </a>
              </div>

              {/* Map with shallow curves */}
              <div className="rounded-[24px] overflow-hidden border border-silver/50 shadow-[0_4px_20px_rgba(138,154,134,0.02)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2!2d78.12!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sK.K.+Nagar%2C+Madurai!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="200" style={{ border: 0 }}
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="VN Law Firm Location"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

