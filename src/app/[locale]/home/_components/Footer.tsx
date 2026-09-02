"use client";
import { motion, type Variants } from "framer-motion";
import { Section } from "./Section";

export const Footer = () => {
  const footerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
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
    <motion.footer
      className="bg-card"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <Section className="py-8">
        <motion.p className="text-muted-foreground text-sm text-center">
          @Copyright 2026 Diarassouba Mamadou
        </motion.p>
      </Section>
    </motion.footer>
  );
};
