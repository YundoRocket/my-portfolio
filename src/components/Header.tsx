"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import { FaGripLines } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-secondary text-white"
      style={{
        borderBottom: "1px solid transparent",
        borderImage: "linear-gradient(90deg, var(--primary), var(--light-pink), var(--primary)) 1",
      }}
    >
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">YundoRocket</Link>
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
              <Link href="/about">About</Link>
            </AnimatedButton>
          </li>
          <li>
            <AnimatedButton>
              <Link href="/projects">Projects</Link>
            </AnimatedButton>
          </li>
        </ul>

        {/* Menu Hamburger */}
        <button
          className="block sm:hidden text-lg"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span>
            <FaGripLines className="text-white" />
          </span>
        </button>

        {/* Navigation Mobile */}
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-secondary text-white flex flex-col items-center gap-4 py-4 z-50"
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              borderBottom: "1px solid transparent",
              borderImage: "linear-gradient(90deg, var(--primary), var(--light-pink), var(--primary)) 1",
            }}
          >
            <Link
              href="/"
              className="text-lg font-bold hover:text-white"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-bold hover:text-white"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-lg font-bold hover:text-white"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
