import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Competitions', href: '/competitions' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="nav-logo-section"
        >
          <Link to="/" className="logo-link">
            <div className="logo-brand">
              <span className="logo-text">
                <span className="tech-text">TECH</span>
                <span className="fusion-text">FUSION</span>
              </span>
              <span className="logo-version">3.0</span>
            </div>
          </Link>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={item.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="nav-underline"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </nav>
  )
}

export default Navigation
