import Image from "next/image";
import React from "react";
import myImage from "@/public/me.png";
import { techStack } from "@/public/assets/asset";
import { backend } from "@/public/assets/asset";
import { techTools } from "@/public/assets/asset";

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
        <h3
          className="text-center text-4xl font-bold mb-12 uppercase tracking-widest"
          style={{
            backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h3>
        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
          <div className="relative w-64 sm:w-80 rounded-3xl">
            <Image
              src={myImage}
              alt="Zelalem"
              className="w-full rounded-3xl border-4"
              style={{
                borderColor: textColor,
                boxShadow: `0 0 20px ${hoverColor}`,
              }}
            />
            <div
              className="absolute -inset-1 rounded-3xl blur-md opacity-50"
            ></div>
          </div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl text-lg leading-relaxed">
              From leading troops as a Communications Specialist Sergeant in the
              US Army to writing clean, efficient code as a Front-End Developer, I
              bring adaptability, a positive attitude, and problem-solving to every
              challenge.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <li
                className="border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
                style={{ borderColor: hoverColor }}
              >
                <p className="font-semibold text-lg mb-3" style={{ color: hoverColor }}>
                  Education:
                </p>
                <div className="space-y-2">
                  <p>🎓 Bachelor's degree in Computer Science</p>
                  <p>📜 Certificate in Frontend Engineering</p>
                </div>
              </li>
              <li
                className="border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
                style={{ borderColor: hoverColor }}
              >
                <p className="font-semibold text-lg mb-3" style={{ color: hoverColor }}>
                  Front-End:
                </p>
                <div className="flex flex-wrap gap-3 mt-5 ">
                  {techStack.map((tech, index) => (
                    <Image
                      key={index}
                      src={tech.image}
                      width={250}
                      height={250}
                      alt='tech icons' 
                      className="w-16 sm:w-20"
                    />
                  ))}
                </div>
              </li>
              <li
                className="border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
                style={{ borderColor: hoverColor }}
              >
                <p className="font-semibold text-lg mb-3" style={{ color: hoverColor }}>
                  Back-End:
                </p>
                <div className="flex flex-wrap gap-3 mt-5 ">
                  {backend.map((tech, index) => (
                    <Image
                      key={index}
                      src={tech.image}
                      width={250}
                      height={250}
                      alt='tech icons' 
                      className="w-16 sm:w-20"
                    />
                  ))}
                </div>
              </li>
            </ul>
            <h4 className="mt-6 text-lg font-semibold" style={{ color: hoverColor }}>
              Tools
            </h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {techTools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-16 sm:w-20 aspect-square cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <Image src={tool.image} width={300} height={300} alt='tool icons' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;