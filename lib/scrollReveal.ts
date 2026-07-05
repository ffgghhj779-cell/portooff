import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MOTION } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  start?: string;
  scrub?: number | false;
  stagger?: number;
};

export function revealUp(
  targets: gsap.DOMTarget,
  options: RevealOptions = {}
) {
  const { start = 'top 88%', scrub = false, stagger = 0 } = options;

  return gsap.from(targets, {
    y: 56,
    opacity: 0,
    duration: scrub ? 1 : MOTION.reveal,
    stagger,
    ease: MOTION.revealEase,
    scrollTrigger: {
      trigger: targets,
      start,
      end: scrub ? 'top 50%' : undefined,
      scrub: scrub || false,
      toggleActions: scrub ? undefined : 'play none none none',
    },
  });
}

export function revealLines(
  scope: HTMLElement,
  selector = '[data-reveal-line]'
) {
  const lines = gsap.utils.toArray<HTMLElement>(selector, scope);
  if (!lines.length) return;

  lines.forEach((line) => {
    gsap.from(line, {
      yPercent: 110,
      opacity: 0,
      duration: MOTION.reveal,
      ease: MOTION.revealEase,
      scrollTrigger: {
        trigger: line,
        start: 'top 90%',
        end: 'top 62%',
        scrub: 0.65,
      },
    });
  });
}

export function revealGroup(
  scope: HTMLElement,
  groupSelector: string,
  itemSelector = '[data-reveal-item]'
) {
  scope.querySelectorAll<HTMLElement>(groupSelector).forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>(itemSelector);
    if (!items.length) return;

    gsap.from(items, {
      y: 48,
      opacity: 0,
      duration: MOTION.reveal,
      stagger: MOTION.revealStagger,
      ease: MOTION.revealEase,
      scrollTrigger: {
        trigger: group,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

export function initSectionReveals(scope: HTMLElement | null) {
  if (!scope) return () => {};

  const mm = gsap.matchMedia();
  const cleanups: Array<() => void> = [];

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    revealLines(scope);

    scope.querySelectorAll<HTMLElement>('[data-reveal="scrub"]').forEach((el) => {
      const tween = revealUp(el, { start: 'top 92%', scrub: 0.55 });
      cleanups.push(() => tween.scrollTrigger?.kill());
    });

    scope.querySelectorAll<HTMLElement>('[data-reveal="up"]').forEach((el) => {
      const tween = revealUp(el, { start: 'top 88%' });
      cleanups.push(() => tween.scrollTrigger?.kill());
    });

    revealGroup(scope, '[data-reveal-group]');
  });

  return () => {
    cleanups.forEach((fn) => fn());
    mm.revert();
  };
}
