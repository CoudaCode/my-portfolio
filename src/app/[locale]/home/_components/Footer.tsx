"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";

export const Footer = () => {
  const footerVariants = {
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

  return (
    <motion.footer 
      className="bg-card"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <Section className="py-8">
        <motion.p 
          className="text-muted-foreground text-sm text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          @Copywrite 2024 Diarassouba Mamadou
        </motion.p>
      </Section>
    </motion.footer>
  );
};