"use client";
import React, { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  // Track scroll progress for the whole section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // pin while in view
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 1));
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717", "#000000"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <section ref={ref} className="relative h-[400vh] bg-black">
      {/* Sticky inner content */}
        <motion.div
  animate={{
    backgroundColor:
      backgroundColors[activeCard % backgroundColors.length],
  }}
  className="sticky top-0 flex h-screen items-center justify-center space-x-10 p-10"
>
  {/* Text */}
  <div className="max-w-2xl">
    <motion.h2
      key={content[activeCard].title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-bold text-slate-100"
    >
      {content[activeCard].title}
    </motion.h2>
    <motion.p
      key={content[activeCard].description}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-6 max-w-sm text-slate-300"
    >
      {content[activeCard].description}
    </motion.p>
  </div>

  {/* Card */}
  <div
    style={{ background: backgroundGradient }}
    className={cn(
      "hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
      contentClassName
    )}
  >
    {content[activeCard].content ?? null}
  </div>
</motion.div>
    </section>
  );
};
