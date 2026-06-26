// VN Law Firm — Content Data
import { 
  FaBalanceScale, FaGavel, FaHome, FaUsers, FaHeart, 
  FaShieldAlt, FaFileContract, FaHandshake, FaBuilding, FaLandmark
} from 'react-icons/fa';

export const firmInfo = {
  name: 'VN Law Firm',
  advocate: 'V. Nagendran',
  designation: 'Former Additional Government Leader',
  district: 'Madurai District',
  tagline: 'Professional legal representation with integrity, expertise, and commitment.',
  phone: '+91 9003617313',
  phoneDisplay: '+91 9003 617 313',
  email: 'nagendrenlr80@gmail.com',
  whatsappMessage: 'Hello VN Law Firm, I would like to schedule a consultation.',
  officeAddress: {
    line1: 'No.24, East 2nd Street',
    line2: 'K.K. Nagar',
    city: 'Madurai',
    state: 'Tamil Nadu',
    country: 'India',
    full: 'No.24, East 2nd Street, K.K. Nagar, Madurai, Tamil Nadu, India'
  },
  residenceAddress: {
    line1: 'Plot No. 63 & 64, Suns Abode',
    line2: 'Sri Ram Gardens, S. Kodikulam',
    line3: 'K. Pudur',
    city: 'Madurai – 625007',
    state: 'Tamil Nadu',
    country: 'India'
  }
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Contact', href: '#contact' },
];

export const practiceAreas = [
  {
    icon: FaBalanceScale,
    title: 'Civil Litigation',
    description: 'Expert representation in civil disputes, breach of contracts, damage claims, and high-stakes courtroom litigation.'
  },
  {
    icon: FaGavel,
    title: 'Criminal Law',
    description: 'Vigorous defense strategies, bail proceedings, trials, and appellate advocacy protecting your constitutional rights.'
  },
  {
    icon: FaHome,
    title: 'Property Law',
    description: 'Comprehensive legal solutions for real estate disputes, title verification, partition suits, and land acquisition.'
  },
  {
    icon: FaUsers,
    title: 'Family Law',
    description: 'Compassionate representation for matrimonial disputes, partition of family estates, child custody, and maintenance.'
  },
  {
    icon: FaShieldAlt,
    title: 'Consumer Law',
    description: 'Defending consumer rights against unfair trade practices, product liabilities, deficiency of service, and tribunal claims.'
  },
  {
    icon: FaBuilding,
    title: 'Corporate Advisory',
    description: 'Strategic counsel for businesses, legal audits, corporate compliance, business contracts, and commercial arbitration.'
  },
  {
    icon: FaLandmark,
    title: 'Government Matters',
    description: 'Specialized representation in administrative disputes, service matters, and writs with Additional Government Leader authority.'
  },
  {
    icon: FaFileContract,
    title: 'Documentation',
    description: 'Precision drafting of sale deeds, partition deeds, trust deeds, partnership agreements, wills, and corporate contracts.'
  },
  {
    icon: FaHandshake,
    title: 'Legal Consultation',
    description: 'Strategic legal counsel, risk assessments, dispute resolution advice, and advisory opinions for individuals and groups.'
  }
];

export const statistics = [
  { value: 500, suffix: '+', label: 'Cases Handled' },
  { value: 25, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 1000, suffix: '+', label: 'Consultations' }
];

