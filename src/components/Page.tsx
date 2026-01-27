import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import "../App.css";

const Page: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollPercent((scrollTop / scrollHeight) * 100);

      const btn = document.getElementById("scrollTopBtn");
      if (!btn) return;

      if (scrollTop > 200) btn.style.display = "block";
      else btn.style.display = "none";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{
          width: `${scrollPercent}%`,
          height: "4px",
          position: "fixed",
          top: "80px",
          left: 0,
          zIndex: 9999,
          background: "linear-gradient(90deg,#c0c0c0,#e5e5e5)",
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />

      <button id="scrollTopBtn" onClick={scrollToTop}>
        ↑
      </button>
    </>
  );
};

export default Page;
