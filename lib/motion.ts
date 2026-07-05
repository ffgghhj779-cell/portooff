/** Shared motion timings — tuned for Cuberto-like smoothness */
export const MOTION = {
  hover: 1.05,
  hoverEase: 'expo.out' as const,
  reveal: 0.95,
  revealEase: 'power3.out' as const,
  revealStagger: 0.04,
  menuOpen: 0.65,
  menuClose: 0.4,
  menuEase: 'expo.out' as const,
  cursorMorph: 0.55,
  magnetic: 0.65,
  lenisDuration: 1.55,
  lenisWheelMultiplier: 0.72,
  lenisTouchMultiplier: 1.4,
} as const;

export const HOVER_SCALE = 1.04;
