import { motion } from 'framer-motion';

export default function GoldButton({ children, href, onClick, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseClasses = 'relative inline-flex items-center justify-center font-inter font-semibold tracking-wide uppercase overflow-hidden transition-all duration-500 group rounded-lg cursor-pointer';
  
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-terracotta to-dusk-pink text-white shadow-sm hover:shadow-md hover:from-terracotta/95 hover:to-dusk-pink/95',
    outline: 'bg-transparent border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white',
    ghost: 'bg-white/10 backdrop-blur-sm border border-white/20 text-navy hover:bg-white/20'
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href?.startsWith('http') || href?.startsWith('https') ? '_blank' : undefined}
      rel={href?.startsWith('http') || href?.startsWith('https') ? 'noopener noreferrer' : undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Component>
  );
}

