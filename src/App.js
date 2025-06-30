

// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import ProjectDetails from './components/ProjectDetails';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   useEffect(() => {
//     // Initialize scroll animations
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -100px 0px' // Trigger animation when element is 100px from viewport bottom
//     };
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           // Stop observing after animation is triggered
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);
    
//     // Observe all elements with the 'animate-on-scroll' class
//     document.querySelectorAll('.animate-on-scroll').forEach(el => {
//       observer.observe(el);
//     });
    
//     return () => {
//       // Cleanup observer
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Hero />
//               <About />
//               <Skills />
//               <Experience />
//               <Projects />
//               <Contact />
//             </>
//           } />
//           <Route path="/project/:id" element={<ProjectDetails />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;




// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;