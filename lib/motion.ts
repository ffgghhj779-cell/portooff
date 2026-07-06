/** Shared motion timings — tuned for Cuberto-like smoothness */

export const MOTION = {

  hover: 1.2,

  hoverEase: 'cubic-bezier(0.16, 1, 0.3, 1)' as const,

  reveal: 0.85,

  revealEase: 'cubic-bezier(0.16, 1, 0.3, 1)' as const,

  revealStagger: 0.035,

  menuOpen: 0.55,

  menuClose: 0.35,

  menuEase: 'expo.out' as const,

  cursorMorph: 0.38,

  cursorFollow: 0.11,

  cursorFollowLink: 0.1,

  cursorFollowMagnetic: 0.14,

  cursorFollowMedia: 0.12,

  magnetic: 0.45,

  lenisDuration: undefined,

  lenisLerp: 0.06,

  lenisWheelMultiplier: 1.0,

  lenisTouchMultiplier: 1.55,

  /** Mobile — snappier scroll, less inertia */
  lenisMobileDuration: undefined,
  lenisMobileLerp: 0.1,
  lenisMobileTouchMultiplier: 1.4,

} as const;



export const HOVER_SCALE = 1.05;



export const CURSOR_FOLLOW_EASE = 'power3.out' as const;


