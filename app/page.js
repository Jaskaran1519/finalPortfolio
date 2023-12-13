"use client";
import React from "react";
import Main from "@/Components/Main";
import Navbar from "@/Components/Navbar";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Projects from "@/Components/Projects";
import Footer from "@/Components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default page;
