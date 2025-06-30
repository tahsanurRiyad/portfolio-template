// src/components/Skills.js
import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const skills = [
    { name: '.NET', level: 95 },
    { name: 'React', level: 90 },
    { name: 'REST API', level: 85 },
    { name: 'jQuery', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Kendo UI', level: 85 },
    { name: 'Crystal Reports', level: 75 },
    { name: 'Telerik Reports', level: 80 },
  ];

  const domains = [
    'HR Management',
    'Payroll Systems',
    'Attendance Tracking',
    'Leave Management',
    'Training Management',
    'Personal Information Systems'
  ];

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Skills</h2>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <h3 className="domain-title animate-on-scroll">Domain Expertise</h3>
        <div className="domains-container">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="domain-tag animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {domain}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;