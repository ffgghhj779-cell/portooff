import gsap from 'gsap';

export function markGsapReady() {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.add('gsap-ready');
}

export function setGsapInitialState(
  selector: string,
  vars: gsap.TweenVars,
  scope?: Element | null
) {
  if (typeof window === 'undefined') return;
  const targets = scope
    ? scope.querySelectorAll(selector)
    : document.querySelectorAll(selector);
  if (targets.length) {
    gsap.set(targets, vars);
  }
}
