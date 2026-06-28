"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";

export function ScrollCoin() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "88vh"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1440]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0]
  );

  const springY = useSpring(y, { stiffness: 60, damping: 20 });
  const springRotate = useSpring(rotate, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      style={{ y: springY, opacity }}
      className="fixed right-6 top-12 z-40 pointer-events-none hidden lg:block"
    >
      <motion.div
        style={{ rotate: springRotate }}
        className="w-10 h-10 relative"
      >
        {/* Coin body */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
        >
          <defs>
            <radialGradient id="coinFace" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#92400e" />
            </radialGradient>
            <radialGradient id="coinEdge" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#78350f" />
            </radialGradient>
          </defs>
          {/* Edge / depth */}
          <ellipse cx="20" cy="22" rx="18" ry="17" fill="url(#coinEdge)" />
          {/* Face */}
          <ellipse cx="20" cy="19" rx="18" ry="17" fill="url(#coinFace)" />
          {/* Inner ring */}
          <ellipse
            cx="20"
            cy="19"
            rx="14"
            ry="13"
            fill="none"
            stroke="#ca8a04"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* $ symbol */}
          <text
            x="20"
            y="25"
            textAnchor="middle"
            fontSize="13"
            fontWeight="bold"
            fontFamily="system-ui, sans-serif"
            fill="#78350f"
            opacity="0.9"
          >
            $
          </text>
          {/* Shine */}
          <ellipse
            cx="14"
            cy="13"
            rx="5"
            ry="3"
            fill="white"
            opacity="0.25"
            transform="rotate(-30 14 13)"
          />
        </svg>
      </motion.div>

      {/* Trail dots */}
      <motion.div
        style={{ opacity }}
        className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 mt-1"
      >
        {[0.5, 0.3, 0.15].map((op, i) => (
          <div
            key={i}
            className="w-0.5 h-0.5 rounded-full bg-yellow-400"
            style={{ opacity: op }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
