"use client";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import ParticulesComponent from "./ParticlesComponent";

import {
    FaReact,
    FaEthereum,
    FaFigma,
  } from "react-icons/fa";
  import { SiNextdotjs, SiSolana } from "react-icons/si";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-background via-dark-blue to-background flex flex-col items-center justify-center text-center">
        <motion.div
            className="mt-10 mb-10 relative w-[245px] h-[245px] rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
        {/* Gradient Layer */}
        <motion.div
            className="absolute inset-0 rounded-full"
            style={{
                background: "linear-gradient(90deg, #ff00ff, #FFBCFF, #071E48, #273184, #071E48, #FFBCFF)",
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

        {/* Image */}
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
        className="text-4xl sm:text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Yundo Rocket
      </motion.div>

      <motion.div
        className="text-lg sm:text-2xl text-light-pink mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Building Web3 experiences, one line of code at a time.
      </motion.div>

      <div className="flex gap-4 mt-8">
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)"}}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1 }}
        >
            <AnimatedButton>
                <a
                    href="#projects"
                    className=""
                >
                    See My Projects
                </a>
            </AnimatedButton>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)"}}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 1.4 }}
        >
            <AnimatedButton restColor="#FFBCFF" borderEnabled={true}>
                <a
                    href="#contact"
                    className=""
                >
                    Contact Me
                </a>
            </AnimatedButton>
        </motion.div>
        
      </div>

      <div className="mt-10 w-full flex items-center justify-center">
        <motion.div
            className="p-5 lg:p-20 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            {/* React */}
            <motion.div className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                onClick={() => window.open("https://react.dev/", "_blank")} 
            >
                <FaReact key="react" className="text-4xl md:text-5xl text-white" />
                <div className="text-white text-sm md:text-base">React</div>
            </motion.div>

            {/* Next.js */}
            <motion.div className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                onClick={() => window.open("https://nextjs.org/", "_blank")} 
            >
                <SiNextdotjs key="next" className="text-4xl md:text-5xl text-white" />
                <div className="text-white text-sm md:text-base">Next.js</div>
            </motion.div>

            {/* Figma */}
            <motion.div className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                onClick={() => window.open("https://www.figma.com/", "_blank")} 
            >
                <FaFigma key="figma" className="text-4xl md:text-5xl text-white" />
                <div className="text-white text-sm md:text-base">Figma</div>
            </motion.div>

            {/* Blender */}
            <motion.div className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                onClick={() => window.open("https://www.blender.org/", "_blank")} 
            >
                <Image
                    src={"/blender-logo.svg"}
                    height={55}
                    width={55}
                    alt="blender-logo"
                    className="w-12 h-12 md:w-14 md:h-14"
                />
                <div className="text-white text-sm md:text-base">Blender</div>
            </motion.div>

            {/* Ethereum */}
            <motion.div className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                onClick={() => window.open("https://ethereum.org/", "_blank")} 
            >
                <FaEthereum key="ethereum" className="text-4xl md:text-5xl text-white" />
                <div className="text-white text-sm md:text-base">Ethereum</div>
            </motion.div>

            {/* Solana */}
            <motion.div className="flex flex-col items-center space-y-2 cursor-pointer"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1}}
                onClick={() => window.open("https://solana.com/", "_blank")} 
            >
                <SiSolana key="solana" className="text-4xl md:text-5xl text-white" />
                <div className="text-white text-sm md:text-base">Solana</div>
            </motion.div>
        </motion.div>
        <ParticulesComponent/>
      </div>
    </section>
  );
};

export default Hero;
