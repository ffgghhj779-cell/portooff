export type CursorMode = 'default' | 'link' | 'magnetic' | 'media' | 'play';
export type CursorTheme = 'light' | 'dark';

type CursorModeConfig = {
  size: number;
  bg: string;
  border: string;
  textColor: string;
  blendMode: string;
  showText: boolean;
};

const DARK_CURSOR: Record<CursorMode, CursorModeConfig> = {
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

const LIGHT_CURSOR: Record<CursorMode, CursorModeConfig> = {
  default: {
    size: 12,
    bg: '#000000',
    border: 'transparent',
    textColor: '#000000',
    blendMode: 'normal',
    showText: false,
  },
  link: {
    size: 40,
    bg: 'rgba(0, 0, 0, 0.06)',
    border: 'rgba(0, 0, 0, 0.22)',
    textColor: '#000000',
    blendMode: 'normal',
    showText: false,
  },
  magnetic: {
    size: 64,
    bg: '#000000',
    border: 'transparent',
    textColor: '#ffffff',
    blendMode: 'normal',
    showText: false,
  },
  media: {
    size: 180,
    bg: '#000000',
    border: 'transparent',
    textColor: '#ffffff',
    blendMode: 'normal',
    showText: true,
  },
  play: {
    size: 180,
    bg: '#000000',
    border: 'rgba(255, 255, 255, 0.2)',
    textColor: '#ffffff',
    blendMode: 'normal',
    showText: true,
  },
};

export function getPageTheme(): CursorTheme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function getCursorModeConfig(
  mode: CursorMode,
  theme: CursorTheme = getPageTheme()
): CursorModeConfig {
  return theme === 'light' ? LIGHT_CURSOR[mode] : DARK_CURSOR[mode];
}
