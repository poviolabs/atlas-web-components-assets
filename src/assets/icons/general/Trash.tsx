import type { SVGProps } from 'react';

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="fill-current"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 5V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1h4a1 1 0 1 1 0 2h-1v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7H3a1 1 0 0 1 0-2zm2.293-1.707A1 1 0 0 1 10 3h4a1 1 0 0 1 1 1v1H9V4a1 1 0 0 1 .293-.707M6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
