import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { ContactMe } from "./ContactMe";
import { Section } from "./Section";

export const Contact = () => {
  const t = useTranslations("contact");

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">{t("badge")}</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("title")}
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactMe
          name={t("contacts.email.name")}
          url="mailto:couda.dm@gmail.com"
          description={t("contacts.email.description")}
          mediumImage="https://img.freepik.com/vecteurs-premium/icones-google-icones-gmail-illustration-vectorielle-modifiable_981536-461.jpg?semt=ais_hybrid"
          image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
        />
        <ContactMe
          url="https://www.linkedin.com/in/mamadou-diarassouba-558493239/"
          name={t("contacts.linkedin.name")}
          description={t("contacts.linkedin.description")}
          mediumImage="https://cdn-icons-png.flaticon.com/256/174/174857.png"
          image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
        />
        <ContactMe
          url="https://wa.me/2250747185291"
          name={t("contacts.whatsapp.name")}
          description={t("contacts.whatsapp.description")}
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
          image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
        />
      </div>
    </Section>
  );
};
