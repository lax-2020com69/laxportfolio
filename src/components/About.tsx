import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{padding:'80px 20px', background:'#296374',color:'#abcabc', textAlign:'center'}}>
      <h2>About Me</h2>
      <p style={{maxWidth:'700px', margin:'auto', lineHeight:1.8}}>
        I’m a passionate Full Stack Developer specializing in building
        modern, scalable web applications with clean UI and optimized
        backend systems.
      </p>
    </section>
  );
};

export default About;
