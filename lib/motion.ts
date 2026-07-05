/** Shared motion timings */
export const MOTION = {
  hover: 0.75,
  hoverEase: 'expo.out' as const,
  reveal: 0.65,
  revealEase: 'power4.out' as const,
  revealStagger: 0.07,
  menuOpen: 0.55,
  menuClose: 0.35,
  menuEase: 'expo.out' as const,
  cursorMorph: 0.45,
  magnetic: 0.5,
  lenisDuration: 1.2,
  lenisWheelMultiplier: 0.9,
} as const;

export const HOVER_SCALE = 1.05;
