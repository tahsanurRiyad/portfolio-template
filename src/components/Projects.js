
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'HR Management System',
      description: 'Comprehensive HR solution with employee management, payroll, and attendance tracking.',
      technologies: ['.NET', 'React', 'SQL Server', 'Crystal Reports'],
      category: 'hr',
      image: 'hr-system',
      client: 'ABC Corporation',
      duration: '6 months',
      challenge: 'Creating a unified system for HR operations across multiple departments and locations.',
      solution: 'Developed a modular system with role-based access control and real-time reporting.',
      results: 'Reduced HR processing time by 40% and improved employee satisfaction scores by 25%.'
    },
    {
      id: 2,
      title: 'Payroll Processing System',
      description: 'Automated payroll calculation with tax deductions and salary slip generation.',
      technologies: ['.NET', 'Telerik Reports', 'Bootstrap'],
      category: 'payroll',
      image: 'payroll-system',
      client: 'XYZ Enterprises',
      duration: '4 months',
      challenge: 'Handling complex payroll calculations with varying tax rules and deductions.',
      solution: 'Implemented a rules engine with configurable tax brackets and deduction formulas.',
      results: 'Reduced payroll processing errors to less than 0.5% and cut processing time in half.'
    },
    {
      id: 3,
      title: 'Training Management Portal',
      description: 'Platform for managing employee training programs and progress tracking.',
      technologies: ['React', 'REST API', 'Kendo UI', 'Bootstrap'],
      category: 'training',
      image: 'training-portal',
      client: 'Global Tech Solutions',
      duration: '5 months',
      challenge: 'Creating an engaging platform for diverse training programs with progress tracking.',
      solution: 'Built an interactive portal with video content, quizzes, and certification tracking.',
      results: 'Increased training completion rates by 60% and improved skill assessment scores.'
    },
    {
      id: 4,
      title: 'Leave Management System',
      description: 'Automated leave application and approval workflow system.',
      technologies: ['.NET', 'jQuery', 'HTML/CSS'],
      category: 'hr',
      image: 'leave-system',
      client: 'National Services Ltd',
      duration: '3 months',
      challenge: 'Streamlining leave approval processes across departments with complex hierarchies.',
      solution: 'Created an intuitive workflow system with automated notifications and approval chains.',
      results: 'Reduced leave approval time from days to hours and eliminated paperwork completely.'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        
        <div className="filters animate-on-scroll">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'hr' ? 'active' : ''}`}
            onClick={() => setFilter('hr')}
          >
            HR Systems
          </button>
          <button 
            className={`filter-btn ${filter === 'payroll' ? 'active' : ''}`}
            onClick={() => setFilter('payroll')}
          >
            Payroll
          </button>
          <button 
            className={`filter-btn ${filter === 'training' ? 'active' : ''}`}
            onClick={() => setFilter('training')}
          >
            Training
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card "
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="tech-tag animate-on-scroll"
                      style={{ transitionDelay: `${i * 0.05 + 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <Link to={`/project/${project.id}`} className="btn secondary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;