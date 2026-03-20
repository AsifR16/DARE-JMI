"use client";
import { motion } from "framer-motion";

export default function ShootingText({ text = "PROJECT",className="text-6xl", type="chars"}) {
  // Split text into an array of characters
  const items = type === "words" ? text.split(" ") : Array.from(text);

  // Container variants to orchestrate the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  // Individual character variants
  const childVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200, // High stiffness for that "shot" feel
      },
    },
    hidden: {
      opacity: 0,
      x: 100, // Start 100px to the right
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", overflow: "hidden" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className={`text-[#00E5FF] ${className}`}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
          className={type === "words" ? "mr-2" : "inline-block"}
        >
          {type === "chars" ? (item === " " ? "\u00A0" : item) : item}
        </motion.span>
      ))}
    </motion.h1>
  );
}