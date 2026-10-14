"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type As = "div" | "li" | "article" | "span";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  as?: As;
  once?: boolean;
  amount?: number;
}

const MotionTag = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  span: motion.span,
} as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  duration = 0.7,
  as = "div",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const Tag = MotionTag[as] as typeof motion.div;
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.2,
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 24,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: As;
}) {
  const Tag = MotionTag[as] as typeof motion.div;
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
