import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import flashCodingImg from '../assets/flash_coding.png'
import gamingImg from '../assets/shestrike.png'
import designathonImg from '../assets/designaton.png'
import ideaPitchImg from '../assets/idea_pitch.png'
import posterImg from '../assets/poster_competition.png'
import cybersecurityImg from '../assets/cybersecurity.png'
import scavengerImg from '../assets/scavenger_hunt.png'
import escapeRoomImg from '../assets/escaperoom.png'
import roshniImg from '../assets/roshni.jpeg'
import alishbaFatimaImg from '../assets/alishbafatima.jpeg'
import alishbaNadeemImg from '../assets/alishbanadeem.jpeg'
import raaniaImg from '../assets/sanashaukat.jpeg'
import mareehaImg from '../assets/mareeha.jpeg'
import mubasharaImg from '../assets/mubashara.jpeg'
import mubashara7Img from '../assets/mubashara7.jpeg'
import hifzaImg from '../assets/hifza.jpeg'
import kohinoorImg from '../assets/kohinoor.jpeg'
import './Competitions.css'
import sheImg from '../assets/shestrike.png'

const competitions = [
  {
    id: 1,
    title: 'Flash-Coding Competition',
    logo: flashCodingImg,
    team: 'Individuals or teams (max 3)',
    fee: 'Rs. 2000/- per team',
    // registerLink removed for post-event
    head: {
      name: 'Roshni Fareed',
      phone: '0323-2545157',
      pic: roshniImg,
      role: 'Head, Flash Coding Competition',
      driveLink: 'https://drive.google.com/file/d/1USV1PazuUbLWDC-DywTiO_4_ReSERnlQ/view',
    },
  },
  {
    id: 2,
    title: 'SheStrike Battle Zone Competition',
    logo:sheImg,
    team: 'Individual',
    fee: 'PKR 500 per participant',
    // registerLink removed for post-event
    head: {
      name: 'Alishba Fatima',
      phone: '0310-4736985',
      pic: alishbaFatimaImg,
      role: 'Competition Heads',
      driveLink: 'https://drive.google.com/file/d/1pnWBb83B6EVBaL8jjDXW0kh0FG4gxYLe/view',
    },
  },
  {
    id: 3,
    title: 'Designathon Competition',
    logo: designathonImg,
    team: '2 participants per team',
    fee: 'PKR 1500 per team',
    // registerLink removed for post-event
    head: {
      name: 'Sania Shaukat',
      phone: '0306-4427570',
      pic: raaniaImg,
      role: 'Competition Head, Designathon',
      driveLink: 'https://drive.google.com/file/d/1sHlaJSicMap69OFM9HKt7Y1tp4juqRT3/view?usp=drive_link',
    },
  },
  {
    id: 4,
    title: 'Idea Pitch Competition',
    logo: ideaPitchImg,
    team: 'Individual or max 3 participants',
    fee: 'PKR 500 per team',
    // registerLink removed for post-event
    head: {
      name: 'Mareeha',
      phone: '0331-6706274',
      pic: mareehaImg,
      role: 'Competition Head, Idea Pitch',
      driveLink: 'https://drive.google.com/file/d/1XcQ9WGAT_kQZWOdFCYcKieSGS-Rcqr6C/view',
    },
  },
  {
    id: 5,
    title: 'Poster Competition',
    logo: posterImg,
    team: '2 to 3 members per team',
    fee: 'PKR 400 per team (PKR 300 for KCSC members)',
    // registerLink removed for post-event
    head: {
      name: 'Mubashra Noor',
      phone: '0322-4252786',
      pic: mubasharaImg,
      role: 'Poster Competition Head',
      driveLink: 'https://drive.google.com/file/d/13OqjrDgFQqxbsGcrdkL1zqikxi_RQi4s/view',
    },
  },
  {
    id: 6,
    title: 'Cybersecurity Competition',
    logo: cybersecurityImg,
    team: 'Individual',
    fee: 'PKR 500 per participant',
    // registerLink removed for post-event
    head: {
      name: 'Hifza Qadeer',
      phone: '0317-4813335',
      pic: hifzaImg,
      role: 'Competition Head, Cyber Security CTF',
      driveLink: 'https://drive.google.com/file/d/1FGRPThMVxBrWT4AvcX6o-CsmDQ10pMom/view',
    },
  },
  {
    id: 7,
    title: 'Scavenger Hunt',
    logo: scavengerImg,
    team: '2-3 participants per team',
    fee: 'PKR 500 per team',
    // registerLink removed for post-event
    head: {
      name: 'Alishba Nadeem',
      phone: '0301-4589415',
      pic: alishbaNadeemImg,
      role: 'Competition Head, Scavenger Hunt',
      driveLink: 'https://drive.google.com/file/d/1ltZ_BQkzkKhqw1hDB6tQC-Tj_gxeG91r/view',
    },
  },
  {
    id: 8,
    title: 'Escape Room',
    logo: escapeRoomImg,
    team: 'Individual members',
    fee: 'PKR 500 per participant',
    // registerLink removed for post-event
    head: {
      name: ['Kohinoor', 'Mubashara'],
      phone: ['0331-4396900', '0309-5216393'],
      pic: [kohinoorImg, mubashara7Img],
      driveLink: 'https://drive.google.com/file/d/1LFmwpNPHYox2TU-XQ-Cwz4RXKv2MwIho/view?usp=sharing',
    },
  },
]

