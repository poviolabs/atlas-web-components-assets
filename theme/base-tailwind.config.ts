import type { Config } from 'tailwindcss';
import tailwindcssReactAriaComponents from 'tailwindcss-react-aria-components';

const pxToRem = (px: number) => `${px / 16}rem`;

const baseTailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
    },
    borderRadius: {
      none: '0rem',
    },
    maxWidth: {
      none: 'none',
      modal: pxToRem(520),
      toast: pxToRem(720),
    },
    spacing: {
      0: '0rem',
    },
    backdropBlur: {},
    blur: {},
    boxShadow: {},
    rotate: {
      0: '0deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      270: '270deg',
      360: '360deg',
    },
    screens: {
      // why are breakpoints in rems? read this: https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/
      dm: pxToRem(380),
      t: pxToRem(600),
      dd: pxToRem(1280),
      dl: pxToRem(1680),
    },
    keyframes: {
      'drawer-slide': {
        from: {
          transform: 'translateX(100%)',
        },
        to: {
          transform: 'translateX(0)',
        },
      },
      'loader-spin': {
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
    animation: {
      'drawer-enter': 'drawer-slide 0.3s',
      'drawer-exit': 'drawer-slide 0.3s reverse',
      'loader-spin': 'loader-spin 1s linear infinite',
    },
    fontSize: {
      inherit: 'inherit',
    },
    fontFamily: {},
    fontWeight: {},
    extend: {
      gridTemplateColumns: {
        'flower-grid': `repeat(auto-fill, minmax(${pxToRem(260)}, 1fr))`,
      },
    },
  },
  plugins: [tailwindcssReactAriaComponents],
};

export default baseTailwindConfig;
