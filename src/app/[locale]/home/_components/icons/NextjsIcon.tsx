import { ComponentPropsWithRef } from "react";

export const NextjsIcon = ({
  size,
  ...props
}: ComponentPropsWithRef<"svg"> & { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 16.5v-9l9 11V7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);
