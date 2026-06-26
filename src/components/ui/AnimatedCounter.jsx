import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ value, suffix = '', duration = 2.5 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power2.out',
          onUpdate: () => setDisplay(Math.floor(obj.val))
        });
      }
    });

    return () => trigger.kill();
  }, [value, duration]);

  return (
    <span ref={ref} className="font-playfair tabular-nums">
      {display.toLocaleString()}{suffix}
    </span>
  );
}
