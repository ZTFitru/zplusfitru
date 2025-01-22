import React from "react";
import myImage from "@/public/me.png";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";

const Header = ({ toggle }) => {
  const isDarkMode = toggle === 'dark';

  const bgColor = isDarkMode ? '#2F2A26' : '#FFF8E1';
  const textColor = isDarkMode ? '#FFF8E1' : '#2F2A26';
  const hoverColor = isDarkMode ? '#A0A05E' : '#53532F';

  return (
    <div
      className="w-full text-center h-screen mt-20 flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="relative">
        <Image
          src={myImage}
          alt="me"
          className="rounded-full w-32 border-4"
          style={{
            width: '12rem', 
            height: '12rem',
            borderColor: textColor,
            boxShadow: `0 0 20px ${hoverColor}`,
          }}
        />
        <div
          className="absolute -inset-1 rounded-full blur-md opacity-50"
        ></div>
      </div>
      <h1 className="flex items-end gap-2 text-2xl md:text-3xl font-bold tracking-wide">
        Zelalem but call me{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, ${hoverColor}, ${textColor})`,
          }}
        >
          Z
        </span>
      </h1>
      <h2 className="text-xl md:text-2xl tracking-wider" style={{ color: hoverColor }}>
        Frontend | Backend
      </h2>
      <h2 className="text-xl md:text-2xl tracking-wider" style={{ color: hoverColor }}>
        Full-stack | Software
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#contact"
          className="px-10 py-3 flex items-center gap-2 rounded-full border shadow-lg transition-all duration-300"
          style={{
            backgroundColor: textColor,
            color: bgColor,
            borderColor: hoverColor,
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = hoverColor) &
            (e.target.style.color = textColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = textColor) &
            (e.target.style.color = bgColor)
          }
        >
          Contact me
          <MdOutlineMailOutline className="text-lg w-4" />
        </a>
        <a
          href="/2025_Zelalem_Fitru .pdf"
          download
          className="px-10 py-3 flex items-center gap-2 rounded-full border transition-all duration-300"
          style={{
            backgroundColor: textColor,
            color: bgColor,
            borderColor: hoverColor,
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = hoverColor) &
            (e.target.style.color = textColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = textColor) &
            (e.target.style.color = bgColor)
          }
          aria-label="Download my resume"
        >
          My resume
          <FaRegFilePdf className="text-lg w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;