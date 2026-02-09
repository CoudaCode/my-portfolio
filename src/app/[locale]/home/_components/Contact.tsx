"use client";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { ContactMe } from "./ContactMe";
import { Section } from "./Section";

export const Contact = () => {
  const t = useTranslations("contact");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
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
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
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
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
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
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ContactMe
              url="https://wa.me/2250747185291"
              name={t("contacts.whatsapp.name")}
              description={t("contacts.whatsapp.description")}
              mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
              image={"https://avatars.githubusercontent.com/u/119653418?v=4"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};