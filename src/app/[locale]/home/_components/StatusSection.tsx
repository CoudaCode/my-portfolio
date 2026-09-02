"use client";
import { Card } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import { User, WashingMachine } from "lucide-react";
import { useTranslations } from "next-intl";
import { Section } from "./Section";
import { SideProjects } from "./SideProjects";
import { Work, WorkProps } from "./Works";

export const Status = () => {
  const t2 = useTranslations("status");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <motion.div
        className="flex-[3] w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={cardVariants}>
          <Card className="w-full flex flex-col gap-2 p-4 hover:shadow-lg transition-shadow duration-300">
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {t2("Project")}
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              {SideProjectsList.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                >
                  <SideProjects
                    title={project.title}
                    description={t2(
                      `projects.${project.translationKey}.description`,
                    )}
                    Logo={project.Logo}
                    logoUrl={project.logoUrl}
                    url={project.url}
                  />
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex-[2] flex flex-col gap-4 h-full w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={cardVariants}>
          <Card className="p-4 flex-1 hover:shadow-lg transition-shadow duration-300">
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {t2("Work")}
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              {WorksList.map((work, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                >
                  <Work {...work} />
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="p-4 flex-1 hover:shadow-lg transition-shadow duration-300">
            <motion.p
              className="text-lg text-muted-foreground"
              variants={itemVariants}
            >
              {t2("Formation")}
            </motion.p>
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              {FormationsList.map((formation, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                >
                  <Work {...formation} />
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};

const SideProjectsList = [
  {
    title: "Imobiznets",
    translationKey: "imobiznets",
    logoUrl: "https://dev.imobiznets.inc/images/assets/Logo/logo.webp",
    Logo: undefined,
    url: "https://imobiznets.inc",
  },
  {
    title: "Ndaya",
    translationKey: "ndaya",
    logoUrl: "https://ndaya.com/images/logo/logo-dark.webp",
    Logo: undefined,
    url: "https://ndaya.com",
  },
  {
    title: "Ivoire Assurance Conseil et Courtage",
    translationKey: "iacc",
    Logo: WashingMachine,
    logoUrl: undefined,
    url: "https://iacc-website-nextjs.vercel.app/",
  },
  {
    title: "Text To Speech",
    translationKey: "textToSpeech",
    Logo: undefined,
    logoUrl: "https://text-to-speech-smoky.vercel.app/assets/logo-D4qARBnY.png",
    url: "https://text-to-speech-smoky.vercel.app/",
  },
  {
    title: "Portfolio",
    translationKey: "portfolio",
    Logo: User,
    logoUrl: undefined,
    url: "https://diara-madou.vercel.app",
  },
];

const WorksList: WorkProps[] = [
  {
    title: "Divine Grace",
    role: "Frontend Developer",
    freelance: true,
    image: "/images/dvg.webp",
    date: "02/2025 - 02/2026",
    url: "https://divingrace.com",
  },
  {
    title: "Vague Digitale",
    role: "Fullstack Developer",
    freelance: false,
    image: "/images/vdg.webp",
    date: "07/2024 - 05/2025",
    url: "https://vaguedigitale.ci",
  },
];

const FormationsList: WorkProps[] = [
  {
    title: "NaN Digital Academy",
    image:
      "data:image/png;base64,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JLrYA/SafRHd7AF6yz6JLvYAvWZfRDd7gN6yT6KLPUCv2RfRzR6gt+yT6GIP0Gv2RXSzB+gt+yS62AP0mn0R3ewBess+iS72AL1mX0Q3e4Desk+iiz1Ar9kX0c0eoLfsk+hiD9Br9kV0swfoLfskutgD9Jp9Ed3sAXrLPoku9gC9Zl9EN3uA3rJPoos9QK/ZF9HNHqC37JPoYg/Qa/ZFdLMH6C37JLrYA/SafRFd7AF6zT6Jfk6AXrOfL+lyO9Tuvwfa5fqksus9BWX3egrKLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcoudCi70aHsQoeyGx3KLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcoudCi70aHsQoeyGx3KLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcoudCi70aHsQoeyGx3KLnQou9Gh7EKHshsdyi50KLvRoexCh7IbHcr+eIX9nW/p57p5dvhE/5tnh6SenYoudiq62anoYqeim52KLnYqutmp6GKnopudii52KrrZqehip6KbnYoudiq62anoYqeim52KLnYqutmp6GKnopudii52KrrZqehip6KbnYoudiq62anoYqeim52KLnYqutmp6GKnopudii52Kvq7PDomAACAYRjk3/VSFTvAAmtX02tX09eupteupq9dTa9dTV+7ml67mr52Nb12NX3tanrtanrtbPqzAxUAkbXRZY9mAAAAAElFTkSuQmCC",
    date: "01/2023 - 01/2024",
    url: "https://nan.ci",
    role: "Formation Développeur FullStack Js",
  },
  {
    title: "Growing Consulting",
    image:
      "https://growingconsulting-africa.com/themes/demo/assets/images/logo-grc.jpg",
    date: "2024 - 2024",
    url: "https://growingconsulting-africa.com",
    role: "Formation Frontend Developer",
  },
];
