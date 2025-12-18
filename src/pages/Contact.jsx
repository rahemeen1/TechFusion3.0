import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'techfusion@kinnaird.edu.pk',
      link: 'mailto:techfusion@kinnaird.edu.pk',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+92 42 5758 5000',
      link: 'tel:+924257585000',
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: '93-Jail Road, Lahore, 54000',
      link: '#',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form before submitting
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials from https://www.emailjs.com/
      const serviceID = 'service_eys2ngr' // Replace with your EmailJS service ID
      const templateID = 'template_1fqx1tl' // Replace with your EmailJS template ID
      const publicKey = '_lM5ft44TAw_Ut5k2' // Replace with your EmailJS public key

      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('Email send error:', error)
      console.error('Error code:', error.status)
      console.error('Error text:', error.text)
      setIsSubmitting(false)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="contact-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-header"
      >
        <h1 className="page-title gradient-text">IEEE</h1>
        <h3 className="page-subtitle" style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>Contact Us</h3>
      </motion.div>

      <div className="contact-content">
        <div className="contact-two-column">
          {/* Contact Form - LEFT SIDE */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form glass-effect"
          >
            <h2 className="section-title">Send us a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                style={{ borderColor: errors.name ? '#ef4444' : 'transparent' }}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                style={{ borderColor: errors.email ? '#ef4444' : 'transparent' }}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What is this about?"
                style={{ borderColor: errors.subject ? '#ef4444' : 'transparent' }}
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Type your message here..."
                rows="4"
                style={{ borderColor: errors.message ? '#ef4444' : 'transparent' }}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            {submitStatus === 'success' && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className="submit-btn glow-cyan"
            >
              {isSubmitting ? (
                <>
                  <Loader size={20} />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </motion.form>

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
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start' }}>
                  <motion.a
                    href="https://www.instagram.com/ieee_kinnaird_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    style={{ color: '#06b6d4', fontSize: '2rem' }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/IEEEKINNAIRD/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    style={{ color: '#06b6d4', fontSize: '2rem' }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/ieee-kinnaird-student-branch-03a96b269/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    style={{ color: '#06b6d4', fontSize: '2rem' }}
                  >
                    <FaLinkedin />
                  </motion.a>
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
