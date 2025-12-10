import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [stars, setStars] = useState([])
  const { scrollY } = useScroll()
  const robotY = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setStars(newStars)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="home-container">
      {/* Animated Background Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Animated Gradient Orbs */}
      <motion.div
        className="orb orb-purple"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="orb orb-cyan"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <div className="home-content">
        <motion.div
          className="content-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="tagline">
            <div className="tagline-badge">
              <Sparkles size={16} className="badge-icon" />
              <span>21st & 22nd January 2026</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="main-heading">
            <span className="heading-tech">TECH</span>
            <span className="heading-fusion">FUSION</span>
            <span className="heading-number">3.0</span>
          </motion.h1>

          {/* Tagline Text */}
          <motion.p variants={itemVariants} className="tagline-text">
            Beyond Innovation, Into Evolution
          </motion.p>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="subtitle">
            Experience cutting-edge technology, brilliant minds, and endless
            possibilities at Kinnaird College for Women
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="cta-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/competitions" className="btn btn-primary glow-cyan">
                <span>Explore Competitions</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn btn-secondary">
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Event Info Cards */}
          <motion.div variants={itemVariants} className="info-cards">
            {[
              {
                icon: '🏆',
                title: 'Competitions',
                description: 'Exciting challenges across tech domains',
              },
              {
                icon: '👥',
                title: 'Network',
                description: 'Connect with industry professionals',
              },
              {
                icon: '🚀',
                title: 'Innovation',
                description: 'Showcase your amazing projects',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="info-card glass-effect"
                whileHover={{ y: -10 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Logos Row - Bottom of Page */}
          <motion.div variants={itemVariants} className="logos-row logos-bottom">
            <div className="logo-item-small">IEEE</div>
            <div className="logo-item-small">WIE</div>
            <div className="logo-item-small">KCW</div>
            <div className="logo-item-small">KCCS</div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-indicator"
          >
            <p>Scroll to explore more</p>
            <div className="scroll-icon">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="scroll-dot"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
