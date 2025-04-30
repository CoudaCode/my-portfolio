import { ComponentPropsWithRef } from "react";

export const FranceFlagIcon = ({
  size,
  ...props
}: ComponentPropsWithRef<"svg"> & { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 228"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <mask id="circleFlagsLangFr0">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#circleFlagsLangFr0)">
        <path fill="#eee" d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z" />
        <path fill="#0052b4" d="M0 0h167v512H0z" />
        <path fill="#d80027" d="M345 0h167v512H345z" />
      </g>
    </svg>
  );
};
