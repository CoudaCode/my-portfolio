import { useTranslations } from "next-intl";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { TypeScriptIcon } from "./icons/TypeScript";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-4">
        <h2 className="font-caption font-bold text-5xl text-primary">
          {t("name")}
        </h2>
        <h3 className="text-2xl font-caption text-primary/60">{t("title")}</h3>
        <p className="text-base">
          {t("description.part1")}{" "}
          <Code className="inline-flex items-center gap-1">
            <TypeScriptIcon size={16} className="inline" />
            {t("description.typescript")}
          </Code>
          {t("description.part2")}{" "}
          <Code className="inline-flex items-center gap-1">
            <JavaScriptIcon size={16} className="inline" />
            {t("description.javascript")}
          </Code>
          {t("description.part3")}{" "}
          <Link href={"/"}>
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/langfr-338px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
                alt="ivory coast"
                style={{ width: 16, height: "auto" }}
              />
              {t("description.location")}
            </Code>
          </Link>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/119653418?v=4"
          alt={t("name")}
          className="w-full h-auto rounded-full maw-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
