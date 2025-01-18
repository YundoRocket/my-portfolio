"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      className="absolute z-50 top-8 text-white"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(20, 20, 20, 0.6)",
        border: "0.5px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        left: "10px",
        right: "10px",
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Navigation Desktop */}
        <ul className="hidden sm:flex gap-6 text-lg">
          <li>
            <AnimatedButton>
              <Link href="/">Home</Link>
            </AnimatedButton>
          </li>
          <li>
            <AnimatedButton>
              <Link href="#about">About</Link>
            </AnimatedButton>
          </li>
          <li>
            <AnimatedButton>
              <Link href="#projects">Projects</Link>
            </AnimatedButton>
          </li>
        </ul>

        {/* Menu Hamburger */}
        <div className="block sm:hidden relative">
          <motion.button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8"
          >
            <motion.span
              className="block w-6 h-0.5 bg-white mb-1"
              animate={isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-white mt-1"
              animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Navigation Mobile */}
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-12 right-0 w-[200px] text-white flex flex-col items-center gap-4 py-4 rounded-b-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(20, 20, 20, 0.6)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              <Link
                href="/"
                className="text-lg font-bold hover:text-light-pink"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-lg font-bold hover:text-light-pink"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-lg font-bold hover:text-light-pink"
                onClick={toggleMobileMenu}
              >
                Projects
              </Link>
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
