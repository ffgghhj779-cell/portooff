'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMotionPreference } from '@/components/MotionPreferenceProvider';
import { CURSOR_FOLLOW_EASE, MOTION } from '@/lib/motion';

type CursorMode = 'default' | 'link' | 'magnetic' | 'media' | 'play';

const MORPH_DURATION = MOTION.cursorMorph;

const FOLLOW_DURATION: Record<CursorMode, number> = {
  default: MOTION.cursorFollow,
  link: MOTION.cursorFollowLink,
  magnetic: MOTION.cursorFollowMagnetic,
  media: MOTION.cursorFollowMedia,
  play: MOTION.cursorFollowMedia,
};

const MODE_CONFIG: Record<
  CursorMode,
  {
    size: number;
    bg: string;
    border: string;
    textColor: string;
    blendMode: string;
    showText: boolean;
  }
> = {
  default: {
    size: 12,
    bg: '#ffffff',
    border: 'transparent',
    textColor: '#000000',
    blendMode: 'difference',
    showText: false,
  },
  link: {
    size: 40,
    bg: 'rgba(255, 255, 255, 0.12)',
    border: 'rgba(255, 255, 255, 0.4)',
    textColor: '#ffffff',
    blendMode: 'difference',
    showText: false,
  },
  magnetic: {
    size: 64,
    bg: '#ffffff',
    border: 'transparent',
    textColor: '#000000',
    blendMode: 'difference',
    showText: false,
  },
  media: {
    size: 180,
    bg: '#ffffff',
    border: 'transparent',
    textColor: '#000000',
    blendMode: 'normal',
    showText: true,
  },
  play: {
    size: 180,
    bg: '#0a0a0a',
    border: 'rgba(255, 255, 255, 0.25)',
    textColor: '#ffffff',
    blendMode: 'normal',
    showText: true,
  },
};

