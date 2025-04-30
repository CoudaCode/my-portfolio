"use client";

import { Label } from "@/components/ui/label";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { ChangeEvent, useTransition } from "react";

type Props = {
  children: React.ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocalSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale }); // Utilisation correcte de next-intl
    });
  };

  return (
    <Label
      className={cn(
        "relative text-gray-400",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={handleLanguageChange}
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">
        <ChevronDown className="h-4 w-4 opacity-50" />
      </span>
    </Label>
  );
}
