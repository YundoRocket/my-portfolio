"use client";
import { motion, Variants } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  restColor?: string;
  hoverColor?: string;
  borderEnabled?: boolean;
};

const AnimatedButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  restColor = "#FFFFFF",
  hoverColor = "#080308",
  borderEnabled = false, 
}) => {
  const backgroundVariants: Variants = {
    rest: { scale: 0 },
    hover: { scale: 1 },
  };

  const textVariants: Variants = {
    rest: { color: restColor },
    hover: { color: hoverColor },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden px-3 py-2 font-bold rounded-full ${
        borderEnabled ? `border-2` : ""
      }`}
      style={{
        borderColor: borderEnabled ? restColor : "transparent",
      }}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-light-pink z-0 rounded-full"
        variants={backgroundVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Text Layer */}
      <motion.span
        className="relative z-10"
        variants={textVariants}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;