export function CustomCursor() {
  const { reducedMotion } = useMotionPreference();
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const followRef = useRef<{
    x: gsap.QuickToFunc;
    y: gsap.QuickToFunc;
  } | null>(null);

  const modeRef = useRef<CursorMode>('default');
  const labelRef = useRef('');
  const mouseRef = useRef({ x: 0, y: 0 });
  const magneticElRef = useRef<HTMLElement | null>(null);

  const [cursorText, setCursorText] = useState('');
  const [mode, setMode] = useState<CursorMode>('default');

  useGSAP(
    () => {
      if (reducedMotion) return;

      const cursor = cursorRef.current;
      const inner = innerRef.current;
      if (!cursor || !inner) return;

      const prefersFinePointer = window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches;

      if (!prefersFinePointer) return;

      const createFollow = (nextMode: CursorMode) => {
        followRef.current = {
          x: gsap.quickTo(cursor, 'x', {
            duration: FOLLOW_DURATION[nextMode],
            ease: CURSOR_FOLLOW_EASE,
            overwrite: true,
          }),
          y: gsap.quickTo(cursor, 'y', {
            duration: FOLLOW_DURATION[nextMode],
            ease: CURSOR_FOLLOW_EASE,
            overwrite: true,
          }),
        };
      };

      createFollow('default');
      gsap.set(cursor, { opacity: 1, x: 0, y: 0 });

      const moveCursor = (x: number, y: number) => {
        followRef.current?.x(x);
        followRef.current?.y(y);
      };

      const applyMode = (nextMode: CursorMode, label = '') => {
        if (modeRef.current === nextMode && labelRef.current === label) return;

        modeRef.current = nextMode;
        labelRef.current = label;
        setMode(nextMode);
        setCursorText(label);
        createFollow(nextMode);

        const config = MODE_CONFIG[nextMode];

        gsap.to(inner, {
          width: config.size,
          height: config.size,
          backgroundColor: config.bg,
          borderColor: config.border,
          duration: MORPH_DURATION,
          ease: 'expo.out',
        });

        gsap.to(textRef.current, {
          opacity: config.showText ? 1 : 0,
          color: config.textColor,
          scale: config.showText ? 1 : 0.88,
          duration: MORPH_DURATION * 0.85,
          ease: 'expo.out',
        });
      };

      const resetMagneticListeners = () => {
        const el = magneticElRef.current;
        if (!el) return;
        el.onmousemove = null;
        el.onmouseleave = null;
        magneticElRef.current = null;
      };

      const resolveTarget = (target: HTMLElement): CursorMode | null => {
        const exploreEl = target.closest('[data-cursor="explore"]');
        if (exploreEl) {
          applyMode(
            'media',
            exploreEl.getAttribute('data-cursor-label') || 'Explore'
          );
          resetMagneticListeners();
          return 'media';
        }

        const playEl = target.closest('[data-cursor="play"]');
        if (playEl) {
          applyMode('play', playEl.getAttribute('data-cursor-label') || 'Play');
          resetMagneticListeners();
          return 'play';
        }

        const mediaEl = target.closest('.media-hover');
        if (mediaEl) {
          applyMode(
            'media',
            mediaEl.getAttribute('data-cursor-text') || 'Explore'
          );
          resetMagneticListeners();
          return 'media';
        }

        const magneticEl = target.closest('.magnetic') as HTMLElement | null;
        if (magneticEl) {
          applyMode('magnetic');
          if (magneticElRef.current !== magneticEl) {
            resetMagneticListeners();
            magneticElRef.current = magneticEl;

            const rect = magneticEl.getBoundingClientRect();
            moveCursor(rect.left + rect.width / 2, rect.top + rect.height / 2);

            magneticEl.onmousemove = (event: MouseEvent) => {
              const bounds = magneticEl.getBoundingClientRect();
              const pullX =
                (event.clientX - (bounds.left + bounds.width / 2)) * 0.14;
              const pullY =
                (event.clientY - (bounds.top + bounds.height / 2)) * 0.14;
              moveCursor(
                bounds.left + bounds.width / 2 + pullX,
                bounds.top + bounds.height / 2 + pullY
              );
            };

            magneticEl.onmouseleave = () => {
              resetMagneticListeners();
              moveCursor(mouseRef.current.x, mouseRef.current.y);
            };
          }
          return 'magnetic';
        }

        if (
          target.closest('a') ||
          target.closest('button') ||
          target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button'
        ) {
          applyMode('link');
          resetMagneticListeners();
          return 'link';
        }

        return null;
      };

      const onMouseMove = (event: MouseEvent) => {
        mouseRef.current = { x: event.clientX, y: event.clientY };
        if (modeRef.current !== 'magnetic') {
          moveCursor(event.clientX, event.clientY);
        }
      };

      const onMouseOver = (event: MouseEvent) => {
        const resolved = resolveTarget(event.target as HTMLElement);
        if (resolved === null) {
          applyMode('default');
          resetMagneticListeners();
          moveCursor(mouseRef.current.x, mouseRef.current.y);
        }
      };

      const onMouseLeaveWindow = () => {
        gsap.to(cursor, { opacity: 0, duration: 0.15, ease: 'expo.out' });
      };

      const onMouseEnterWindow = () => {
        gsap.to(cursor, { opacity: 1, duration: 0.15, ease: 'expo.out' });
      };

      document.addEventListener('mousemove', onMouseMove, { passive: true });
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseleave', onMouseLeaveWindow);
      document.addEventListener('mouseenter', onMouseEnterWindow);

      return () => {
        resetMagneticListeners();
        followRef.current = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('mouseleave', onMouseLeaveWindow);
        document.removeEventListener('mouseenter', onMouseEnterWindow);
      };
    },
    { scope: rootRef, dependencies: [reducedMotion] }
  );

  if (reducedMotion) return null;

  const config = MODE_CONFIG[mode];

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 opacity-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        aria-hidden="true"
      >
        <div
          ref={innerRef}
          className="custom-cursor-inner relative flex items-center justify-center rounded-full border"
          style={{
            width: config.size,
            height: config.size,
            backgroundColor: config.bg,
            borderColor: config.border,
            mixBlendMode: config.blendMode as React.CSSProperties['mixBlendMode'],
          }}
        >
          <span
            ref={textRef}
            className="select-none whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] opacity-0"
            style={{ color: config.textColor }}
          >
            {cursorText}
          </span>
        </div>
      </div>
    </div>
  );
}
