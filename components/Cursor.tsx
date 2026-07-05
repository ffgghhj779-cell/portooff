'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<'default' | 'button' | 'media'>('default');
  const [mediaText, setMediaText] = useState('Explore');

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let targetX = 0;
    let targetY = 0;
    let isMagnetic = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMagnetic) {
        targetX = mouseX;
        targetY = mouseY;
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    const ticker = gsap.ticker.add(() => {
      // Fluid physics delay
      cursorX += (targetX - cursorX) * 0.15;
      cursorY += (targetY - cursorY) * 0.15;
      
      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
      });
    });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for media hover
      const mediaEl = target.closest('.media-hover');
      if (mediaEl) {
        setHoverState('media');
        setMediaText(mediaEl.getAttribute('data-cursor-text') || 'Explore');
        isMagnetic = false;
        targetX = mouseX;
        targetY = mouseY;
        return;
      }

      // Check for magnetic button hover
      const magneticEl = target.closest('.magnetic') as HTMLElement;
      if (magneticEl) {
        setHoverState('button');
        isMagnetic = true;
        
        // Snap to center of magnetic element
        const rect = magneticEl.getBoundingClientRect();
        targetX = rect.left + rect.width / 2;
        targetY = rect.top + rect.height / 2;
        
        // Listen to mouse move on the magnetic element to slightly pull the cursor
        magneticEl.onmousemove = (me: MouseEvent) => {
           const pullX = (me.clientX - (rect.left + rect.width / 2)) * 0.1;
           const pullY = (me.clientY - (rect.top + rect.height / 2)) * 0.1;
           targetX = rect.left + rect.width / 2 + pullX;
           targetY = rect.top + rect.height / 2 + pullY;
        };
        
        magneticEl.onmouseleave = () => {
           isMagnetic = false;
           targetX = mouseX;
           targetY = mouseY;
           magneticEl.onmousemove = null;
           magneticEl.onmouseleave = null;
        };
        return;
      }
      
      // Default hover state (e.g. regular links)
      if (target.tagName.toLowerCase() === 'a' || target.closest('a')) {
        setHoverState('button');
        isMagnetic = false;
        targetX = mouseX;
        targetY = mouseY;
        return;
      }

      setHoverState('default');
      isMagnetic = false;
      targetX = mouseX;
      targetY = mouseY;
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      gsap.ticker.remove(ticker);
    };
  }, []);

  let cursorClasses = "fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out will-change-transform font-bold text-[10px] uppercase tracking-widest ";
  
  if (hoverState === 'default') {
    cursorClasses += "w-3 h-3 bg-white mix-blend-difference -translate-x-1/2 -translate-y-1/2";
  } else if (hoverState === 'button') {
    cursorClasses += "w-16 h-16 bg-white/20 backdrop-blur-sm mix-blend-difference -translate-x-1/2 -translate-y-1/2 border border-white/30";
  } else if (hoverState === 'media') {
    cursorClasses += "w-24 h-24 bg-white text-black -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(255,255,255,0.4)]";
  }

  return (
    <div
      ref={cursorRef}
      className={cursorClasses}
    >
      <div 
        ref={textRef}
        className={`transition-opacity duration-300 ${hoverState === 'media' ? 'opacity-100' : 'opacity-0'}`}
      >
        {hoverState === 'media' && mediaText}
      </div>
    </div>
  );
}
