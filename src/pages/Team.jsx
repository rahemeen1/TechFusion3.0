import React from 'react'
import { motion } from 'framer-motion'
import './Team.css'

function Team() {
  const eventHeads = [
    {
      id: 1,
      name: 'Rahemeen Kamran',
      position: 'Chair WIE',
      icon: '👩‍💼',
    },
    {
      id: 2,
      name: 'Alishba Malik',
      position: 'Chair IEEE',
      icon: '💻',
    },
    {
      id: 3,
      name: 'Faheela Farooq',
      position: 'President CS Club',
      icon: '🎓',
    },
  ]

  return (
    <div className="team-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="team-header"
      >
        <h1 className="page-title gradient-text">Event Heads</h1>
        <p className="page-subtitle">
          Meet the visionary leaders driving TechFusion 3.0
        </p>
      </motion.div>

      {/* Event Heads Section */}
      <div className="event-heads-section">
        <div className="heads-grid">
          {eventHeads.map((head, index) => (
            <motion.div
              key={head.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="head-card glass-effect"
            >
              <div className="head-avatar">{head.icon}</div>
              <h3 className="head-name">{head.name}</h3>
              <p className="head-position">{head.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
