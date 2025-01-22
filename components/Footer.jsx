import React from "react";
import Image from "next/image";
import logo from "@/public/ZF-dark-noBack.png";
import darkLogo from "@/public/ZNavbarLogo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = ({ toggle }) => {
    const isDarkMode = toggle === "dark";
  
    const bgClass = isDarkMode
      ? "bg-[#2F2A26] text-[#FFF8E1]"
      : "bg-[#FFF8E1] text-[#2F2A26]";
    const hoverClass = isDarkMode ? "hover:text-[#A0A05E]" : "hover:text-[#53532F]";
    const iconHoverClass = isDarkMode ? "hover:text-[#A0A05E]" : "hover:text-[#53532F]";
  
    return (
      <footer className={`py-10 ${bgClass}`}>
        <motion.a href="#top" className="text-center mb-6" initial={{ opacity: 0, y: -20}} whileInView={{ opacity: 1, y:0}} transition={{ duration: 0.6, ease: "easeOut"}}>
          <Image
            src={isDarkMode ? logo : darkLogo}
            className="w-28 cursor-pointer mx-auto hover:scale-110 transition-transform duration-300"
            width={100}
            height={100}
            alt="Zelalem's Logo"
          />
        </motion.a>
        <motion.div className="flex justify-center gap-6" initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 0.8, ease: "easeOut"}}>
            <motion.a href="mailto:zelalemtfitru@gmail.com" aria-label='Email Zelalem Fitru' initial={{ opacity: 0, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} transition={{ duration: 0.4, ease: "easeOut"}}>
                <MdOutlineMailOutline
                className={`w-8 h-8 cursor-pointer transition-colors duration-300 ${iconHoverClass}`}
                />
            </motion.a>
            <motion.a href="https://github.com/ZTFitru" target="_blank" rel="noopener noreferrer" aria-label="Github profile" initial={{ opacity: 0, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} transition={{ duration: 0.4, ease: "easeOut"}}>
                <FaGithub
                className={`w-8 h-8 cursor-pointer transition-colors duration-300 ${iconHoverClass}`}
            />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/zelalemfitru/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" initial={{ opacity: 0, scale: 0.8}} whileInView={{ opacity: 1, scale: 1}} transition={{ duration: 0.4, ease: "easeOut"}}>
               <FaLinkedinIn 
                className={`w-8 h-8 cursor-pointer transition-colors duration-300 ${iconHoverClass}`}
                /> 
            </motion.a>
        </motion.div>
        <motion.p className="mt-6 text-sm text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}>
          &copy; {new Date().getFullYear()} Zelalem. All rights reserved.
        </motion.p>
      </footer>
    );
  };
  
  export default Footer;
