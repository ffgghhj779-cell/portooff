import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let refreshRaf = 0;
let refreshTimer: ReturnType<typeof setTimeout> | null = null;
let pending = false;

/** Debounced ScrollTrigger.refresh — coalesces font/video/image load events */
export function batchScrollTriggerRefresh() {
  pending = true;

  if (refreshRaf) {
    cancelAnimationFrame(refreshRaf);
  }

  refreshRaf = requestAnimationFrame(() => {
    if (refreshTimer) {
      clearTimeout(refreshTimer);
    }

    refreshTimer = setTimeout(() => {
      if (!pending) return;
      pending = false;
      ScrollTrigger.refresh(true);
    }, 120);
  });
}

export function flushScrollTriggerRefresh() {
  pending = false;
  if (refreshRaf) cancelAnimationFrame(refreshRaf);
  if (refreshTimer) clearTimeout(refreshTimer);
  ScrollTrigger.refresh(true);
}
