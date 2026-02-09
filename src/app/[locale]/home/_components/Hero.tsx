"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code } from "./Code";
import { Section } from "./Section";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { TypeScriptIcon } from "./icons/TypeScript";

export const Hero = () => {
  const t = useTranslations("hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
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
          whileHover={{ scale: 1.02 }}
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
          <motion.span variants={codeVariants} whileHover={{ scale: 1.05 }}>
            <Code className="inline-flex items-center gap-1">
              <TypeScriptIcon size={16} className="inline" />
              {t("description.typescript")}
            </Code>
          </motion.span>
          {t("description.part2")}{" "}
          <motion.span variants={codeVariants} whileHover={{ scale: 1.05 }}>
            <Code className="inline-flex items-center gap-1">
              <JavaScriptIcon size={16} className="inline" />
              {t("description.javascript")}
            </Code>
          </motion.span>
          {t("description.part3")}{" "}
          <Link href={"/"}>
            <motion.span variants={codeVariants} whileHover={{ scale: 1.05 }}>
              <Code className="inline-flex items-center gap-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/langfr-338px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
                  alt="ivory coast"
                  style={{ width: 16, height: "auto" }}
                />
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
        whileHover={{ 
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.3 }
        }}
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