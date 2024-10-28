import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import * as config from '../../tailwind.config';

const fullConfig = resolveConfig(config as any);

type Breakpoint = 'sm' | 'dm' | 't' | 'dd' | 'dl';

// const breakpoints = fullConfig.theme?.screens as Record<Breakpoint, string>;
const breakpoints = (fullConfig?.default?.presets?.[0]?.theme?.screens ||
  fullConfig.theme?.screens) as Record<Breakpoint, string>;

export function useBreakpoint(breakpointKey: Breakpoint) {
  if (!breakpoints) {
    throw new Error('Tailwind config is missing theme.screens');
  }

  const bool = useMediaQuery({
    query: `(min-width: ${breakpoints[breakpointKey]})`,
  });

  return bool;
}
