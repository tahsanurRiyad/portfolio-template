// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title animate-on-scroll">MD Tahsanur Rahman</h1>
          <h2 className="hero-subtitle animate-on-scroll animate-delay-1">Software Engineer</h2>
          <p className="hero-description animate-on-scroll animate-delay-2">
            I build robust web applications using modern technologies
          </p>
          <div className="hero-btns animate-on-scroll animate-delay-3">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;