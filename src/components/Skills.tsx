import React from "react";

const skills = [
  "Python","HTML5","CSS3","JavaScript","SQL","PHP",
  "REST APIs","Git & GitHub","React","Java","C++","VS Code"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" style={{padding:'80px 20px', background:'#629FAD', textAlign:'center'}}>
      <h2>Skills</h2>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))',
        gap:'20px', marginTop:'30px'
      }}>
        {skills.map(skill => (
          <div key={skill} className="skill" style={{
            padding:'20px', background:'white', borderRadius:'15px',
            fontWeight:600, boxShadow:'0 10px 25px rgba(0,0,0,0.05)',
            transition:'transform 0.3s', cursor:'default'
          }}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
