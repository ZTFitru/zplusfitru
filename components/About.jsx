import Image from "next/image";
import React from "react";
import myImage from "@/public/me.png";
import { techStack } from "@/public/assets/asset";
import { backend } from "@/public/assets/asset";
import { techTools } from "@/public/assets/asset";
import { motion } from "motion/react";

const About = ({ toggle }) => {
  const isDarkMode = toggle === "dark";

  const bgColor = isDarkMode ? "#2F2A26" : "#FFF8E1";
  const textColor = isDarkMode ? "#FFF8E1" : "#2F2A26";
  const hoverColor = isDarkMode ? "#A0A05E" : "#53532F";

  return (
    <div
      id="about"
      className="w-full px-[12%] py-16 scroll-m-20"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <motion.h3
        className="text-center text-4xl font-bold mb-12 uppercase tracking-widest"
        style={{
          backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h3>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          className="relative w-64 sm:w-80 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={myImage}
            alt="Head shot of Zelalem"
            className="w-full rounded-3xl border-4"
            style={{
              borderColor: textColor,
              boxShadow: `0 0 20px ${hoverColor}`,
            }}
          />
          <div className="absolute -inset-1 rounded-3xl blur-md opacity-50"></div>
        </motion.div>
        <div className="flex-1">
          <motion.p
            className="mb-10 max-w-2xl text-lg leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            From leading troops as a Communications Specialist Sergeant in the
            US Army to writing clean, efficient code as a Front-End Developer, I
            bring adaptability, a positive attitude, and problem-solving to
            every challenge.
          </motion.p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* education part */}
            <motion.li
              className="border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
              style={{ borderColor: hoverColor }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <p
                className="font-semibold text-lg mb-3"
                style={{ color: hoverColor }}
              >
                Education:
              </p>
              <div className="space-y-2">
                <p>🎓 Bachelor's degree in Computer Science</p>
                <p>📜 Certificate in Frontend Engineering</p>
              </div>
            </motion.li>

            {/* frontend */}
            <motion.li
              className="border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
              style={{ borderColor: hoverColor }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              <p
                className="font-semibold text-lg mb-3"
                style={{ color: hoverColor }}
              >
                Front-End:
              </p>
              <div className="flex flex-wrap gap-3 mt-5 ">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="text-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                  >
                    <div className="group text-center">
                      <div className="text-4xl transition-transform transform group-hover:-translate-y-1 duration-500">
                        {tech.icon}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm mt-1">
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.li>

            {/* backend */}
            <motion.li
              className="border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
              style={{ borderColor: hoverColor }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <p
                className="font-semibold text-lg mb-3"
                style={{ color: hoverColor }}
              >
                Back-End:
              </p>
              <div className="flex flex-wrap gap-3 mt-5 ">
                {backend.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="text-4xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                  >
                    <div className="group text-center">
                      <div className="text-4xl transition-transform transform group-hover:-translate-y-1 duration-500">
                        {tech.icon}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm mt-1">
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.li>
          </motion.ul>

          {/* tools */}
          <motion.h4
            className="mt-6 text-lg font-semibold"
            style={{ color: hoverColor }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          >
            Tools
          </motion.h4>

          <motion.ul
            className="flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
          >
            {techTools.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-16 sm:w-20 aspect-square cursor-pointer transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.6 }}
              >
                <div className="group text-center">
                  <div className="text-4xl transition-transform transform group-hover:-translate-y-1 duration-500">
                    {tool.icon}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm mt-1">
                    {tool.name}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
