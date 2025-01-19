"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  return (
    <section id="about" className="text-white relative">
      {/* Header Section */}
      <div className="text-center mt-20">
        <motion.h1 className="text-6xl lg:text-9xl font-bold">About Me</motion.h1>
        <motion.p className="text-xl mt-10 p-4">
          Discover my mission, journey, and vision.
        </motion.p>
      </div>

      {/* Scrollable Horizontal Section */}
      <HorizontalScrollSection />
    </section>
  );
};

const HorizontalScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef, // Définit la cible pour détecter le scroll
  });

  // Conversion du scroll vertical en mouvement horizontal
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  const cards = [
    {
      title: "A Lifelong Fascination with Technology",
      text: "Technology has always fascinated me, especially cyberpunk worlds with their futuristic and dystopian visions. These worlds inspired me to explore how technology can transform our daily lives.",
      image: "/cyberpunk-city.webp",
    },
    {
      title: "Discovering Blockchain: A 2016 Journey",
      text: "I discovered blockchain in 2016, and since then, I’ve been closely following its evolution. I’ve explored its narratives, from Bitcoin to the rise of NFTs and DeFi.",
      image: "/blockchain-journey.webp",
    },
    {
      title: "Mastering Blockchain Fundamentals",
      text: "I have a solid understanding of Layer 1 and Layer 2 networks, bridges, and DeFi protocols. This knowledge allows me to build innovative and robust projects.",
      image: "/blockchain-fundamentals.webp",
    },
    {
      title: "Fluent in Three Languages, Connected Worldwide",
      text: "Speaking multiple languages is one of my strengths: I am fluent in French, Spanish, and English. This helps me collaborate with teams and communities around the world.",
      image: "/languages.webp",
    },
    {
      title: "Crafting Elegant Code and Interfaces",
      text: "I love coding and solving complex problems. As a frontend developer, I create intuitive and elegant user interfaces.",
      image: "/coding.webp",
    },
    {
      title: "Bringing Ideas to Life in 3D",
      text: "I also enjoy expressing my creativity through 3D design, using Blender to model unique worlds and objects. This blend of technical and artistic skills inspires me every day.",
      image: "/blender-3d.webp",
    },
    {
      title: "Endless Curiosity and Lifelong Learning",
      text: "My curiosity knows no limits: I constantly dive into new topics to improve myself and explore emerging trends.",
      image: "/curiosity-learning.webp",
    },
    {
      title: "Shaping the Future of Web3 and Beyond",
      text: "With my versatility and passion for innovation, I aim to push boundaries and contribute to the future of Web3 and creative technologies.",
      image: "/future-web3.webp",
    },
  ];
  

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] text-white bg-contain bg-no-repeat"
      style={{
        backgroundImage: "url('/lines.svg')",
      }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Horizontal Scrolling Cards */}
        <motion.div
          style={{ x }} // Lie le mouvement horizontal au scroll vertical
          className="flex gap-10 px-10 snap-x snap-mandatory"
        >
          {cards.map((card, index) => (
            <Card key={index} title={card.title} text={card.text} image={card.image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ title, text, image }) => {
  return (
    <motion.div
      className="group h-[500px] w-[380px] lg:w-[1200px] snap-center flex-shrink-0 overflow-hidden flex flex-col lg:flex-row"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(20, 20, 20, 0.6)",
        border: "0.5px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
      }}
    >
      {/* Image Section */}
      <div
        className="h-64 lg:h-full lg:w-1/2 bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      {/* Text Section */}
      <motion.div className="flex flex-col items-start justify-center p-4 space-y-4 lg:w-1/2">
        <div className="text-xl lg:text-3xl font-bold">{title}</div>
        <div className="text-sm lg:text-lg text-light-pink">{text}</div>
      </motion.div>
    </motion.div>
  );
};

export default About;
