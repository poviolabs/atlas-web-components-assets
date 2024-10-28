import type { SVGProps } from 'react';

export const CheckboxIndeterminateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 2"
    className="fill-current"
    {...props}
  >
    <path
      stroke="#F8F8FA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 1H1"
    />
  </svg>
);
