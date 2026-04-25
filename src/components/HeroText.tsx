"use client";
import { motion } from "motion/react";

const SlideIn = ({ text }: { text: string; className?: string }) => (
  <>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: i * 0.25, ease: "easeOut" }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </>
);

export const HeroText = () => {
  return (
    <div>
      <h1
        className=" absolute  max-md:max-w-100 w-max max-w-[90vw] sm:max-w-248
        mt-16 z-5 text-[clamp(2rem,8vw,4rem)] ml-[clamp(1.5rem,18vw,12rem)]    flex
        flex-col items-start gap-y-[clamp(0.5rem,3vw,3rem)] leading-none  max-sm:ml-0 max-sm:pl-12 max-md:pt-12 max-sm:pt-28"
      >
        <span className="block">
          <SlideIn text="Brand." />
          <span className="text-gray-500">
            <SlideIn text="Design." />
          </span>
          <span className="text-gray-500">
            <SlideIn text="Product." />
          </span>
        </span>
        <span className="block whitespace-nowrap">
          <SlideIn text="In-House Development." />
        </span>
        <span className="block">
          <SlideIn text="& More" />
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
