import { motion } from "motion/react";
import { logo } from "../assets";

// Total cycle: 6s draw+hold, then restart
const DRAW_DURATION = 3;
const HOLD_DURATION = 1;
const FADE_DURATION = 0.5;
const TOTAL = DRAW_DURATION + HOLD_DURATION + FADE_DURATION;

export const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* G Letter — draws in, holds, fades out */}
      <motion.svg
        width="255"
        height="378"
        viewBox="0 0 255 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <motion.path
          d="M119.04 1C140.529 1 159.295 5.69134 175.336 15.074C191.68 24.4567 203.787 36.2607 211.656 50.486V5.086H253.424V259.326C253.424 282.026 248.581 302.153 238.896 319.708C229.211 337.565 215.288 351.488 197.128 361.476C179.271 371.464 158.387 376.458 134.476 376.458C101.788 376.458 74.548 368.74 52.756 353.304C30.964 337.868 18.1007 316.833 14.166 290.198H55.026C59.566 305.331 68.9487 317.438 83.174 326.518C97.3994 335.901 114.5 340.592 134.476 340.592C157.176 340.592 175.639 333.479 189.864 319.254C204.392 305.029 211.656 285.053 211.656 259.326V207.116C203.484 221.644 191.377 233.751 175.336 243.436C159.295 253.121 140.529 257.964 119.04 257.964C96.9454 257.964 76.818 252.516 58.658 241.62C40.8007 230.724 26.7267 215.439 16.436 195.766C6.14536 176.093 1.00003 153.695 1.00003 128.574C1.00003 103.15 6.14536 80.904 16.436 61.836C26.7267 42.4653 40.8007 27.4833 58.658 16.89C76.818 6.29667 96.9454 1 119.04 1ZM211.656 129.028C211.656 110.263 207.873 93.9187 200.306 79.996C192.739 66.0733 182.449 55.48 169.434 48.216C156.722 40.6493 142.648 36.866 127.212 36.866C111.776 36.866 97.702 40.498 84.99 47.762C72.278 55.026 62.1387 65.6194 54.572 79.542C47.0054 93.4647 43.222 109.809 43.222 128.574C43.222 147.642 47.0054 164.289 54.572 178.514C62.1387 192.437 72.278 203.181 84.99 210.748C97.702 218.012 111.776 221.644 127.212 221.644C142.648 221.644 156.722 218.012 169.434 210.748C182.449 203.181 192.739 192.437 200.306 178.514C207.873 164.289 211.656 147.793 211.656 129.028Z"
          stroke="#363636"
          strokeLinecap="round"
          fill="transparent"
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [1, 1, 1, 0],
          }}
          transition={{
            duration: TOTAL,
            ease: "easeInOut",
            times: [
              0, // start
              DRAW_DURATION / TOTAL, // fully drawn
              (DRAW_DURATION + HOLD_DURATION) / TOTAL, // hold ends
              1, // fade out
            ],
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
        />
      </motion.svg>

      {/* Logo — fades in while G is held, exits with G */}
      <motion.img
        src={logo}
        className="absolute z-10"
        animate={{
          opacity: [0, 0, 1, 1, 0],
          y: [8, 8, 0, 0, 8],
        }}
        transition={{
          duration: TOTAL,
          ease: "easeOut",
          times: [
            0, // hidden at start
            DRAW_DURATION / TOTAL, // still hidden while drawing
            (DRAW_DURATION + 0.3) / TOTAL, // fades in quickly
            (DRAW_DURATION + HOLD_DURATION) / TOTAL, // holds
            1, // exits with G
          ],
          repeat: Infinity,
          repeatDelay: 0.3,
        }}
      />
    </div>
  );
};
