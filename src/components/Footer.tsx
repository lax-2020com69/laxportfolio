import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Laxman. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="mailto:laxmanlax6400@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/lax-2020com69" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/laxman6400" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
