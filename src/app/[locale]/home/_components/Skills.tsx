import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Code } from "./Code";
import { Section } from "./Section";
import { AdonisjsIcon } from "./icons/AdonisjsIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

export const Skills = () => {
  const t = useTranslations("skills");

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">{t("badge")}</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("title")}
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <ReactIcon
            size={42}
            className="animate-spin text-primary"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            {t("react.title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t.rich("react.description", {
              Code: (chunks) => <Code>{chunks}</Code>,
            })}
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <TailwindIcon size={42} className="text-primary" />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            {t("tailwind.title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t.rich("tailwind.description", {
              Code: (chunks) => <Code>{chunks}</Code>,
              u: (chunks) => <u>{chunks}</u>,
              i: (chunks) => <i>{chunks}</i>,
            })}
          </p>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <AdonisjsIcon size={42} className="text-primary" />
          <h3 className="mb-2 text-2xl font-semibold tracking-tight">
            {t("adonisjs.title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t.rich("adonisjs.description", {
              Code: (chunks) => <Code>{chunks}</Code>,
            })}
          </p>
        </div>
      </div>
      <Link href={"/skills"}>
        <p className="text-primary/80 text-center hover:underline">
          {t("seeMore")}
        </p>
      </Link>
    </Section>
  );
};
