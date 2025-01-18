import { motion } from "framer-motion";
import { FaReact, FaEthereum, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiSolana } from "react-icons/si";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    icon: <FaReact className="text-4xl md:text-5xl text-white" />,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-4xl md:text-5xl text-white" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Figma",
    icon: <FaFigma className="text-4xl md:text-5xl text-white" />,
    link: "https://www.figma.com/",
  },
  {
    name: "Blender",
    icon: (
      <Image
        src={"/blender-logo.svg"}
        height={55}
        width={55}
        alt="blender-logo"
        className="w-12 h-14 md:w-14 md:h-12"
      />
    ),
    link: "https://www.blender.org/",
  },
  {
    name: "Ethereum",
    icon: <FaEthereum className="text-4xl md:text-5xl text-white" />,
    link: "https://ethereum.org/",
  },
  {
    name: "Solana",
    icon: <SiSolana className="text-4xl md:text-5xl text-white" />,
    link: "https://solana.com/",
  },
];

const TechnologiesGrid = () => {
  return (
    <div className="p-5 lg:px-20 relative mt-5 w-full flex items-center justify-center">
      <motion.div
        className="p-5 lg:px-20 mt-10 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(20, 20, 20, 0.6)",
          border: "0.5px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "20px",
          left: "10px",
          right: "10px",
        }}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
            onClick={() => window.open(tech.link, "_blank")}
          >
            {tech.icon}
            <div className="text-white text-sm md:text-base">{tech.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnologiesGrid;
