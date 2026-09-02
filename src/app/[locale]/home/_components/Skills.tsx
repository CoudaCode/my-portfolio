"use client";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { motion, type Variants } from "framer-motion";
import { siNestjs, siNextdotjs, siShadcnui } from "simple-icons/icons";
import { Code } from "./Code";
import { Section } from "./Section";
import { SimpleIcon } from "./icons/SimpleIcon";

export const Skills = () => {
  const t = useTranslations("skills");

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

  const skillCardVariants: Variants = {
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

  const iconVariants: Variants = {
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
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={iconVariants}>
              <SimpleIcon icon={siNextdotjs} size={42} className="text-primary" />
            </motion.div>
            <motion.h3 
              className="mb-2 text-2xl font-semibold tracking-tight"
              variants={itemVariants}
            >
              {t("nextjs.title")}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={itemVariants}
            >
              {t.rich("nextjs.description", {
                Code: (chunks) => <Code>{chunks}</Code>,
              })}
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-4 flex-1 p-4 rounded-lg hover:bg-accent/20 transition-colors duration-300"
            variants={skillCardVariants}
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={iconVariants}>
              <SimpleIcon icon={siShadcnui} size={42} className="text-primary" />
            </motion.div>
            <motion.h3 
              className="mb-2 text-2xl font-semibold tracking-tight"
              variants={itemVariants}
            >
              {t("shadcn.title")}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={itemVariants}
            >
              {t.rich("shadcn.description", {
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
              y: -2,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div variants={iconVariants}>
              <SimpleIcon icon={siNestjs} size={42} className="text-primary" />
            </motion.div>
            <motion.h3 
              className="mb-2 text-2xl font-semibold tracking-tight"
              variants={itemVariants}
            >
              {t("nestjs.title")}
            </motion.h3>
            <motion.p 
              className="text-sm text-muted-foreground"
              variants={itemVariants}
            >
              {t.rich("nestjs.description", {
                Code: (chunks) => <Code>{chunks}</Code>,
              })}
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link href={"/skills"}>
            <motion.p 
              className="text-primary/80 text-center hover:underline"
            >
              {t("seeMore")}
            </motion.p>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
};
