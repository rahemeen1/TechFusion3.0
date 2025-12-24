import React, { useEffect, useState } from 'react'
import techfusionBanner from '../assets/TechFusion Banner.png';
import alishbaImg from '../assets/alishba.jpeg';
import drghousiaImg from '../assets/drghousia.jpeg';
import faheelaImg from '../assets/faheela.jpeg';
import rahemeenImg from '../assets/rahemeen.jpeg';
import drsidraImg from '../assets/drsidra.jpeg';
 import msidaImg from '../assets/msida.jpg.jpeg';
 import msghousiaImg from '../assets/msghousia.jpeg';
 import newmsridaImg from '../assets/newmsrida.jpeg';
 import msrridanewImg from '../assets/msrridanew.jpeg';
 



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
    <>
      {/* SECTION 0: HERO BANNER */}
      <div className="tf3-hero-banner-section">
        <div className="tf3-hero-banner">
          <img
            src={techfusionBanner}
            alt="TechFusion 3.0 Banner"
            className="tf3-hero-banner-img"
          />
        </div>
      </div>


      {/* SECTION 1: LETTERS / MESSAGES */}
      <div className="tf3-letters-section">
        {[
          {
            img: drsidraImg,
            heading: 'Letter from the HOD',
            text: `  To our Students, Guests, and Global Community, 

            For 112 years, Kinnaird has stood as a hallmark of excellence in grooming women to become leaders of impact. Our institution is built on a legacy of intellectual empowerment and grace. As we move this prestigious tradition forward, the Department is honored to host our premier flagship event, Techfusion 3.0 x Shestrike.

            This event represents a powerful convergence of technical innovation and the vibrant world of gaming. By merging the professional rigor of Techfusion with the renowned energy of Shestrike, we are creating a platform where technical mastery meets creative strategy. Our focus remains on preparing women to lead in high growth industries like Game Development, Cybersecurity, and Artificial Intelligence.

            While Kinnaird is rooted in the education of women, we are firm believers in the power of inclusion and diversity. We recognize that true innovation thrives on a rich exchange of ideas from across the academic landscape. We are proud to open our doors for intra-university networking, inviting participants to experience the serenity and prestige of our campus while collaborating on the future of technology. 

            Our goal is to equip every attendee with the professional insights and competitive edge needed to dominate the modern workforce. From career strategy to hands on creation, this summit is a testament to our commitment to progress.

            I invite you to step into this arena to showcase your talent and experience the unique strength of our community. Together, we will be pioneering new frontiers in the digital world.

            With profound regards,
Dr. Sidra Zafar
Head of Department, Computer Science 
Kinnaird College for Women `
          },
          {
            img: msghousiaImg,
            heading: 'Letter from CS Club Advisor',
            text: `Dear Participants,

            We are delighted to welcome you to TechFusion, an exciting intra-university event organized by the Department of Computer Science, Kinnarid College for Women, where innovation, creativity, and technical excellence come together on one dynamic platform.

Kinnaird College is proud of its supportive and encouraging academic environment, committed to empowering women by providing opportunities that foster confidence, leadership, and excellence in technology and innovation. TechFusion reflects this vision by creating a platform where students are encouraged to explore, compete, and grow.

TechFusion offers a diverse range of competitions designed to challenge and inspire you. These include Flash Coding, Gaming competition, Designathon, and Cybersecurity competitions, along with many other engaging activities. Each competition aims to strengthen problem-solving skills, creativity, and practical understanding, while building a strong edge between academia and real-world applications.

This event is not only about competition, but also about learning, collaboration, and exploring new ideas. It provides an excellent opportunity for students to apply academic knowledge, showcase talent, and engage in healthy competition within the university.

We are thrilled to have you with us and wish you the very best of luck in all the competitions. May TechFusion be a memorable and rewarding experience for you.

Welcome to TechFusion — let the innovation begin!

Warm regards,
Dr. Ghousia Usman
Advisor, Kinnaird Computer Science Club`
          },
          {
            img: msrridanewImg,
            heading: 'Letter from IEEE Advisor',
            text: ` On behalf of the IEEE Kinnaird Student Branch, I am delighted to bring to youTechFusion 3.0, our flagship two-day technical event scheduled for 21st–22nd January 2026 at Kinnaird College for Women, Lahore. 
            
            TechFusion 3.0 represents IEEE’s commitment to cultivating technical excellence, innovation, and leadership among students. This event brings together technology, creativity, and strategic thinking through hands-on competitions, workshops, expert talks, and collaborative challenges designed to prepare participants for emerging and high-impact domains.
            
            While rooted in empowering women in technology, TechFusion 3.0 also embraces inclusion and inter-university collaboration, providing a platform where diverse ideas converge to shape forward-looking solutions. The dedication and vision of our student organizers reflect the true spirit of IEEE—learning by doing, leading by serving, and innovating with purpose.
            
  I encourage all participants to seize this opportunity to showcase their skills, expand their perspectives, and engage with a vibrant community of future technologists. 
  
  See you all there,
   Rida Hijab Basit
IEEE Kinnaird Student Branch Counselor
Computer Science Department`
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
        <h2 className="tf3-team-title tf3-purple" style={{ fontSize: '3.5rem', width: '100%', letterSpacing: '0.04em', padding: '0.5rem 0', textAlign: 'center' }}>Event Heads</h2>
        <div className="tf3-team-cards">
          {[
            {
              img: rahemeenImg,
              name: 'Rahemeen Kamran',
              title: 'IEEE WIE Chairperson',
            },
            {
              img: alishbaImg,
              name: 'Alishba Malik',
              title: 'IEEE Chairperson',
            },
            {
              img: faheelaImg,
              name: 'Faheela Farooq',
              title: 'Kinnaird CS Club President',
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
    </>
  )
}

export default Home
