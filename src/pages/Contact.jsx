import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  // Registration form removed for post-event version

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'techfusion@kinnaird.edu.pk',
      link: 'mailto:techfusion@kinnaird.edu.pk',
    },
   
    {
      icon: MapPin,
      title: 'Location',
      detail: '93-Jail Road, Lahore, 54000',
      link: '#',
    },
  ]

  const socials = [
    {
      href: 'https://www.instagram.com/kinnairdcsclub?igsh=MXBjbm1wMmFqYW5iYQ==',
      label: 'Kinnaird CS Club on Instagram',
    },
    {
      href: 'https://www.instagram.com/ieee_kinnaird_official?igsh=MWU0dnl3OTM2aHI4',
      label: 'IEEE Kinnaird Official on Instagram',
    },
    {
      href: 'https://www.instagram.com/ieee_wie_kinnaird?igsh=MW9wZDlrNGpxaTE5MQ==',
      label: 'IEEE WIE Kinnaird on Instagram',
    },
  ]

  // Form logic removed for post-event version

  return (
    <div className="contact-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h1 className="page-title gradient-text">TechFusion 3.0</h1>
        <h3 className="page-subtitle" style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Contact Us</h3>
      </motion.div>

      <div className="contact-content">
        <div className="contact-two-column">
          {/* Post-event message only, no form */}
          <div className="contact-form glass-effect" style={{ minHeight: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Contact</h2>
            <p className="page-subtitle" style={{ fontSize: '1.1rem', marginTop: '0.3rem', textAlign: 'center' }}>
              Thank you for your interest in TechFusion 3.0.<br />
              The event has concluded. For queries, please reach out via our official email or social media.
            </p>
          </div>
          {/* Right Side - Map and Contact Info */}
          <div className="contact-right-section">
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="map-section"
              style={{ 
                marginBottom: '2rem', 
                borderRadius: '15px', 
                overflow: 'hidden', 
                border: '2px solid rgba(139, 92, 246, 0.4)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
                background: 'rgba(14, 21, 45, 0.3)'
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.496461796169!2d74.3405255!3d31.5379871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ebcc18c7bf%3A0x1c311b2dddb7ab8f!2sKinnaird%20College%20For%20Women%20University!5e0!3m2!1sen!2s!4v1729690252453!5m2!1sen!2s"
                title="Google Map"
                style={{ border: 0, width: '100%', height: '350px', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">Contact Info</h2>
              <p className="page-subtitle" style={{ marginBottom: '1.5rem' }}>Feel free to contact us!</p>

              <div className="contact-cards">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="contact-card glass-effect"
                    >
                      <div className="info-icon-wrapper">
                        <Icon className="info-icon" size={24} />
                      </div>
                      <div>
                        <h3 className="info-title">{info.title}</h3>
                        <p className="info-detail">{info.detail}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ marginTop: '1.5rem' }}
              >
                <p className="page-subtitle" style={{ marginBottom: '1rem' }}>For regular updates follow us!</p>
                <div className="social-links">
                  {socials.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="social-icon"
                    >
                      <FaInstagram />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
