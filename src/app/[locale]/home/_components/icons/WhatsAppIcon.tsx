import { ComponentPropsWithRef } from "react";

export const WhatsAppIcon = ({
  size = 16,
  ...props
}: ComponentPropsWithRef<"svg"> & { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    role="img"
    aria-label="WhatsApp"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path
      fill="#fff"
      d="M17.5 6.4A7.7 7.7 0 0 0 5.4 15.7l-1 3.8 3.9-1a7.7 7.7 0 0 0 11.3-6.8c0-2-.8-3.9-2.1-5.3Zm-5.6 12a6.4 6.4 0 0 1-3.3-.9l-.2-.1-2.3.6.6-2.2-.2-.3a6.4 6.4 0 1 1 5.4 2.9Zm3.5-4.8c-.2-.1-1.1-.5-1.3-.6-.2-.1-.3-.1-.5.1l-.6.8c-.1.2-.3.2-.5.1a5.2 5.2 0 0 1-2.6-2.3c-.2-.3.2-.4.5-1 .1-.1 0-.3 0-.4l-.6-1.5c-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4 0-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 4 3.4 1.5.6 2.1.6 2.9.5.4-.1 1.1-.5 1.3-.9.2-.4.2-.8.1-.9 0-.1-.1-.1-.3-.2Z"
    />
  </svg>
);
