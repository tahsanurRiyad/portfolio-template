
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate  } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample project data (in a real app, this would come from an API)
  const projects = [
    {
      id: 1,
      title: 'HR Management System',
      description: 'Comprehensive HR solution with employee management, payroll, and attendance tracking.',
      longDescription: 'A full-featured HR management system designed to streamline HR operations for medium to large enterprises. The system centralizes employee data, automates payroll processing, and provides real-time attendance tracking across multiple locations.',
      technologies: ['.NET Core', 'React', 'SQL Server', 'Crystal Reports', 'REST API'],
      category: 'hr',
      image: 'hr-system',
      client: 'ABC Corporation',
      duration: '6 months',
      teamSize: '5 developers',
      challenge: 'Creating a unified system for HR operations across 12 departments and 5 locations with varying compliance requirements.',
      solution: 'Developed a modular system with role-based access control, automated workflows, and real-time reporting. Integrated with existing biometric systems for attendance tracking.',
      results: 'Reduced HR processing time by 40%, improved employee satisfaction scores by 25%, and reduced compliance issues by 90%.',
      features: [
        'Employee information management',
        'Automated payroll processing',
        'Real-time attendance tracking',
        'Leave management with approval workflows',
        'Performance evaluation system',
        'Compliance reporting'
      ],
      screenshots: ['dashboard', 'employee-profile', 'payroll', 'reports']
    },
    {
      id: 2,
      title: 'Payroll Processing System',
      description: 'Automated payroll calculation with tax deductions and salary slip generation.',
      longDescription: 'An enterprise-grade payroll processing system designed to handle complex payroll calculations for organizations with diverse employee structures. The system automates tax calculations, deductions, and generates compliant salary slips.',
      technologies: ['.NET Framework', 'Telerik Reports', 'Bootstrap', 'jQuery', 'Entity Framework'],
      category: 'payroll',
      image: 'payroll-system',
      client: 'XYZ Enterprises',
      duration: '4 months',
      teamSize: '3 developers',
      challenge: 'Handling complex payroll calculations with varying tax rules, deductions, and compliance requirements across different employee categories.',
      solution: 'Implemented a rules engine with configurable tax brackets, deduction formulas, and compliance rules. Created a template-based reporting system for salary slips.',
      results: 'Reduced payroll processing errors to less than 0.5%, cut processing time in half, and improved employee satisfaction with timely payments.',
      features: [
        'Automated payroll calculation engine',
        'Configurable tax and deduction rules',
        'Salary slip generation',
        'Direct bank transfer integration',
        'Year-end tax reporting',
        'Employee self-service portal'
      ],
      screenshots: ['payroll-dashboard', 'calculation', 'salary-slip', 'reports']
    },
    {
      id: 3,
      title: 'Training Management Portal',
      description: 'Platform for managing employee training programs and progress tracking.',
      longDescription: 'A comprehensive training management platform that enables organizations to create, manage, and track employee training programs. The system includes course creation tools, progress tracking, and certification management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Kendo UI', 'Bootstrap'],
      category: 'training',
      image: 'training-portal',
      client: 'Global Tech Solutions',
      duration: '5 months',
      teamSize: '4 developers',
      challenge: 'Creating an engaging platform for diverse training programs with effective progress tracking and certification.',
      solution: 'Built an interactive portal with video content support, quizzes, assignments, and certification tracking. Implemented analytics for training effectiveness.',
      results: 'Increased training completion rates by 60%, improved skill assessment scores by 35%, and reduced training administration time by 50%.',
      features: [
        'Course creation and management',
        'Multi-format content support (video, PDF, quizzes)',
        'Progress tracking and certification',
        'Training calendar and scheduling',
        'Instructor management',
        'Training effectiveness analytics'
      ],
      screenshots: ['course-list', 'course-detail', 'progress', 'certificate']
    },
    {
      id: 4,
      title: 'Leave Management System',
      description: 'Automated leave application and approval workflow system.',
      longDescription: 'An efficient leave management system that automates the entire leave application and approval process. The system handles complex approval workflows, balances tracking, and integrates with calendar systems.',
      technologies: ['.NET Core', 'jQuery', 'HTML5/CSS3', 'SQL Server', 'Bootstrap'],
      category: 'hr',
      image: 'leave-system',
      client: 'National Services Ltd',
      duration: '3 months',
      teamSize: '2 developers',
      challenge: 'Streamlining leave approval processes across departments with complex hierarchies and varying policies.',
      solution: 'Created an intuitive workflow system with automated notifications, approval chains, and calendar integration. Implemented a dashboard for leave balance tracking.',
      results: 'Reduced leave approval time from 3-5 days to under 4 hours, eliminated paperwork completely, and improved transparency in leave management.',
      features: [
        'Online leave application',
        'Customizable approval workflows',
        'Leave balance tracking',
        'Calendar integration',
        'Automated notifications',
        'Reporting and analytics'
      ],
      screenshots: ['leave-dashboard', 'application', 'approval', 'calendar']
    }
  ];

   useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleBackClick = () => {
    navigate('/', { state: { scrollToProjects: true } });
  };

  if (loading) {
    return (
      <section className="project-details">
        <div className="container">
          <div className="loading-spinner"></div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="project-details">
        <div className="container">
          <div className="project-not-found">
            <h2>Project Not Found</h2>
            <p>The project you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="btn primary">Back to Portfolio</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-details">
      <div className="container">
       <div className="back-link">
          <button onClick={handleBackClick} className="btn secondary">
            &larr; Back to Projects
          </button>
        </div>
        
        <div className="project-header ">
          <div className="project-image">
            <div className={`image-placeholder ${project.image}`}>
              <div className="project-title">{project.title}</div>
            </div>
          </div>
          
          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-label">Client:</span>
              <span className="meta-value">{project.client}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration:</span>
              <span className="meta-value">{project.duration}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Team Size:</span>
              <span className="meta-value">{project.teamSize}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Category:</span>
              <span className="meta-value category-tag">{project.category}</span>
            </div>
          </div>
        </div>
        
        <div className="project-overview ">
          <h2>Project Overview</h2>
          <p>{project.longDescription}</p>
        </div>
        
        <div className="project-details-grid">
          <div className="project-challenge ">
            <h3>Challenge</h3>
            <p>{project.challenge}</p>
          </div>
          
          <div className="project-solution ">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
          
          <div className="project-results ">
            <h3>Results</h3>
            <p>{project.results}</p>
          </div>
        </div>
        
        <div className="project-features">
          <h3>Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 0.05}s` }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="project-technologies ">
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="project-screenshots ">
          <h3>Screenshots</h3>
          <div className="screenshot-grid">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="screenshot-item">
                <div className={`screenshot-placeholder ${screenshot}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;