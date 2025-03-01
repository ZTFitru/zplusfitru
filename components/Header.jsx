import React from "react";
import myImage from "@/public/me.png";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { motion } from "motion/react";

const Header = ({ toggle }) => {
  const isDarkMode = toggle === "dark";

  const bgColor = isDarkMode ? "#2F2A26" : "#FFF8E1";
  const textColor = isDarkMode ? "#FFF8E1" : "#2F2A26";
  const hoverColor = isDarkMode ? "#A0A05E" : "#53532F";

  return (
    <div
      className="w-full text-center h-screen mt-20 flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      >
        <Image
          src={myImage}
          alt="head shot of Zelalem"
          className="rounded-full w-32 border-4"
          style={{
            width: "12rem",
            height: "12rem",
            borderColor: textColor,
            boxShadow: `0 0 20px ${hoverColor}`,
          }}
        />
        <div className="absolute -inset-1 rounded-full blur-md opacity-50"></div>
      </motion.div>
      <motion.h1
        className="flex items-end gap-2 text-2xl md:text-3xl font-bold tracking-wide"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Zelalem but call me{" "}
        <motion.span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Z
        </motion.span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl tracking-wider"
        style={{ color: hoverColor }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Frontend | Backend
      </motion.h2>

      <motion.h2
        className="text-xl md:text-2xl tracking-wider"
        style={{ color: hoverColor }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        Full-stack | Software
      </motion.h2>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 flex items-center gap-2 rounded-full border shadow-lg transition-all duration-300"
          style={{
            backgroundColor: textColor,
            color: bgColor,
            borderColor: hoverColor,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = hoverColor;
            e.target.style.color = textColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = textColor;
            e.target.style.color = bgColor;
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact me
          </motion.span>
          <MdOutlineMailOutline className="text-lg w-4" />
        </motion.a>
        <motion.a
          href="/2025_Zelalem.pdf"
          download
          className="px-10 py-3 flex items-center gap-2 rounded-full border transition-all duration-300"
          style={{
            backgroundColor: textColor,
            color: bgColor,
            borderColor: hoverColor,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = hoverColor;
            e.target.style.color = textColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = textColor;
            e.target.style.color = bgColor;
          }}
          aria-label="Download my resume"
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            My resume
          </motion.span>
          <FaRegFilePdf className="text-lg w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
