import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaUser, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import GoldButton from '../ui/GoldButton';
import { faqData, firmInfo } from '../../data/content';

const quickQuestions = [
  'What types of cases do you handle?',
  'How can I schedule a consultation?',
  'What are your consultation fees?',
  'Do you handle cases outside Madurai?',
];

export default function AIAssistant({ isPage = false }) {
  const [messages, setMessages] = useState([
    { role: 'bot', text: `Welcome to VN Law Firm's AI Legal Assistant. I can help you with general legal inquiries, FAQs, and scheduling consultations with Advocate ${firmInfo.advocate}. How may I assist you today?` }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleSend = (text) => {
    const question = text || input;
    if (!question.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const faq = faqData.find(f => 
        question.toLowerCase().includes(f.question.toLowerCase().split(' ').slice(1, 4).join(' ').toLowerCase()) ||
        f.question.toLowerCase().includes(question.toLowerCase().split(' ').slice(0, 3).join(' ').toLowerCase())
      );

      let response;
      if (faq) response = faq.answer;
      else if (question.toLowerCase().includes('consult') || question.toLowerCase().includes('book') || question.toLowerCase().includes('appointment'))
        response = `To schedule a consultation with Advocate ${firmInfo.advocate}, you can:\n\n📞 Call: ${firmInfo.phoneDisplay}\n📧 Email: ${firmInfo.email}\n💬 WhatsApp: Click the WhatsApp button\n\nOur office is at ${firmInfo.officeAddress.full}.`;
      else if (question.toLowerCase().includes('fee') || question.toLowerCase().includes('cost'))
        response = 'Our consultation fees vary based on the nature of the case. Contact us at ' + firmInfo.phoneDisplay + ' for specifics. We believe in transparent billing.';
      else
        response = `Thank you for your inquiry. For detailed legal advice, I recommend scheduling a consultation with Advocate ${firmInfo.advocate}. Reach us at ${firmInfo.phoneDisplay}.`;

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setTyping(false);
    }, 1500);
  };

  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg" />
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {!isPage && <SectionHeading title="AI Legal Assistant" subtitle="Smart Legal Guidance" />}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chat */}
          <ScrollReveal animation="fadeLeft">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(44,53,46,0.04)]">
              {/* Header */}
              <div className="bg-navy px-6 py-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <FaRobot className="text-navy" size={18} />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-navy" />
                </div>
                <div>
                  <p className="font-playfair font-bold text-ivory text-sm">VN Legal AI</p>
                  <p className="font-inter text-xs text-green-400">Online • Ready to assist</p>
                </div>
              </div>

              {/* Messages */}
              <div ref={chatRef} className="h-80 overflow-y-auto px-6 py-4 space-y-4 scrollbar-thin bg-ivory/50">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'bot' ? 'bg-gold/10 border border-gold/20' : 'bg-navy/10'
                    }`}>
                      {msg.role === 'bot' ? <FaRobot className="text-gold" size={14} /> : <FaUser className="text-navy" size={14} />}
                    </div>
                    <div className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      msg.role === 'bot' ? 'bg-white border border-gray-100 text-navy/80 rounded-tl-sm shadow-sm' : 'bg-navy text-ivory rounded-tr-sm'
                    }`}>
                      <p className="font-inter text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
                {typing && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <FaRobot className="text-gold" size={14} />
                    </div>
                    <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                      <div className="flex gap-1.5">
                        {[0, 1, 2].map(i => (
                          <span key={i} className="w-2 h-2 bg-gold/40 rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Quick Questions */}
              <div className="px-6 py-2 flex gap-2 overflow-x-auto scrollbar-none bg-white border-t border-gray-50">
                {quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => handleSend(q)} className="flex-shrink-0 px-3 py-1.5 rounded-full bg-gold/8 border border-gold/15 text-xs font-inter text-gold hover:bg-gold/15 transition-all whitespace-nowrap">
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="px-6 py-4 border-t border-gray-100 bg-white">
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-3">
                  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask a legal question..."
                    className="flex-1 px-5 py-4 rounded-xl bg-ivory border border-silver/50 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-sage focus:ring-4 focus:ring-sage/10 transition-all duration-300"
                  />
                  <button type="submit" className="px-5 py-4 rounded-xl bg-gradient-to-r from-terracotta to-dusk-pink text-white hover:shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer">
                    <FaPaperPlane size={16} />
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal animation="fadeRight">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {faqData.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gold/15 transition-all">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left group">
                      <span className="font-inter text-sm font-medium text-navy group-hover:text-gold transition-colors pr-4">{faq.question}</span>
                      {openFaq === i ? <FaChevronUp className="text-gold flex-shrink-0" size={12} /> : <FaChevronDown className="text-navy/30 flex-shrink-0" size={12} />}
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <div className="px-6 pb-4">
                            <p className="font-inter text-sm text-navy/55 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-navy rounded-2xl border border-gold/10">
                <p className="font-cormorant text-lg text-ivory mb-4">
                  Need personalized legal advice? Schedule a consultation with Advocate {firmInfo.advocate}.
                </p>
                <Link to="/contact">
                  <GoldButton size="sm">
                    <FaCalendarAlt size={14} />
                    Schedule Consultation
                  </GoldButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
