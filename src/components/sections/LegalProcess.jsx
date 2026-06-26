import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaDoorOpen, FaFileSignature, FaUserFriends } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const consultationSchedule = [
  {
    day: 'Monday',
    time: '10:00 AM - 12:00 PM',
    type: 'Initial Consultation',
    area: 'Property & Land Disputes',
    room: 'Chamber A (Private Garden View)',
    prerequisites: 'Please bring original property deeds, parent documents, tax receipts, and any survey or boundary notices.',
    slots: '2 slots left',
    status: 'available'
  },
  {
    day: 'Tuesday',
    time: '02:00 PM - 04:00 PM',
    type: 'Case Evaluation',
    area: 'Civil Litigation & Contracts',
    room: 'Chamber B (Advocate Library)',
    prerequisites: 'Please bring copies of contracts, prior notices, related agreements, and a written timeline of dispute events.',
    slots: '1 slot left',
    status: 'warning'
  },
  {
    day: 'Wednesday',
    time: '11:00 AM - 01:00 PM',
    type: 'Strategy Session',
    area: 'Government & Administrative',
    room: 'Chamber A (Private Garden View)',
    prerequisites: 'Please bring employment/service records, representations submitted, and any department communications.',
    slots: '3 slots left',
    status: 'available'
  },
  {
    day: 'Thursday',
    time: '04:00 PM - 06:00 PM',
    type: 'Criminal Defense Assessment',
    area: 'Defense & Bail Proceedings',
    room: 'Chamber B (Advocate Library)',
    prerequisites: 'Please bring a copy of the FIR, charge sheet, remand documents, and details of any prior bail requests.',
    slots: 'Fully Booked',
    status: 'booked'
  },
  {
    day: 'Friday',
    time: '09:30 AM - 11:30 AM',
    type: 'Document Verification',
    area: 'Agreements, Deeds & Wills',
    room: 'Chamber A (Private Garden View)',
    prerequisites: 'Please bring initial drafts, legal heir certificates, death certificates (if applicable), and list of property assets.',
    slots: '2 slots left',
    status: 'available'
  },
  {
    day: 'Saturday',
    time: '10:00 AM - 01:00 PM',
    type: 'Family Advisory & Mediation',
    area: 'Matrimonial & Guardianship',
    room: 'Chamber B (Advocate Library)',
    prerequisites: 'Please bring marriage registration certificates, copy of any prior filings, and identity proofs.',
    slots: '1 slot left',
    status: 'warning'
  }
];

