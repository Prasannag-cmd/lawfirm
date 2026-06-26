import { useState, useEffect } from 'react';

export default function TypingQuote({ quote, author, designation }) {
  const [displayedText, setDisplayedText] = useState(quote);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayedText(quote);
      return;
    }

    let index = 0;
    setDisplayedText('');
    
    const interval = setInterval(() => {
      if (index < quote.length) {
        setDisplayedText((prev) => prev + quote.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25); // Speed of typing (25ms per character)

    return () => clearInterval(interval);
  }, [isHovered, quote]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 sm:p-8 bg-cream/30 border border-silver/40 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-cream/50 select-none max-w-2xl mx-auto md:mx-0 shadow-sm"
    >
      {/* Decorative terracotta double-quotes */}
      <span className="absolute -top-4 -left-3 font-playfair text-6xl text-gold/30">“</span>
      
      <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-navy italic leading-relaxed pl-4 font-normal">
        {displayedText}
        <span className="animate-pulse font-sans text-gold font-light ml-0.5">|</span>
      </p>
      
      <div className="mt-4 pl-4 flex flex-col items-start">
        {author && (
          <span className="font-inter text-xs text-gold tracking-widest uppercase font-bold">
            — {author}
          </span>
        )}
        {designation && (
          <span className="font-inter text-[10px] text-text-secondary uppercase tracking-widest mt-0.5">
            {designation}
          </span>
        )}
      </div>
    </div>
  );
}
