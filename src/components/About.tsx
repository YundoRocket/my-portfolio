"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaEthereum, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiSolana } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="mt-20 p-10 text-white relative">
        <div
            style={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(20, 20, 20, 0.6)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
            }}
        >
        
            <div className="text-center mb-12">
                <div className="mt-10 text-6xl lg:text-9xl font-bold">About Me</div>
                <div 
                    className="text-xl mt-10 p-4"
                >
                Discover my mission, journey, and vision.
                </div>
            </div>

            {/* Content Layout */}
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Text Section */}
                <motion.div
                    className="p-4 flex items-center justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <div>
                        <h3 className="text-2xl font-bold text-light-pink">My Mission</h3>
                        <p className="text-md mt-4">
                            As a Web3 developer, I aim to revolutionize the decentralized landscape by creating 
                            innovative solutions that bridge technology with real-world applications. My journey 
                            is rooted in a passion for crafting intuitive, cutting-edge platforms that empower 
                            users and communities.
                        </p>
                        <div className="mt-6">
                            <ul className="flex gap-4">
                            <li>
                                <FaReact className="text-4xl text-light-pink" />
                            </li>
                            <li>
                                <SiNextdotjs className="text-4xl text-light-pink" />
                            </li>
                            <li>
                                <SiSolana className="text-4xl text-light-pink" />
                            </li>
                            <li>
                                <FaEthereum className="text-4xl text-light-pink" />
                            </li>
                            <li>
                                <FaFigma className="text-4xl text-light-pink" />
                            </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default About;
