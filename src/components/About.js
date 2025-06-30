
import React from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <div className="about-content">
          <div className="about-text animate-on-scroll slide-in-left">
            <p>
              I'm a passionate software engineer with expertise in building web applications 
              using modern technologies. I specialize in .NET, Jquery, React.js, and REST API development.
            </p>
            <p>
              With experience in HR, Payroll, and Training Management systems, I deliver 
              efficient solutions that solve real business problems.
            </p>
            <div className="about-info">
              <div className="info-item animate-on-scroll animate-delay-1">
                <strong>Name:</strong>
                <span>MD Tahsanur Rahman</span>
              </div>
              <div className="info-item animate-on-scroll animate-delay-2">
                <strong>Email:</strong>
                <span>trriyad@gmail.com</span>
              </div>
              <div className="info-item animate-on-scroll animate-delay-3">
                <strong>Location:</strong>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="info-item animate-on-scroll animate-delay-4">
                <strong>Phone:</strong>
                <span>+880 1868 491075</span>
              </div>
            </div>
          </div>
          {/* <div className="about-image animate-on-scroll slide-in-right">
            <div className="image-placeholder">
              <div className="initials">TR</div>
            </div>
          </div> */}
          <div className="about-image animate-on-scroll slide-in-right">
            <img src={profileImage} alt="Profile" className="dp-placeholder" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;