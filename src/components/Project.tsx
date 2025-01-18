"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaReact, FaEthereum, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiSolana } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Girasol",
    description: "Girasol is a fun and simple decentralized prediction market on Solana. Predict whether SOL price will rise, fall, or stay within a range (Flat) – guess correctly to win.",
    image: "/girasol-screenshot.png",
    logo: "/girasol-logo.svg",
    tech: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiSolana key="solana" />],
    link: "https://girasol.fun",
  },
  {
    id: 2,
    title: "BattleBoosters",
    description: "BattleBoosters is a fantasy MMA NFT card game on Solana that offers players a thrilling, immersive experience based on real MMA league fights.",
    image: "/battleBoosters-screenshot.png",
    logo: "/battleBoosters-logo.svg",
    tech: [<FaReact key="react" />, <SiNextdotjs key="next" />, <SiSolana key="solana" />, <Image src={"blender-logo.svg"} height={20} width={20} alt="blender"/>],
    link: "https://BattleBoosters.com",
  },
  {
    id: 3,
    title: "LoTerra",
    description: "LoTerra was a decentralized lottery platform powered by LOTA token holders, enabling fair and transparent gaming experiences on the Terra blockchain.",
    image: "/loterra-screenshot.png",
    logo: "/loterra-logo.svg",
    tech: [<FaReact key="react" />, <Image src={"terraLogo.svg"} height={18} width={18} alt="terra"/>],
    link: "https://github.com/loterra",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Observe the section using the Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects" className="p-10 text-white relative bg-gradient-to-b from-transparent via-secondary to-transparent bg-cover"
        style={{
            backgroundImage: "url('/abstractLines.svg')",
        }}
    >
      <div className="text-center mb-12">
        <div className="text-6xl lg:text-9xl font-bold">Projects</div>
        <div 
            className="text-xl mt-10 p-4"
        >
            A showcase of my featured work and contributions.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-lg shadow-lg overflow-hidden relative group"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(20, 20, 20, 0.6)",
              border: "0.5px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: project.id * 0.2 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <div className="flex items-center justify-start space-x-2">
                    <Image
                        src={project.logo}
                        alt={project.title}
                        height={40}
                        width={40}
                    />
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              <p className="text-sm text-light-pink mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4 text-lg">
                {project.tech.map((icon, index) => (
                  <div key={index} className="text-white">
                    {icon}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                
                <motion.a
                    className="flex items-center justify-start"
                    href={project.link}
                    target="_blank"
                >
                    <motion.div
                        className="px-4 py-2 rounded-full font-bold text-sm "
                        style={{
                            backdropFilter: "blur(10px)",
                            backgroundColor: "rgba(255, 188, 255, 0.1)",
                            WebkitBackdropFilter: "blur(10px)",
                            border: "0.5px solid rgba(255, 188, 255, 0.2)",
                        }}
                        whileHover={{scale: 0.95}}
                        whileTap={{scale: 1.05}}
                    >
                        View details
                    </motion.div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
