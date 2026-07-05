'use client';

import { useEffect } from 'react';
import { batchScrollTriggerRefresh } from '@/lib/batch-scroll-trigger-refresh';

export function ScrollLayoutStabilizer() {
  useEffect(() => {
    batchScrollTriggerRefresh();

    const onWindowLoad = () => batchScrollTriggerRefresh();
    window.addEventListener('load', onWindowLoad);

    const fontsReady = document.fonts?.ready;
    fontsReady?.then(() => batchScrollTriggerRefresh()).catch(() => undefined);

    const onResize = () => batchScrollTriggerRefresh();
    window.addEventListener('resize', onResize);

    const imageListeners: Array<() => void> = [];
    document.querySelectorAll('img').forEach((img) => {
      if (img.complete) return;
      const handler = () => batchScrollTriggerRefresh();
      img.addEventListener('load', handler);
      img.addEventListener('error', handler);
      imageListeners.push(() => {
        img.removeEventListener('load', handler);
        img.removeEventListener('error', handler);
      });
    });

    const videoListeners: Array<() => void> = [];
    document.querySelectorAll('video').forEach((video) => {
      const handler = () => batchScrollTriggerRefresh();
      video.addEventListener('loadedmetadata', handler);
      video.addEventListener('loadeddata', handler);
      videoListeners.push(() => {
        video.removeEventListener('loadedmetadata', handler);
        video.removeEventListener('loadeddata', handler);
      });
    });

    const observer = new MutationObserver(() => {
      batchScrollTriggerRefresh();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'class', 'style'],
    });

    return () => {
      window.removeEventListener('load', onWindowLoad);
      window.removeEventListener('resize', onResize);
      imageListeners.forEach((off) => off());
      videoListeners.forEach((off) => off());
      observer.disconnect();
    };
  }, []);

  return null;
}