function Competitions() {
  // const [flippedCards, setFlippedCards] = useState({})

  // const handleFlip = (id, state) => {
  //   setFlippedCards(prev => ({ ...prev, [id]: state ?? !prev[id] }))
  // }

  // const handleMouseEnter = (id) => {
  //   setFlippedCards(prev => ({ ...prev, [id]: true }))
  // }

  // const handleMouseLeave = (id) => {
  //   setFlippedCards(prev => ({ ...prev, [id]: false }))
  // }

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
          <br />
          {/* Registration closed for post-event version */}
          
          
        </p>
         
      </motion.div>

      {/* Competitions Grid */}
      <div className="competitions-grid" style={{ marginTop:80, marginBottom: 32 }}>
        {competitions.map((competition, index) => {
          // const isFlipped = flippedCards[competition.id]
          return (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ perspective: 1000 }}
            >
              <Box
                // onMouseEnter={() => handleMouseEnter(competition.id)}
                // onMouseLeave={() => handleMouseLeave(competition.id)}
                sx={{ position: 'relative', width: '100%', height: { xs: 300, sm: 320 } }}
              >
                <motion.div
                  // animate={{ rotateY: isFlipped ? 180 : 0 }}
                  // transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    // transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front of Card */}
                  <Card
                    className="competition-card glass-effect"
                    sx={{
                      // position: isFlipped ? 'absolute' : 'relative',
                      // zIndex: isFlipped ? 1 : 2,
                      position: 'relative',
                      zIndex: 2,
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      // backfaceVisibility: 'hidden',
                      // transform: 'rotateY(0deg)',
                      borderRadius: 3,
                      overflow: 'hidden',
                      border: '2px solid rgba(139, 92, 246, 0.6)',
                      background: 'rgba(14, 21, 45, 0.7)',
                      backdropFilter: 'blur(14px)',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img src={competition.logo} alt={competition.title} style={{ width: 120, height: 120, objectFit: 'contain', marginBottom: 18 }} />
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: '1.35rem', letterSpacing: 0.5 }}>
                      {competition.title}
                    </Typography>
                  </Card>
                  {/* Back side card and content commented out for disabling flip and hiding name/phone */}
              </motion.div>
              </Box>

              {/*
              <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ borderRadius: '2rem', px: 3, fontWeight: 700, fontSize: '1rem', background: 'linear-gradient(90deg,#a084e8,#6f4bb1)' }}
                  href={competition.registerLink}
                  target="_blank"
                  rel="noopener"
                  disabled={!competition.registerLink}
                >
                  Register
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ borderRadius: '2rem', px: 3, fontWeight: 700, fontSize: '1rem', border: '2px solid #a084e8', color: '#a084e8' }}
                  href={competition.head.driveLink}
                  target="_blank"
                  rel="noopener"
                >
                  Details
                </Button>
              </Stack>
              */}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Competitions
