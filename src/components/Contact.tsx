"use client";
import { motion } from "framer-motion";
import { FaTelegram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const contacts = [
    {
      name: "X",
      icon: <FaXTwitter />,
      link: "https://x.com/YonduRocket", 
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      link: "https://t.me/YundoRocket",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/damien-rojo-b8a43227b",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/YundoRocket",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:0xxmr@proton.me", 
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center text-center py-16 text-white"
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(20, 20, 20, 0.6)",
        border: "0.5px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
      }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl lg:text-6xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      {/* Contact Icons */}
      <motion.div className="flex gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl flex items-center justify-center w-16 h-16 rounded-full hover:bg-light-pink transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            title={contact.name}
            
          >
            {contact.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        className="mt-8 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: contacts.length * 0.1 }}
      >
        Feel free to reach out to me on any of these platforms!
      </motion.p>
    </section>
  );
};

export default Contact;
