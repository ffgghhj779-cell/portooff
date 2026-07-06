/** Shared motion timings — tuned for Cuberto-like smoothness */

export const MOTION = {

  hover: 0.9,

  hoverEase: 'expo.out' as const,

  reveal: 0.85,

  revealEase: 'power3.out' as const,

  revealStagger: 0.035,

  menuOpen: 0.55,

  menuClose: 0.35,

  menuEase: 'expo.out' as const,

  cursorMorph: 0.38,

  cursorFollow: 0.08,

  cursorFollowLink: 0.1,

  cursorFollowMagnetic: 0.14,

  cursorFollowMedia: 0.12,

  magnetic: 0.45,

  lenisDuration: 1.05,

  lenisLerp: 0.1,

  lenisWheelMultiplier: 0.92,

  lenisTouchMultiplier: 1.55,

  /** Mobile — snappier scroll, less inertia */
  lenisMobileDuration: 0.72,
  lenisMobileLerp: 0.18,
  lenisMobileTouchMultiplier: 1.25,

} as const;



export const HOVER_SCALE = 1.04;



export const CURSOR_FOLLOW_EASE = 'power3.out' as const;


