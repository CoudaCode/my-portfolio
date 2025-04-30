"use client";
import { Card } from "@/components/ui/card";
import {
  Banknote,
  MessageCircle,
  Speaker,
  User,
  WashingMachine,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactMe } from "./ContactMe";
import { Section } from "./Section";
import { SideProjects } from "./SideProjects";
import { Work, WorkProps } from "./Works";

export const Status = () => {
  const t = useTranslations("contact");
  const t2 = useTranslations("status");
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full flex flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">{t2("Project")}</p>
          <div className=" flex flex-col gap-4">
            {SideProjectsList.map((project) => (
              <SideProjects
                key={project.title}
                title={project.title}
                description={project.description}
                Logo={project.Logo}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4 h-full w-full">
        <Card className="p-4 flex-1">
          {t2("Work")}
          <div className=" flex flex-col gap-4">
            {WorksList.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">{t("badge")} 📧</p>
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
        </Card>
      </div>
    </Section>
  );
};

const SideProjectsList = [
  {
    title: "Presszone",
    description:
      "Site web de pressing digitale avec services de livraison et de paiement.",
    Logo: WashingMachine,
    url: "https://presszone.ci",
  },
  {
    title: "Novasend",
    description: "Site web de l'application de transfert d'argent Navsend",
    Logo: Banknote,
    url: "https://novasend.app",
  },
  {
    title: "Jetfy ",
    description:
      "Services api de sms et airtime les applications web et mobiles.",
    Logo: MessageCircle,
    url: "https://console.jetfy.net",
  },
  {
    title: "Portfolio",
    description:
      "Mon site personnel pour présenter mes projets et mes compétences.",
    Logo: User,
    url: "https://diara-madou.vercel.app",
  },
  {
    title: "Text To Speech",
    description:
      "Convertissez du texte en discours facilement avec notre outil alimenté par l'IA.",
    Logo: Speaker,
    url: "https://text-to-speech-smoky.vercel.app/",
  },
];

const WorksList: WorkProps[] = [
  {
    title: "Vague Digitale",
    role: "Backend Developer",
    freelance: true,
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQG2GpGgG-w9Gg/company-logo_200_200/company-logo_200_200/0/1708099727741/vague_digitale_ci_logo?e=1751500800&v=beta&t=mORW-SKc5yGuYWgQcy1mW7GGxZqhBbQHbSOtgOKh-dw",
    date: "2024 - Present",
    url: "https://vaguedigitale.ci",
  },
  {
    title: "GRowing Consulting",
    image:
      "https://media.licdn.com/dms/image/v2/C4E0BAQGdxU_9GuxNKQ/company-logo_200_200/company-logo_200_200/0/1672436644993?e=1751500800&v=beta&t=nHFqEI_xntz-s61m8gfeHDV5EOttzhUgE07stA9g8_w",
    date: "2024 - 2024",
    url: "/",
    role: "Backend Developer",
  },
  {
    title: "NaN Digital Academy",
    image:
      "data:image/png;base64,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JLrYA/SafRHd7AF6yz6JLvYAvWZfRDd7gN6yT6KLPUCv2RfRzR6gt+yT6GIP0Gv2RXSzB+gt+yS62AP0mn0R3ewBess+iS72AL1mX0Q3e4Desk+iiz1Ar9kX0c0eoLfsk+hiD9Br9kV0swfoLfskutgD9Jp9Ed3sAXrLPoku9gC9Zl9EN3uA3rJPoos9QK/ZF9HNHqC37JPoYg/Qa/ZFdLMH6C37JLrYA/SafRFd7AF6zT6Jfk6AXrOfL+lyO9Tuvwfa5fqksus9BWX3egrKLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcoudCi70aHsQoeyGx3KLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcoudCi70aHsQoeyGx3KLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcoudCi70aHsQoeyGx3KLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcr+eIX9nW/p57p5dvhE/5tnh6SenYoudiq62anoYqeim52KLnYqutmp6GKnopudii52KrrZqehip6KbnYoudiq62anoYqeim52KLnYqutmp6GKnopudii52KrrZqehip6KbnYoudiq62anoYqeim52KLnYqutmp6GKnopudii52Kvq7PDomAACAYRjk3/VSFTvAAmtX02tX09eupteupq9dTa9dTV+7ml67mr52Nb12NX3tanrtanrtbPqzAxUAkbXRZY9mAAAAAElFTkSuQmCC",
    date: "2024 - 2024",
    url: "https://nan.ci",
    role: "Backend Developer ",
  },
];
