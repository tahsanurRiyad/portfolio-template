
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SectionWrapper = ({ id, children }) => {
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${id}` && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location, id]);

  return (
    <section id={id} ref={sectionRef}>
      {children}
    </section>
  );
};

export default SectionWrapper;