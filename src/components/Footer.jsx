import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer glass-effect">
      <div className="footer-container">
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-title gradient-text">TechFusion 3.0</h3>
            <p className="footer-text">
              Beyond Innovation, Into Evolution. A premier tech event at
              Kinnaird College for Women.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/competitions">Competitions</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-heading">Event Details</h4>
            <p className="footer-text">📅 21st & 22nd January 2026</p>
            <p className="footer-text">📍 Kinnaird College For Women</p>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} TechFusion 3.0. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
