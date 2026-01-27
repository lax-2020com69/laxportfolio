import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "ProfileCard",
    description: "Bussines profilecard using HTML5, CSS3 & JS.",
    link: "https://lax-2020com69.github.io/laxProfileCard/",
  },
  {
    title: "Portfolio",
    description: "Portfolio website using React and TypeScript.",
    link: "https://lax-2020com69.github.io/portfoliolax/",
  },
  {
    title: "Trainee-CRUD",
    description: "Simple Full-Stack-Trainee-Crud, Using React+Vite and Java.",
    link: "https://github.com/lax-2020com69/Projects/tree/Trainee-CRUD",
  },
  {
    title: "AC+DC Clock",
    description: "Advanced HTML5, CSS3 and JS.",
    link: "https://lax-2020com69.github.io/Clock/",
  },
  {
    title: "Food Restaurent",
    description: "simple Frontend webpage using React component.",
    link: "https://lax-2020com69.github.io/foodrestaurant/",
  },
  {
    title: "Food-Restaurent-WebApp",
    description: "Advanced Full-Stack server and client webapp using Node",
    link: "https://github.com/lax-2020com69/food_v19-stable",
  },
  {
    title: "Social App",
    description: "A simple social app with React.",
    link: "https://lax-2020com69.github.io/social/",
  },
  {
    title: "Airline Reservation System",
    description: "Using C++.",
    link: "https://github.com/lax-2020com69/Projects/tree/Airline-System-Cpp",
  },
  {
    title: "AgribotV1.0(en/ta)",
    description: "Simple Agribot.",
    link: "https://github.com/lax-2020com69/Projects/tree/Agribotv1.0-en-ta",
  },
  {
    title: "ATM Card",
    description: "Simple glassmorphism ATM card with HTML5 and CSS3.",
    link: "https://github.com/lax-2020com69/Projects/tree/ATM-Glassmorphism",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" style={{background:'#EDEDCE',color:'#ae0707'}}>
      <h2>Projects</h2>
      <div className="projects-grid" style={{color:'#000072'}}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              className="preview-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Preview Project"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
