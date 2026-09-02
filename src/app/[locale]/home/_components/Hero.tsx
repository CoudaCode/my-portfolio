"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Code } from "./Code";
import { Section } from "./Section";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { TypeScriptIcon } from "./icons/TypeScript";
import { IvoryCoastFlagIcon } from "./icons/IvoryCoastFlagIcon";

export const Hero = () => {
  const t = useTranslations("hero");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const textVariants: Variants = {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const codeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <motion.div 
        className="flex-[3] w-full flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="font-caption font-bold text-5xl text-primary"
          variants={textVariants}
        >
          {t("name")}
        </motion.h2>
        
        <motion.h3 
          className="text-2xl font-caption text-primary/60"
          variants={textVariants}
        >
          {t("title")}
        </motion.h3>
        
        <motion.p 
          className="text-base"
          variants={textVariants}
        >
          {t("description.part1")}{" "}
          <motion.span variants={codeVariants}>
            <Code className="inline-flex items-center gap-1">
              <TypeScriptIcon size={16} className="inline" />
              {t("description.typescript")}
            </Code>
          </motion.span>
          {t("description.part2")}{" "}
          <motion.span variants={codeVariants}>
            <Code className="inline-flex items-center gap-1">
              <JavaScriptIcon size={16} className="inline" />
              {t("description.javascript")}
            </Code>
          </motion.span>
          {t("description.part3")}{" "}
          <Link href={"/"}>
            <motion.span variants={codeVariants}>
              <Code className="inline-flex items-center gap-1">
                <IvoryCoastFlagIcon size={16} className="inline shrink-0" />
                {t("description.location")}
              </Code>
            </motion.span>
          </Link>
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="flex-[2] max-md:m-auto ml-auto"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="https://avatars.githubusercontent.com/u/119653418?v=4"
          alt={t("name")}
          className="w-full h-auto rounded-full maw-w-xs max-md:w-56 shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </motion.div>
    </Section>
  );
};
