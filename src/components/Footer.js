import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">Tahsanur</a>
            <p>Software Engineer specializing in .NET, Jquery and React</p>
          </div>

          <div className="footer-links" style={{ paddingLeft: "3rem" }}>
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
                <li><a href="#skills"><i className="fas fa-tools"></i> Skills</a></li>
                <li><a href="#experience"><i className="fas fa-briefcase"></i> Experience</a></li>
                <li><a href="#projects"><i className="fas fa-code"></i> Projects</a></li>
                <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
          </div>
          

            <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/tahsanur-rahman-riyad" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/tahsanurRiyad" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.facebook.com/tahsanur.riyad/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
                </a>
            </div>
            </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MD Tahsanur Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;