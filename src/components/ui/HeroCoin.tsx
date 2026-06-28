"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "framer-motion";

export function HeroCoin() {
  const [scope, animateCoin] = useAnimate();
  const hasAnimated = useRef(false);
  const [showTrail, setShowTrail] = useState(true);
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const run = async () => {
      await animateCoin(scope.current, { opacity: 1 }, { duration: 0 });

      // Fall from top + 3 full rotations — lands just above the button (y:68)
      await animateCoin(
        scope.current,
        { y: 68, rotate: 1080 },
        { duration: 1.0, ease: [0.12, 0, 0.28, 1] }
      );

      setShowTrail(false);

      // First bounce up
      await animateCoin(
        scope.current,
        { y: 38, rotate: 1130, scale: 1.07 },
        { duration: 0.18, ease: "easeOut" }
      );
      // Settle on button
      await animateCoin(
        scope.current,
        { y: 68, rotate: 1155, scale: 1 },
        { duration: 0.22, ease: [0.5, 0, 1, 1] }
      );
      // Tiny second bounce
      await animateCoin(
        scope.current,
        { y: 56 },
        { duration: 0.11, ease: "easeOut" }
      );
      await animateCoin(
        scope.current,
        { y: 68 },
        { duration: 0.13, ease: "easeIn" }
      );

      setLanded(true);

      // Gentle idle float
      animateCoin(
        scope.current,
        { y: [68, 59, 68] },
        { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
      );
    };

    const t = setTimeout(run, 300);
    return () => clearTimeout(t);
  }, [animateCoin, scope]);

  return (
    <>
      {/* Motion trail streak while falling */}
      {showTrail && (
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0, 0.4, 0], scaleY: [0, 1, 0] }}
          transition={{ duration: 1.0, delay: 0.3, ease: "easeIn" }}
          className="absolute left-[calc(50%-1px)] -top-[260px] w-0.5 h-[260px] bg-gradient-to-b from-transparent via-yellow-400/60 to-yellow-400 origin-top pointer-events-none"
        />
      )}

      {/* The coin */}
      <motion.div
        ref={scope}
        initial={{ opacity: 0, y: -320, rotate: 0, scale: 1 }}
        className="absolute left-[calc(50%-36px)] -top-20 z-20 pointer-events-none select-none"
      >
        {/* Pulsing glow ring after landing */}
        {landed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.55, 0], scale: [0.5, 2.4, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
            className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl pointer-events-none"
          />
        )}

        {/* SVG Coin */}
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter:
              "drop-shadow(0 0 20px rgba(234,179,8,0.6)) drop-shadow(0 6px 12px rgba(0,0,0,0.7))",
          }}
        >
          <defs>
            <radialGradient id="cFace" cx="38%" cy="30%" r="65%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fef9c3" />
              <stop offset="25%" stopColor="#fde047" />
              <stop offset="60%" stopColor="#ca8a04" />
              <stop offset="100%" stopColor="#92400e" />
            </radialGradient>
            <radialGradient id="cEdge" cx="50%" cy="65%" r="55%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#3b1600" />
            </radialGradient>
          </defs>
          {/* 3D edge */}
          <ellipse cx="36" cy="40" rx="33" ry="30" fill="url(#cEdge)" />
          {/* Face */}
          <ellipse cx="36" cy="34" rx="33" ry="30" fill="url(#cFace)" />
          {/* Inner ring */}
          <ellipse
            cx="36"
            cy="34"
            rx="26.5"
            ry="23.5"
            fill="none"
            stroke="#a16207"
            strokeWidth="1.5"
            opacity="0.55"
          />
          {/* Dollar sign */}
          <text
            x="36"
            y="46"
            textAnchor="middle"
            fontSize="28"
            fontWeight="900"
            fontFamily="Georgia, 'Times New Roman', serif"
            fill="#78350f"
            opacity="0.92"
          >
            $
          </text>
          {/* Primary shine */}
          <ellipse
            cx="25"
            cy="20"
            rx="9"
            ry="4.5"
            fill="white"
            opacity="0.32"
            transform="rotate(-35 25 20)"
          />
          {/* Secondary shine */}
          <ellipse cx="48" cy="47" rx="4" ry="2" fill="white" opacity="0.12" />
        </svg>

        {/* Ground shadow */}
        <motion.div
          initial={{ scaleX: 0.2, opacity: 0 }}
          animate={{ scaleX: landed ? 1 : 0.2, opacity: landed ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-2 bg-yellow-500 rounded-full blur-md mx-auto -mt-1"
        />
      </motion.div>
    </>
  );
}
