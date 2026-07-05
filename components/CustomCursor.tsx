'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMotionPreference } from '@/components/MotionPreferenceProvider';

type CursorMode = 'default' | 'link' | 'magnetic' | 'media' | 'play';

const LERP = 0.1;
const MAGNETIC_LERP = 0.16;
const MORPH_DURATION = 0.72;

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

  const modeRef = useRef<CursorMode>('default');
  const labelRef = useRef('');
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const magneticElRef = useRef<HTMLElement | null>(null);

  const [cursorText, setCursorText] = useState('');
  const [mode, setMode] = useState<CursorMode>('default');
  const [visible, setVisible] = useState(false);

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

      setVisible(true);

      const applyMode = (nextMode: CursorMode, label = '') => {
        if (modeRef.current === nextMode && labelRef.current === label) return;

        modeRef.current = nextMode;
        labelRef.current = label;
        setMode(nextMode);
        setCursorText(label);

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

      const snapToElement = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        targetRef.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
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
            snapToElement(magneticEl);

            magneticEl.onmousemove = (event: MouseEvent) => {
              const rect = magneticEl.getBoundingClientRect();
              const pullX =
                (event.clientX - (rect.left + rect.width / 2)) * 0.14;
              const pullY =
                (event.clientY - (rect.top + rect.height / 2)) * 0.14;
              targetRef.current = {
                x: rect.left + rect.width / 2 + pullX,
                y: rect.top + rect.height / 2 + pullY,
              };
            };

            magneticEl.onmouseleave = () => {
              resetMagneticListeners();
              targetRef.current = {
                x: mouseRef.current.x,
                y: mouseRef.current.y,
              };
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
          targetRef.current = { x: event.clientX, y: event.clientY };
        }
      };

      const onMouseOver = (event: MouseEvent) => {
        const resolved = resolveTarget(event.target as HTMLElement);
        if (resolved === null) {
          applyMode('default');
          resetMagneticListeners();
          targetRef.current = {
            x: mouseRef.current.x,
            y: mouseRef.current.y,
          };
        }
      };

      const onMouseLeaveWindow = () => {
        gsap.to(cursor, { opacity: 0, duration: 0.25, ease: 'power2.out' });
      };

      const onMouseEnterWindow = () => {
        gsap.to(cursor, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      };

      const ticker = () => {
        const lerp =
          modeRef.current === 'magnetic' || modeRef.current === 'link'
            ? MAGNETIC_LERP
            : LERP;

        posRef.current.x += (targetRef.current.x - posRef.current.x) * lerp;
        posRef.current.y += (targetRef.current.y - posRef.current.y) * lerp;

        gsap.set(cursor, {
          x: posRef.current.x,
          y: posRef.current.y,
          force3D: true,
        });
      };

      gsap.ticker.add(ticker);

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseleave', onMouseLeaveWindow);
      document.addEventListener('mouseenter', onMouseEnterWindow);

      return () => {
        gsap.ticker.remove(ticker);
        resetMagneticListeners();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('mouseleave', onMouseLeaveWindow);
        document.removeEventListener('mouseenter', onMouseEnterWindow);
      };
    },
    { scope: rootRef, dependencies: [reducedMotion] }
  );

  if (reducedMotion || !visible) return null;

  const config = MODE_CONFIG[mode];

  return (
    <div ref={rootRef}>
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
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
