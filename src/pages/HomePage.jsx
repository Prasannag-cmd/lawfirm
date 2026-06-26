import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import PracticeAreas from '../components/sections/PracticeAreas';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import LegalProcess from '../components/sections/LegalProcess';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <LegalProcess />
      <Testimonials />
      <Contact />
    </>
  );
}
