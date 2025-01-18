"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticulesComponents from "./ParticulesComponents";
import TechnologiesGrid from "./TechnologiesGrid";

const Hero = () => {
  return (
    <section className="relative mt-16 flex flex-col items-center justify-center text-center h-screen">
        <div className="absolute inset-0 w-full h-full pointer-events-none"><ParticulesComponents /></div>
        <motion.div
            className="mt-10 mb-10 relative w-[245px] h-[245px] rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "linear-gradient(90deg, #ffffff, #273184, #ffffff, #273184, #ffffff, #273184)",
                    backgroundSize: "260% 260%",
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "25% 45%", "50% 50%", "75% 25%", "100% 50%", "80% 30%", "23% 59%", "10% 39%", ],
                }}
                transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />

            <div className="absolute inset-0.5 rounded-full">
                <Image
                    src="/yundoRocket.png"
                    height={250}
                    width={250}
                    alt="Yundo Rocket"
                    className="rounded-full"
                />
            </div>

        </motion.div>
        <motion.div
            className="relative text-4xl sm:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            Hi, I&apos;m Yundo Rocket
        </motion.div>

        <motion.div
            className="text-lg sm:text-2xl text-light-pink mt-4 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <span className="relative inline-block">
                <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-light-pink via-white to-blue-200 bg-clip-text text-transparent"
                    style={{
                        backgroundSize: "300% 300%", 
                    }}
                    animate={{
                        backgroundPosition: ["300% 0", "-300% 0"],
                    }}
                    transition={{
                        duration: 10,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    Building Web3 experiences, one line of code at a time.
                </motion.span>
                <span className="opacity-0">Building Web3 experiences, one line of code at a time.</span>
            </span>
        </motion.div>

      <div className="flex gap-4 mt-8">
        <motion.a
            initial={{ opacity: 0, filter: "blur(10px)"}}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center"
            href="#projects"
        >
            <motion.div
                className="px-4 py-2 font-bold rounded-full  text-white"
                style={{
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 188, 255, 0.1)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "0.5px solid rgba(255, 188, 255, 0.2)",
                }}
                whileHover={{scale: 0.95}}
                whileTap={{scale: 1.05}}
            >
                
                See My Projects
            </motion.div>
        </motion.a>
        
        <motion.a
            initial={{ opacity: 0, filter: "blur(10px)"}}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center justify-center"
            href="#contact"
        >
            <motion.div
                className="px-4 py-2 font-bold rounded-full  text-white"
                style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    backgroundColor: "rgba(20, 20, 20, 0.6)", 
                    border: "0.5px solid rgba(255, 255, 255, 0.2)",
                }}
                whileHover={{scale: 0.95}}
                whileTap={{scale: 1.05}}
            >
                
                Contact Me
            </motion.div>
        </motion.a>
      </div>
      <TechnologiesGrid />
    </section>
  );
};

export default Hero;
