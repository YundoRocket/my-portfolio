"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Front-end Languages",
    items: ["HTML", "CSS", "JavaScript", "Typescript"],
    description: "Building modern, responsive, and accessible interfaces with a solid foundation in HTML, SCSS, and JavaScript.",
  },
  {
    category: "JavaScript Libraries",
    items: ["GSAP", "Framer Motion", "Tailwind CSS", "TsParticles"],
    description:
      "Leveraging libraries for complex animations, dynamic interfaces, and seamless user experiences.",
  },
  {
    category: "3D Software",
    items: ["Blender"],
    description:
      "Modeling, texturing, and creating 3D objects for immersive projects and visualizations.",
  },
  {
    category: "JavaScript Frameworks",
    items: ["React", "Next.js"],
    description:
      "Developing Single Page Applications (SPA) and Server-Side Rendered (SSR) websites optimized for SEO and performance.",
  },
  {
    category: "Blockchain Technologies",
    items: ["Solana", "Ethereum"],
    description:
      "Integrating smart contracts, interacting with Web3 wallets, and building decentralized applications.",
  },
  {
    category: "Design Tools",
    items: ["Figma"],
    description: "Designing intuitive user interfaces and crafting visual elements with industry-standard tools.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mb-32 flex flex-col items-center justify-center text-center text-white"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl lg:text-6xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6"
            style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(20, 20, 20, 0.6)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "20px",
              }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-light-pink mb-4">{skill.category}</h3>


            {/* Skill Items */}
            <ul className="grid grid-cols-2 gap-4 justify-center w-full text-lg">
              {skill.items.map((item, i) => (
                <li key={i} 
                    className={`font-bold ${
                        skill.items.length === 1 ? "col-span-2 text-center" : ""
                      }`}                
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
