"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section";

export const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header 
      className="sticky top-0 py-4 backdrop-blur-sm bg-background/80 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Section className="flex items-baseline">
        <motion.div variants={logoVariants}>
          <Link href="/">
            <motion.h1 
              className="text-lg font-bold text-primary hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              couda.dm
            </motion.h1>
          </Link>
        </motion.div>
        
        <div className="flex-1" />
        
        <motion.ul 
          className="flex items-center gap-2"
          variants={containerVariants}
        >
          <motion.li variants={itemVariants}>
            <Link
              className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
              href="https://github.com/coudacode"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon size={12} className="text-foreground" />
              </motion.div>
            </Link>
          </motion.li>
          
          <motion.li variants={itemVariants}>
            <Link
              className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
              href="https://www.facebook.com/diara.madou.5205"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FacebookIcon size={12} className="text-foreground" />
              </motion.div>
            </Link>
          </motion.li>
          
          <motion.li variants={itemVariants}>
            <Link
              className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
              href="https://www.linkedin.com/in/mamadou-diarassouba-558493239/"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedinIcon size={12} className="text-foreground" />
              </motion.div>
            </Link>
          </motion.li>
        </motion.ul>
      </Section>
    </motion.header>
  );
};