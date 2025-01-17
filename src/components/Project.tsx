"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaEthereum, FaFigma } from "react-icons/fa";
import { SiSolidity, SiNextdotjs } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "BattleBoosters",
    description: "A Web3 application showcasing decentralized solutions.",
    image: "/battleBoosters.png",
    tech: [<FaReact key="react" />, <SiSolidity key="solidity" />, <FaEthereum key="ethereum" />],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An NFT marketplace built with React and Solidity.",
    image: "/project2.png", // Remplace par une image réelle
    tech: [<FaReact key="react" />, <SiNextdotjs key="next" />, <FaFigma key="figma" />],
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A personal portfolio using Next.js and Framer Motion.",
    image: "/project3.png", // Remplace par une image réelle
    tech: [<FaReact key="react" />, <SiNextdotjs key="next" />],
    link: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section className="p-10 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-lg mt-2">A showcase of my featured work and contributions.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-75 transition-opacity duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-sm text-light-pink mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4 text-lg">
                {project.tech.map((icon, index) => (
                  <div key={index} className="text-white">
                    {icon}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-light-pink text-secondary px-4 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
