import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/content';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  return (
    <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-warm-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <SectionHeading title="Client Testimonials" subtitle="What Our Clients Say" />

        <div className="px-0 sm:px-8 lg:px-12">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="testimonials-swiper !pb-16 px-4 md:px-8 lg:px-12"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white border border-silver rounded-2xl p-8 h-full shadow-[0_4px_20px_rgba(44,53,46,0.03)] group relative overflow-hidden hover:border-sage/40 hover:shadow-[0_12px_30px_rgba(44,53,46,0.06)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold/5 to-transparent pointer-events-none" />

                  <FaQuoteLeft className="text-gold mb-4" size={24} />

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <FaStar key={i} className="text-gold-light" size={14} />
                    ))}
                  </div>

                  <p className="font-cormorant text-lg text-text-secondary leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-silver">
                  <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shadow-inner">
                    <span className="font-playfair text-lg font-bold text-gold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-playfair font-bold text-navy">{testimonial.name}</p>
                    <p className="font-inter text-xs text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
}
