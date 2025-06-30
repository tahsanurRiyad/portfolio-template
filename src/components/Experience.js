
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Exotico Solutions',
      position: 'Software Engineer',
      period: 'May 2022 - Present',
      description: 'Developing and maintaining enterprise applications using .NET, React, and REST APIs. Implemented features for HR management systems.',
      achievements: [
        'Reduced report generation time by 40% with Crystal Reports optimization',
        'Integrated Kendo UI components for enhanced user experience',
        'Developed RESTful APIs for mobile application integration'
      ]
    },
    {
      company: 'Azolution Software & Engineers Ltd',
      position: 'Software Engineer',
      period: 'Sep 2019 - Apr 2022',
      description: 'Worked on payroll and attendance management systems using ASP.NET and jQuery.',
      achievements: [
        'Implemented Telerik Reports for complex payroll calculations',
        'Created responsive UI with Bootstrap for admin dashboard',
        'Developed leave management module with approval workflows'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-company">{exp.company}</h3>
                <h4 className="timeline-position">{exp.position}</h4>
                <p>{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i}
                      className="animate-on-scroll"
                      style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;