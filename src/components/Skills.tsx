"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "React", logo: "/react-logo.png" },
  { name: "Next.js", logo: "/nextjs-logo.png" },
  { name: "Figma", logo: "/figma-logo.png" },
  { name: "Blender", logo: "/blender-logo.png" },
  { name: "Ethereum", logo: "/ethereum-logo.png" },
  { name: "Solana", logo: "/solana-logo.png" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative mt-32  mb-32 flex flex-col items-center justify-center text-center">

      {/* Titre */}
      <motion.h2
        className="text-4xl lg:text-6xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      {/* Grille des technologies */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-20 w-20">
              {/* <Image
                src={skill.logo}
                alt={`${skill.name} logo`}
                layout="fill"
                objectFit="contain"
              /> */}
            </div>
            <span className="text-lg font-medium text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
