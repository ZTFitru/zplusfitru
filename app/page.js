
'use client';
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { useState } from "react";

export default function Home() {

  const [toggle, setToggle] = useState('light');

  const toggleTheme = ()=> {
    setToggle(toggle === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Navbar toggle={toggle} toggleTheme={toggleTheme} />
      <Header toggle={toggle}/>
      <About toggle={toggle}/>
      <Projects toggle={toggle}/>
      <Contact toggle={toggle}/>
      <Footer toggle={toggle}/>
    </>
  );
}
