
import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const MainContent = () => {
  useEffect(() => {
    // Initialize scroll animations
    const initAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
      
      // Observe all elements with the 'animate-on-scroll' class
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
      
      return observer;
    };
    
    const animationObserver = initAnimations();
    
    // Cleanup when component unmounts
    return () => {
      if (animationObserver) {
        animationObserver.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default MainContent;