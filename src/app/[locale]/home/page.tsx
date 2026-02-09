"use client";
import { motion, type Variants } from "framer-motion";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";
import { Status } from "./_components/StatusSection";

export default function Home() {
  const pageVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Header />
      </motion.div>
      
      <Spacing size="md" />
      
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>
      
      <Spacing size="md" />
      
      <motion.div variants={sectionVariants}>
        <Status />
      </motion.div>
      
      <Spacing size="md" />
      
      <motion.div variants={sectionVariants}>
        <Skills />
      </motion.div>
      
      <Spacing size="md" />
      
      <motion.div variants={sectionVariants}>
        <Contact />
      </motion.div>
      
      <Spacing size="md" />
      
      <motion.div variants={sectionVariants}>
        <Footer />
      </motion.div>
    </motion.main>
  );
}