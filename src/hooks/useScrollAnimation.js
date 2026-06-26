import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  
  const {
    animation = 'fadeUp',
    duration = 1,
    delay = 0,
    stagger = 0.1,
    start = 'top 85%',
    end = 'bottom 15%',
    markers = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations = {
      fadeUp: {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0 }
      },
      fadeDown: {
        from: { opacity: 0, y: -60 },
        to: { opacity: 1, y: 0 }
      },
      fadeLeft: {
        from: { opacity: 0, x: -60 },
        to: { opacity: 1, x: 0 }
      },
      fadeRight: {
        from: { opacity: 0, x: 60 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      },
      reveal: {
        from: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        to: { opacity: 1, clipPath: 'inset(0 0% 0 0)' }
      }
    };

    const anim = animations[animation] || animations.fadeUp;
    const children = stagger > 0 ? el.children : [el];

    gsap.fromTo(
      children.length > 0 && stagger > 0 ? children : el,
      anim.from,
      {
        ...anim.to,
        duration,
        delay,
        stagger: stagger > 0 ? stagger : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          markers,
          toggleActions: 'play none none none',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [animation, duration, delay, stagger, start, end, markers]);

  return ref;
}

export function useParallax(speed = 0.5) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      yPercent: speed * 30,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [speed]);

  return ref;
}
