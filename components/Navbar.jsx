"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "@/public/ZF-dark-noBack.png";
import darkLogo from "@/public/ZNavbarLogo.png";

const Navbar = ({ toggle, toggleTheme }) => {
  const isDarkMode = toggle === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  const bgClass = isDarkMode
    ? "bg-[#2F2A26] text-[#FFF8E1]"
    : "bg-[#FFF8E1] text-[#2F2A26]";
  const hoverClass = "hover:text-[#A0A05E] group-hover:text-[#53532F]";

  return (
    <nav
      className={`w-full fixed top-0 px-4 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 shadow-md transition-colors duration-300 ${bgClass}`}
    >
      <a href="#top">
        <Image
          src={isDarkMode ? logo : darkLogo}
          className="w-28 cursor-pointer mr-14 hover:scale-110 transition-transform duration-300"
          width={100}
          height={100}
          alt="Zelalem's Logo"
        />
      </a>
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm uppercase tracking-widest">
        <li>
          <a href="#top" className={`transition-colors duration-300 ${hoverClass}`}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={`transition-colors duration-300 ${hoverClass}`}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={`transition-colors duration-300 ${hoverClass}`}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={`transition-colors duration-300 ${hoverClass}`}>
            Contact
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDarkMode ? (
            <FaRegSun className="w-6 transition duration-300 text-[#E85A4F]" />
          ) : (
            <FaRegMoon className="w-6 transition duration-300 text-[#E98074]" />
          )}
        </button>
        <a
          href="#contact"
          className={`hidden lg:flex items-center gap-3 px-8 py-2.5 border rounded-full transition-all duration-300 ${
            isDarkMode
              ? "border-[#FFF8E1] text-[#FFF8E1] hover:bg-[#53532F]"
              : "border-[#2F2A26] text-[#2F2A26] hover:bg-[#A0A05E]"
          }`}
        >
          Contact <MdOutlineMailOutline className="text-lg" />
        </a>
        <button onClick={() => setMenuOpen(true)} className="block md:hidden">
          <IoMenu
            className={`w-6 transition duration-300 ${
              isDarkMode ? "text-[#FFF8E1]" : "text-[#2F2A26]"
            }`}
          />
        </button>
      </div>
      <ul
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen shadow-lg transition-transform duration-500 ${
          menuOpen ? "right-0" : "-right-64"
        } ${isDarkMode ? "bg-[#2F2A26] text-[#FFF8E1]" : "bg-[#FFF8E1] text-[#2F2A26]"}`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute right-6 top-6">
          <IoClose
            className={`w-6 transition duration-300 ${
              isDarkMode ? "text-[#FFF8E1]" : "text-[#2F2A26]"
            }`}
          />
        </button>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#top" className={`transition-colors duration-300 ${hoverClass}`}>
            Home
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about" className={`transition-colors duration-300 ${hoverClass}`}>
            About
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#projects" className={`transition-colors duration-300 ${hoverClass}`}>
            Projects
          </a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact" className={`transition-colors duration-300 ${hoverClass}`}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;