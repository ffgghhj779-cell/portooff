'use client';

import { useEffect } from 'react';
import { batchScrollTriggerRefresh } from '@/lib/batch-scroll-trigger-refresh';

export function ScrollLayoutStabilizer() {
  useEffect(() => {
    batchScrollTriggerRefresh();

    const onWindowLoad = () => batchScrollTriggerRefresh();
    if (document.readyState === 'complete') {
      onWindowLoad();
    } else {
      window.addEventListener('load', onWindowLoad, { once: true });
    }

    document.fonts?.ready
      ?.then(() => batchScrollTriggerRefresh())
      .catch(() => undefined);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => batchScrollTriggerRefresh(), 150);
    };
    window.addEventListener('resize', onResize);

    const imageListeners: Array<() => void> = [];
    document.querySelectorAll('img').forEach((img) => {
      if (img.complete) return;
      const handler = () => batchScrollTriggerRefresh();
      img.addEventListener('load', handler, { once: true });
      img.addEventListener('error', handler, { once: true });
      imageListeners.push(() => {
        img.removeEventListener('load', handler);
        img.removeEventListener('error', handler);
      });
    });

    const videoListeners: Array<() => void> = [];
    document.querySelectorAll('video').forEach((video) => {
      const handler = () => batchScrollTriggerRefresh();
      video.addEventListener('loadedmetadata', handler, { once: true });
      video.addEventListener('loadeddata', handler, { once: true });
      videoListeners.push(() => {
        video.removeEventListener('loadedmetadata', handler);
        video.removeEventListener('loadeddata', handler);
      });
    });

    return () => {
      window.removeEventListener('load', onWindowLoad);
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      imageListeners.forEach((off) => off());
      videoListeners.forEach((off) => off());
    };
  }, []);

  return null;
}
