import type { SimpleIcon as SimpleIconData } from "simple-icons";

type SimpleIconProps = {
  icon: SimpleIconData;
  size?: number;
  className?: string;
};

export const SimpleIcon = ({ icon, size = 24, className }: SimpleIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label={icon.title}
    className={className}
  >
    <path d={icon.path} fill="currentColor" />
  </svg>
);
