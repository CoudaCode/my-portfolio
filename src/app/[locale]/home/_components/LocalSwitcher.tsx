import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function LocalSwitcher() {
  const t = useTranslations("LocalSwitcher");
  const locale = useLocale();

  // Fonction pour obtenir les initiales selon la locale
  const getInitials = (locale: string) => {
    switch (locale) {
      case "fr":
        return "OL";
      case "es":
        return "AIS";
      case "en":
      default:
        return "H";
    }
  };

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((curr) => (
        <Link
          key={curr}
          href={`/${curr}`}
          className={cn(
            "size-6 flex items-center justify-center rounded text-xs",
            locale === curr
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {getInitials(curr)}
        </Link>
      ))}
    </div>
  );
}
