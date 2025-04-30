import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent hover:bg-accent/50 transition-colors px-1 py-0.5 rounded-sm text-primary/80",
        className
      )}
      {...props}
    />
  );
};
