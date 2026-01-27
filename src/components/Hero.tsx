import React from "react";
import profile from "../assets/profile.png";
import cv from "../assets/Laxman-CV.pdf";

const Hero: React.FC = () => {
  return (
    <header className="hero" style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      gap:'50px', padding:'0 60px', minHeight:'calc(100vh - 85px)',
      background:'#0C2C55', color:'white'
    }}>
      <div className="hero-content" style={{ flex:2 }}>
        <h1  className="my-name">Hi, I'm <span style={{color:'#ffd86b'}}>Laxman</span></h1>
        <p>Full Stack Developer | Python | JavaScript</p>
        <div style={{display:'flex', gap:'10px'}}>
          <a href="https://github.com/lax-2020com69/Projects" className="btn">View Projects <i className="fab fa-github"></i></a>
          <a href={cv} className="btn" style={{color:'green'}} target="_blank" rel="noopener noreferrer">View CV <i className="fa-regular fa-file"></i></a>
        </div>
      </div>
      <div className="animation" style={{ flex:1, display:'flex', justifyContent:'center'}}>
        <img
          src={profile}
          alt="Profile"
          className="my-img"
        />
      </div>
    </header>
  );
};

export default Hero;
