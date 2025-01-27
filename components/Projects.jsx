import { projects } from "@/public/assets/asset";
import Image from "next/image";
import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = ({ toggle }) => {
  const isDarkMode = toggle === "dark";

  const bgColor = isDarkMode ? "#2F2A26" : "#FFF8E1";
  const textColor = isDarkMode ? "#fff" : "#000";
  const hoverColor = isDarkMode ? "#A0A05E" : "#53532F";
  const projTitle = '#fff'

  const [visibleProj, setVisibleProj] = useState(4);

  const displayedProj = projects.slice(0, visibleProj);

  const handleShowMore = () => {
    setVisibleProj(visibleProj.length);
  };

  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 scroll-m-20"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <motion.h4
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
        Projects
      </motion.h4>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {displayedProj.map((project, index) => (
          <motion.div
            key={project.id}
            className="aspect-square rounded-lg relative cursor-pointer group"
            style={{
              boxShadow: `0 4px 15px ${hoverColor}`,
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} 
          >
            <Image
              src={project.projImg}
              alt={project.title}
              className="rounded-lg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            <div
              className="w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center transition-all duration-500 group-hover:bottom-7"
              style={{ backgroundColor: hoverColor }}
            >
              <div className="flex flex-col gap-2">
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <h5 className="text-lg" style={{ color: projTitle }}>
                    {project.title}
                  </h5>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {visibleProj < projects.length && (
        <motion.button
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 transition-colors duration-300"
          style={{
            color: textColor,
            border: `1px solid ${hoverColor}`,
            backgroundColor: bgColor,
            boxShadow: `0 4px 15px ${hoverColor}`,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = hoverColor;
            e.target.style.color = bgColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = bgColor;
            e.target.style.color = textColor;
          }}
          onClick={handleShowMore}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          Show More
          <MdExpandMore />
        </motion.button>
      )}
    </div>
  );
};

export default Projects;
