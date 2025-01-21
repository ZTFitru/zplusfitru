import { projects } from "@/public/assets/asset";
import Image from "next/image";
import React from "react";
import { FiSend } from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";

const Projects = ({ toggle }) => {
  const isDarkMode = toggle === "dark";

  const bgColor = isDarkMode ? "#2F2A26" : "#FFF8E1";
  const textColor = isDarkMode ? "#fff" : "#000";
  const hoverColor = isDarkMode ? "#A0A05E" : "#53532F";

  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 scroll-m-20"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <h4
        className="text-center text-4xl font-bold mb-12 uppercase tracking-widest"
        style={{
          backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Projects
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="aspect-square rounded-lg relative cursor-pointer group"
            style={{
              boxShadow: `0 4px 15px ${hoverColor}`,
            }}
          >
            <Image
              src={project.projImg}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div
              className="w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7"
              style={{ backgroundColor: hoverColor }}
            >
              <div className="flex flex-col gap-2">
                <h5 className="text-lg" style={{ color: textColor }}>
                  {project.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
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
      >
        Show More
        <MdExpandMore />
      </a>
    </div>
  );
};

export default Projects;
