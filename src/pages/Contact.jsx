import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'techfusion3.0@kinnaird.edu.pk',
      link: 'mailto:techfusion3.0@kinnaird.edu.pk',
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
      detail: 'Kinnaird College for Women, Lahore, Pakistan',
      link: '#',
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
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
        <h1 className="page-title gradient-text">Get In Touch</h1>
        <p className="page-subtitle">
          Have a question or want to be part of TechFusion 3.0? We'd love to
          hear from you. Reach out to us anytime.
        </p>
      </motion.div>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2 className="section-title">Contact Information</h2>

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

          {/* Event Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="event-details glass-effect"
          >
            <h3 className="event-title gradient-text">Event Schedule</h3>
            <div className="event-info">
              <div className="event-item">
                <span>Dates</span>
                <span className="event-value">21st & 22nd Jan 2026</span>
              </div>
              <div className="event-item">
                <span>Venue</span>
                <span className="event-value">Kinnaird College</span>
              </div>
              <div className="event-item">
                <span>Registration</span>
                <span className="event-value">Open Now</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
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
            />
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
            />
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Write your message here..."
              rows="5"
            />
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
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="section-title gradient-text">
          Frequently Asked Questions
        </h2>

        <div className="faq-grid">
          {[
            {
              q: 'How can I register for competitions?',
              a: 'Visit the Competitions page and click "Register Now" on your desired event. Fill in the required details and submit the form before the deadline.',
            },
            {
              q: 'What are the competition categories?',
              a: 'TechFusion 3.0 features six exciting competitions: Code Sprint, Web Development, AI/ML Challenge, Design Competition, Cybersecurity Challenge, and Mobile App Development.',
            },
            {
              q: 'Can I join as an individual?',
              a: 'Most competitions require teams of 2-5 members. However, you can contact us if you need help finding team members.',
            },
            {
              q: 'Will accommodation be provided?',
              a: 'Accommodation details will be shared with registered participants. Please contact us for more information.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="faq-item glass-effect"
            >
              <h4>Q: {item.q}</h4>
              <p>A: {item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