export const legalProcess = [
  {
    step: 1,
    title: 'Consultation',
    description: 'Schedule an initial consultation to discuss your legal matter in complete confidentiality.'
  },
  {
    step: 2,
    title: 'Case Review',
    description: 'Thorough analysis of your case documents, evidence, and legal standing for comprehensive evaluation.'
  },
  {
    step: 3,
    title: 'Legal Strategy',
    description: 'Development of a tailored legal strategy designed to achieve the best possible outcome for your case.'
  },
  {
    step: 4,
    title: 'Documentation',
    description: 'Preparation of all necessary legal documents, filings, and court submissions with meticulous attention.'
  },
  {
    step: 5,
    title: 'Representation',
    description: 'Powerful courtroom representation and negotiation with unwavering dedication to your interests.'
  },
  {
    step: 6,
    title: 'Resolution',
    description: 'Achieving favorable resolution through litigation, mediation, or settlement with complete transparency.'
  }
];

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    text: 'Mr. Nagendran handled our complex property dispute with remarkable expertise. His deep understanding of property law and courtroom presence led to a favorable verdict. Truly a legal professional of the highest caliber.',
    rating: 5
  },
  {
    name: 'Priya Shanmugam',
    role: 'Corporate Client',
    text: 'We have relied on VN Law Firm for our corporate legal matters for over a decade. The professionalism, attention to detail, and strategic thinking have been invaluable to our business growth.',
    rating: 5
  },
  {
    name: 'Dr. Meenakshi Sundaram',
    role: 'Medical Professional',
    text: 'During a challenging consumer protection case, Mr. Nagendran\'s expertise and dedication were exceptional. His former government legal experience brought a unique advantage to our case.',
    rating: 5
  },
  {
    name: 'Arun Prakash',
    role: 'Real Estate Developer',
    text: 'Outstanding legal representation in multiple land acquisition matters. Mr. Nagendran\'s thorough documentation and court strategy resulted in successful outcomes every time.',
    rating: 5
  },
  {
    name: 'Lakshmi Narayanan',
    role: 'Government Employee',
    text: 'Mr. Nagendran\'s understanding of government legal procedures is unmatched. He resolved our service matter efficiently and professionally. Highly recommend VN Law Firm.',
    rating: 5
  },
  {
    name: 'Santhosh Vijayan',
    role: 'Family Client',
    text: 'During our family legal matter, VN Law Firm showed incredible sensitivity and professionalism. The guidance and support throughout the process made a difficult time much more manageable.',
    rating: 5
  }
];

export const aboutTimeline = [
  {
    year: 'Early Career',
    title: 'Legal Foundation',
    description: 'Established a strong foundation in legal practice with comprehensive training in civil and criminal law.'
  },
  {
    year: 'Government Service',
    title: 'Additional Government Leader',
    description: 'Served as Additional Government Leader for Madurai District, representing the state in critical legal matters.'
  },
  {
    year: 'Private Practice',
    title: 'VN Law Firm Founded',
    description: 'Founded VN Law Firm to provide premium legal services with a commitment to justice and client success.'
  },
  {
    year: 'Present',
    title: 'Continued Excellence',
    description: 'Continues to deliver exceptional legal representation across civil, criminal, and corporate domains with an ever-growing client base.'
  }
];

export const faqData = [
  {
    question: 'What types of cases does VN Law Firm handle?',
    answer: 'We handle a wide range of legal matters including civil litigation, criminal defense, property disputes, family law, divorce, consumer protection, corporate advisory, and government matters.'
  },
  {
    question: 'How can I schedule a consultation?',
    answer: 'You can schedule a consultation by calling +91 9003617313, sending an email to nagendrenlr80@gmail.com, or using the WhatsApp button on this page. We also accept walk-in consultations at our K.K. Nagar, Madurai office.'
  },
  {
    question: 'What is the consultation fee?',
    answer: 'Initial consultation fees vary based on the nature of the case. Please contact our office directly for specific fee information. We believe in transparent billing practices.'
  },
  {
    question: 'How long does a typical case take to resolve?',
    answer: 'Case duration depends on complexity, court schedules, and the nature of the dispute. During consultation, we provide realistic timelines and keep you informed throughout the process.'
  },
  {
    question: 'Does VN Law Firm handle cases outside Madurai?',
    answer: 'Yes, while our primary office is in Madurai, we represent clients across Tamil Nadu and in various High Courts and tribunals.'
  },
  {
    question: 'What documents should I bring for the first consultation?',
    answer: 'Bring all relevant documents related to your case including previous court orders, agreements, correspondence, identity proof, and any evidence that may be pertinent to your matter.'
  }
];

export const galleryImages = [
  { src: '/images/gallery/chamber.jpg', alt: 'Advocate Chamber', category: 'Office' },
  { src: '/images/gallery/office.jpg', alt: 'Office Environment', category: 'Office' },
  { src: '/images/gallery/court.jpg', alt: 'Court Proceedings', category: 'Court' },
  { src: '/images/gallery/consultation.jpg', alt: 'Client Consultation', category: 'Consultation' },
  { src: '/images/gallery/documents.jpg', alt: 'Legal Documentation', category: 'Documentation' },
  { src: '/images/gallery/team.jpg', alt: 'Legal Team', category: 'Team' },
];
