import React, { useEffect, useState } from 'react'
import techfusionBanner from '../assets/TechFusion Banner.png';
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

      {/* SECTION 0: HERO BANNER */}
      <div className="tf3-hero-banner-section">
        <img
          src={techfusionBanner}
          alt="TechFusion 3.0 Banner"
          className="tf3-hero-banner-img"
          style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '100vw', objectFit: 'cover' }}
        />
      </div>
      <div className="tf3-hero-dates tf3-purple" style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.2rem', margin: '1.5rem 0 2.2rem 0', letterSpacing: '0.05em' }}>21–22 January</div>

      {/* SECTION 1: LETTERS / MESSAGES */}
      <div className="tf3-letters-section">
        {[
          {
            img: '/hod-placeholder.jpg',
            heading: 'Letter from HOD',
            text: 'Welcome to TechFusion 3.0! We are proud to host this event that celebrates innovation and collaboration. Join us for an unforgettable experience.',
          },
          {
            img: '/advisor-cs-placeholder.jpg',
            heading: 'Letter from CS Club Advisor',
            text: 'TechFusion is a platform for students to shine and grow. We look forward to your participation and creativity!',
          },
          {
            img: '/advisor-ieee-placeholder.jpg',
            heading: 'Letter from IEEE Advisor',
            text: 'Let’s make TechFusion 3.0 a memorable journey of learning, networking, and fun. Best wishes to all participants!',
          },
        ].map((card, idx) => (
          <motion.div
            className="tf3-letter-card"
            key={card.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <div className="tf3-letter-img-wrap">
              <img src={card.img} alt={card.heading} className="tf3-letter-img" />
            </div>
            <div className="tf3-letter-content tf3-letter-content-centered">
              <motion.h3
                className="tf3-letter-heading tf3-purple"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.1 + idx * 0.2 }}
                style={{ textAlign: 'left', marginBottom: '0.7rem' }}
              >
                {card.heading}
              </motion.h3>
              <motion.p
                className="tf3-letter-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.8, delay: 0.5 + idx * 0.2 }}
                style={{ textAlign: 'left' }}
              >
                {card.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECTION 2: EVENT HEADS / TEAM */}
      <div className="tf3-team-section">
        <h2 className="tf3-team-title tf3-purple">Event Heads</h2>
        <div className="tf3-team-cards">
          {[
            {
              img: '/images/heads/rahemeen.jpg',
              name: 'Rahemeen Kamran',
              title: 'IEEE Chairperson',
            },
            {
              img: '/images/heads/alishba.jpg',
              name: 'Alishba Malik',
              title: 'IEEE Chairperson',
            },
            {
              img: '/images/heads/faheela.jpg',
              name: 'Faheela Farooq',
              title: 'CS Club President',
            },
          ].map((member, idx) => (
            <motion.div
              className="tf3-flip-card"
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.15 }}
              tabIndex={0}
              aria-label={`${member.name}, ${member.title}`}
            >
              <div className="tf3-flip-inner">
                <div className="tf3-flip-front">
                  <img src={member.img} alt={member.name} className="tf3-flip-img" />
                </div>
                <div className="tf3-flip-back">
                  <div className="tf3-team-info">
                    <div className="tf3-team-name">{member.name}</div>
                    <div className="tf3-team-pos tf3-purple">{member.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
