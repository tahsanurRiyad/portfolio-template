
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Your message has been sent successfully!'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info animate-on-scroll slide-in-left">
            <h3>Contact Information</h3>
            <p>Feel free to reach out for collaboration or opportunities</p>
            
            <div className="info-item">
              <i className="icon">📧</i>
              <div>
                <h4>Email</h4>
                <p>trriyad@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="icon">☎️</i>
              <div>
                <h4>Phone</h4>
                <p>+880 1868 491075</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="icon">📍</i>
              <div>
                <h4>Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form animate-on-scroll slide-in-right">
            <form onSubmit={handleSubmit}>
              <div className="form-group animate-on-scroll">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll animate-delay-1">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll animate-delay-2">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group animate-on-scroll animate-delay-3">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn primary animate-on-scroll animate-delay-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`submit-message ${submitMessage.type} animate-on-scroll`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;