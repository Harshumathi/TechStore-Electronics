"use client";

import type { FormEvent } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Need help with your tech? We're here for you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-card">
            <h3>Support Information</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Tech Hub, Innovation District</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">👤</span>
              <div>
                <strong>Support Contact</strong>
                <p>Harshumathi</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>support@techstore.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" className="btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
