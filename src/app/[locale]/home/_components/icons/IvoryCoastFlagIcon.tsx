import { ComponentPropsWithRef } from "react";

export const IvoryCoastFlagIcon = ({
  size = 16,
  ...props
}: ComponentPropsWithRef<"svg"> & { size?: number }) => (
  <svg
    width={size}
    height={size * 0.67}
    viewBox="0 0 3 2"
    role="img"
    aria-label="Drapeau de la Côte d’Ivoire"
    {...props}
  >
    <rect width="1" height="2" fill="#f77f00" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#009e60" />
  </svg>
);
