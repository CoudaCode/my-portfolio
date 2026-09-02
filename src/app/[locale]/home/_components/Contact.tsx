"use client";
import { Badge } from "@/components/ui/badge";
import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { ContactMe } from "./ContactMe";
import { Section } from "./Section";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const Contact = () => {
  const t = useTranslations("contact");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const contactCardVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className="flex flex-col items-start gap-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col gap-4"
      >
        <motion.div variants={itemVariants}>
          <Badge variant="outline">{t("badge")}</Badge>
        </motion.div>

        <motion.h2
          className="pb-2 text-3xl font-semibold tracking-tight first:mt-0"
          variants={itemVariants}
        >
          {t("title")}
        </motion.h2>

        <motion.div
          className="flex max-md:flex-col gap-4 w-full"
          variants={containerVariants}
        >
          <motion.div
            variants={contactCardVariants}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            <ContactMe
              name={t("contacts.email.name")}
              url="mailto:couda.dm@gmail.com"
              description={t("contacts.email.description")}
              mediumImage="https://img.freepik.com/vecteurs-premium/icones-google-icones-gmail-illustration-vectorielle-modifiable_981536-461.jpg?semt=ais_hybrid"
              image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
            />
          </motion.div>

          <motion.div
            variants={contactCardVariants}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            <ContactMe
              url="https://www.linkedin.com/in/mamadou-diarassouba-558493239/"
              name={t("contacts.linkedin.name")}
              description={t("contacts.linkedin.description")}
              mediumImage="https://cdn-icons-png.flaticon.com/256/174/174857.png"
              image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
            />
          </motion.div>

          <motion.div
            variants={contactCardVariants}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
          >
            <ContactMe
              url="https://wa.me/2250747185291"
              name={t("contacts.whatsapp.name")}
              description={t("contacts.whatsapp.description")}
              mediumImage=""
              mediumIcon={<WhatsAppIcon size={16} />}
              image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
