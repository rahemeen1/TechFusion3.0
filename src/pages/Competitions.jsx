import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, Clock, Award } from 'lucide-react'
import './Competitions.css'

function Competitions() {
  const competitions = [
    {
      id: 1,
      title: 'Code Sprint',
      description:
        'Solve challenging algorithmic problems within a time limit. Test your coding prowess and problem-solving abilities.',
      icon: '💻',
      participants: '4-5 per team',
      duration: '3 hours',
      prize: '₨50,000',
    },
    {
      id: 2,
      title: 'Web Dev Showdown',
      description:
        'Build an innovative web application. Show off your full-stack development skills with modern technologies.',
      icon: '🌐',
      participants: '3-4 per team',
      duration: '5 hours',
      prize: '₨40,000',
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      description:
        'Develop an AI solution for a real-world problem. Demonstrate your machine learning and data science expertise.',
      icon: '🤖',
      participants: '3-4 per team',
      duration: '6 hours',
      prize: '₨45,000',
    },
    {
      id: 4,
      title: 'Design Challenge',
      description:
        'Create stunning UI/UX designs for a given brief. Show your creativity and design thinking abilities.',
      icon: '🎨',
      participants: '2-3 per team',
      duration: '4 hours',
      prize: '₨35,000',
    },
    {
      id: 5,
      title: 'Cybersecurity Challenge',
      description:
        'Identify and fix security vulnerabilities. Prove your expertise in securing systems and data.',
      icon: '🔒',
      participants: '2-3 per team',
      duration: '3.5 hours',
      prize: '₨40,000',
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description:
        'Build a fully functional mobile application. Create something innovative using React Native or Flutter.',
      icon: '📱',
      participants: '3-4 per team',
      duration: '5 hours',
      prize: '₨45,000',
    },
  ]

  return (
    <div className="competitions-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="competitions-header"
      >
        <h1 className="page-title gradient-text">Competitions</h1>
        <p className="page-subtitle">
          Showcase your skills across diverse technical domains. Choose your
          challenge and compete with the brightest minds.
        </p>
      </motion.div>

      {/* Competitions Grid */}
      <div className="competitions-grid">
        {competitions.map((competition, index) => (
          <motion.div
            key={competition.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10 }}
            className="competition-card glass-effect"
          >
            <div className="card-icon">{competition.icon}</div>
            <h3 className="card-title">{competition.title}</h3>
            <p className="card-description">{competition.description}</p>

            <div className="card-details">
              <div className="detail-item">
                <Users size={18} className="detail-icon" />
                <span>{competition.participants}</span>
              </div>
              <div className="detail-item">
                <Clock size={18} className="detail-icon" />
                <span>{competition.duration}</span>
              </div>
              <div className="detail-item">
                <Award size={18} className="detail-icon" />
                <span className="prize">{competition.prize}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="register-btn"
            >
              Register Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Guidelines Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="guidelines-section glass-effect"
      >
        <h2 className="section-title gradient-text">
          General Competition Guidelines
        </h2>
        <div className="guidelines-grid">
          <div className="guideline-item">
            <h4>Eligibility</h4>
            <p>
              Open to all students from any institution. Teams can have 2-5
              members. All participants must bring valid student ID.
            </p>
          </div>
          <div className="guideline-item">
            <h4>Requirements</h4>
            <p>
              Laptops and required software must be arranged by participants.
              Internet connectivity will be provided. Limited power outlets.
            </p>
          </div>
          <div className="guideline-item">
            <h4>Judging</h4>
            <p>
              Judging will be based on functionality, creativity, code quality,
              and presentation. Final round winners will be announced on Day 2.
            </p>
          </div>
          <div className="guideline-item">
            <h4>Important</h4>
            <p>
              Registration deadline is 15th January 2026. All participants must
              follow the code of conduct.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Competitions
