"use client";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { Code } from "./Code";
import { Section } from "./Section";
import { AdonisjsIcon } from "./icons/AdonisjsIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

export const Skills = () => {
  const t = useTranslations("skills");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skillCardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
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
          className="flex max-md:flex-col gap-4"
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-col gap-4 flex-1 p-4 rounded-lg hover:bg-accent/20 transition-colors duration-300"
            variants={skillCardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={iconVariants}>
              <ReactIcon
                size={42}
                className="animate-spin text-primary"
                style={{ animationDuration: "10s" }}
              />
            </motion.div>
            <motion.h3 
              className="mb-2 text-2xl font-semibold tracking-tight"
              variants={itemVariants}
            >
              {t("react.title")}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={itemVariants}
            >
              {t.rich("react.description", {
                Code: (chunks) => <Code>{chunks}</Code>,
              })}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-4 flex-1 p-4 rounded-lg hover:bg-accent/20 transition-colors duration-300"
            variants={skillCardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={iconVariants}>
              <TailwindIcon size={42} className="text-primary" />
            </motion.div>
            <motion.h3 
              className="mb-2 text-2xl font-semibold tracking-tight"
              variants={itemVariants}
            >
              {t("tailwind.title")}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={itemVariants}
            >
              {t.rich("tailwind.description", {
                Code: (chunks) => <Code>{chunks}</Code>,
                u: (chunks) => <u>{chunks}</u>,
                i: (chunks) => <i>{chunks}</i>,
              })}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-4 flex-1 p-4 rounded-lg hover:bg-accent/20 transition-colors duration-300"
            variants={skillCardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={iconVariants}>
              <AdonisjsIcon size={42} className="text-primary" />
            </motion.div>
            <motion.h3 
              className="mb-2 text-2xl font-semibold tracking-tight"
              variants={itemVariants}
            >
              {t("adonisjs.title")}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={itemVariants}
            >
              {t.rich("adonisjs.description", {
                Code: (chunks) => <Code>{chunks}</Code>,
              })}
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link href={"/skills"}>
            <motion.p 
              className="text-primary/80 text-center hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("seeMore")}
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};