export default function LegalProcess() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="process" className="scroll-mt-[110px] pt-10 pb-20 md:pb-24 lg:pb-28 bg-cream/10 relative overflow-hidden border-t border-silver/30">
      <div className="absolute inset-0 pattern-bg opacity-[0.03]" />
      <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-sage/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title="Consultation Schedule" subtitle="Weekly Operations & Availability" />

        <div className="text-center mt-10 mb-10 max-w-[700px] mx-auto">
          <p className="font-inter text-sm text-text-secondary/80 leading-relaxed font-light">
            We value your time and seek to provide a calm, dedicated experience. Explore our weekly schedule to request a session. Click a row to check chamber details and document prerequisites.
          </p>
        </div>

        {/* Schedule Calendar View */}
        <ScrollReveal animation="fadeUp" className="max-w-7xl mx-auto w-full">
          <div className="bg-white/80 backdrop-blur-sm border border-silver/50 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(44,53,46,0.04)]">
            
            {/* Header row for desktop */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-8 py-5 border-b border-silver/40 bg-cream/20 font-inter text-xs text-text-secondary uppercase tracking-widest font-bold">
              <div className="col-span-3">Day & Time</div>
              <div className="col-span-4">Session & Practice Area</div>
              <div className="col-span-3">Availability</div>
              <div className="col-span-2 text-right">Details</div>
            </div>

            {/* Schedule Rows */}
            <div className="divide-y divide-silver/20">
              {consultationSchedule.map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                
                // Status styles for slots availability
                let statusBadge = '';
                if (item.status === 'available') {
                  statusBadge = 'bg-sage/10 text-text-primary border border-sage/20';
                } else if (item.status === 'warning') {
                  statusBadge = 'bg-terracotta/10 text-terracotta border border-terracotta/20';
                } else {
                  statusBadge = 'bg-gray-100 text-gray-400 border border-gray-200';
                }

                return (
                  <div key={idx} className={`transition-all duration-300 ${isExpanded ? 'bg-cream/10' : 'hover:bg-cream/5'}`}>
                    
                    {/* Main Row */}
                    <div 
                      onClick={() => toggleExpand(idx)}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 px-6 lg:px-8 py-5 items-center cursor-pointer select-none"
                    >
                      {/* Day & Time */}
                      <div className="col-span-1 lg:col-span-3 flex flex-col justify-center">
                        <span className="font-playfair text-base sm:text-lg font-semibold text-navy leading-tight">{item.day}</span>
                        <span className="font-inter text-xs text-text-secondary mt-0.5 font-light">{item.time}</span>
                      </div>

                      {/* Session Type & Focus Area */}
                      <div className="col-span-1 lg:col-span-4 flex flex-col justify-center">
                        <span className="font-inter text-sm font-medium text-text-primary">{item.type}</span>
                        <span className="font-inter text-xs text-text-secondary mt-0.5 font-light">{item.area}</span>
                      </div>

                      {/* Seat/Slot Availability */}
                      <div className="col-span-1 lg:col-span-3 flex items-center">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-inter font-medium ${statusBadge}`}>
                          <FaUserFriends className="mr-1.5 size-3" />
                          {item.slots}
                        </span>
                      </div>

                      {/* Expand Chevron Icon */}
                      <div className="col-span-1 lg:col-span-2 flex justify-between lg:justify-end items-center mt-2 lg:mt-0">
                        <span className="lg:hidden font-inter text-xs text-text-secondary/70">Click to view details</span>
                        <span className="p-1 rounded-full bg-cream/25 border border-silver/20 text-text-secondary group-hover:text-terracotta transition-colors duration-300">
                          {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                        </span>
                      </div>
                    </div>

                    {/* Expandable Content Area */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden bg-cream/5 border-t border-silver/10"
                        >
                          <div className="px-6 lg:px-8 py-5 grid lg:grid-cols-2 gap-6 text-sm font-inter">
                            {/* Chamber Room Details */}
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 mt-0.5 text-sage">
                                <FaDoorOpen size={16} />
                              </div>
                              <div>
                                <h5 className="font-inter text-xs uppercase tracking-wider text-text-secondary font-bold mb-1">Chamber Room</h5>
                                <p className="text-text-primary text-sm leading-relaxed font-light">{item.room}</p>
                                <p className="text-text-secondary/60 text-xs mt-1.5 leading-relaxed font-light">
                                  Conducted in a private, quiet space featuring soft lighting and comfortable seating designed to discuss sensitive legal matters without stress.
                                </p>
                              </div>
                            </div>

                            {/* Document Prerequisites */}
                            <div className="flex gap-3">
                              <div className="flex-shrink-0 mt-0.5 text-terracotta">
                                <FaFileSignature size={16} />
                              </div>
                              <div>
                                <h5 className="font-inter text-xs uppercase tracking-wider text-text-secondary font-bold mb-1">Prerequisites & Preparation</h5>
                                <p className="text-text-primary text-sm leading-relaxed font-light">{item.prerequisites}</p>
                                <p className="text-text-secondary/60 text-xs mt-1.5 leading-relaxed font-light">
                                  Preparing these documents helps Advocate V. Nagendran evaluate your case structure and provide strategic guidance during the session.
                                </p>
                              </div>
                            </div>

                            {/* Booking Action */}
                            <div className="lg:col-span-2 pt-2 flex justify-center">
                              <a 
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-2 border border-terracotta text-terracotta hover:bg-terracotta hover:text-white rounded-lg font-inter text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                              >
                                Request This Consultation Slot
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

