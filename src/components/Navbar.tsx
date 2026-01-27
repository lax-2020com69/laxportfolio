import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding:'25px 60px', position:'sticky', top:0, zIndex:1000,
      background:'linear-gradient(135deg,#667eea,#764ba2)'
    }}>
      <h2 className="logo">
        <a href="#">Portfolio</a>
      </h2>
      <ul style={{ listStyle:'none', display:'flex', gap:'30px'}}>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
