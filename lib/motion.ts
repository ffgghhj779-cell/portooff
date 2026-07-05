/** Shared motion timings — ~45% faster than prior defaults */
export const MOTION = {
  hover: 0.75,
  hoverEase: 'expo.out' as const,
  reveal: 0.65,
  revealEase: 'expo.out' as const,
  revealStagger: 0.07,
  menuOpen: 0.55,
  menuClose: 0.35,
  menuEase: 'expo.out' as const,
  cursorMorph: 0.45,
  magnetic: 0.5,
  lenisDuration: 0.82,
} as const;

export const HOVER_SCALE = 1.05;
