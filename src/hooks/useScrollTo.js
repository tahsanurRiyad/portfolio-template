
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTo = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we need to scroll to a specific section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Check for scroll state from navigation
    if (location.state?.scrollToProjects) {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        setTimeout(() => {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Always scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);
};