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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScHlZooudoewj1AgpVMDjWeGG3-NVjSIz3wsfIH_7cJ5OT8Mg/viewform?usp=header',
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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdmJS_fb8OT_CCDcYYw7VcJYfyzg95lRa7IspH6GeDylUfoew/viewform',
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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSezsiZsk9PFysQhJFK33BI99mZWuK7ld-7tOPH0ukWVISyjtA/viewform',
    head: {
      name: 'Sania Shaukat',
      phone: '0306-4427570',
      pic: raaniaImg,
      role: 'Competition Head, Designathon',
      driveLink: 'https://drive.google.com/file/d/1i-iDZrJ_pugsGzSYB8DOL3gAOqgOE9tw/view',
    },
  },
  {
    id: 4,
    title: 'Idea Pitch Competition',
    logo: ideaPitchImg,
    team: 'Individual or max 3 participants',
    fee: 'PKR 500 per team',
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSceJGWz7l3aDx7Ew73ob2_T4yNjYo7WDuaWCXZFPRSh3BA2nA/viewform',
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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf8qPJWIqHxnTbMTaXOZ-VdhA35AF44iU0bypO-G4O1dPMRTw/viewform',
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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdOKd13gIuP8V52D0jQ3QkinhikzIqf6WAno4DoKGllEqVbnw/viewform',
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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe4jOegQDkZGg8Sau7UL29oaehAyuD6dhl6Z2XhFGl8OQCLDg/viewform',
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
    registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfdxdJQGv9RBFvURhhrB7C_7-3VdGJeJZJyAQAnswh88EJw6g/viewform',
    head: {
      name: ['Kohinoor', 'Mubashara'],
      phone: ['0331-4396900', '0309-5216393'],
      pic: [kohinoorImg, mubashara7Img],
      driveLink: 'https://drive.google.com/file/d/1LFmwpNPHYox2TU-XQ-Cwz4RXKv2MwIho/view?usp=sharing',
    },
  },
]

function Competitions() {
  const [flippedCards, setFlippedCards] = useState({})

  const handleFlip = (id, state) => {
    setFlippedCards(prev => ({ ...prev, [id]: state ?? !prev[id] }))
  }

  const handleMouseEnter = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: true }))
  }

  const handleMouseLeave = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: false }))
  }

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
          <br>
          
          </br>
          <b> <i>Registration Deadline: 18 January 2026</i> </b>
          
          
        </p>
         
      </motion.div>

      {/* Competitions Grid */}
      <div className="competitions-grid" style={{ marginTop:40, marginBottom: 100 }}>
        {competitions.map((competition, index) => {
          const isFlipped = flippedCards[competition.id]
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
                onMouseEnter={() => handleMouseEnter(competition.id)}
                onMouseLeave={() => handleMouseLeave(competition.id)}
                sx={{ position: 'relative',
    width: '100%',
    height: 320,          // 🔴 ADD THIS
    marginBottom: '2rem'   }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Front of Card */}
                  <Card
                    className="competition-card glass-effect"
                    sx={{
                      position: isFlipped ? 'absolute' : 'relative',
                      zIndex: isFlipped ? 1 : 2,
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
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
                    <Card
                      className="competition-card glass-effect"
                      sx={{
                        position: isFlipped ? 'relative' : 'absolute',
                        zIndex: isFlipped ? 2 : 1,
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderRadius: 3,
                        overflow: 'hidden',
                        border: '2px solid rgba(139, 92, 246, 0.6)',
                        background: 'linear-gradient(135deg, rgba(14, 21, 45, 0.95) 0%, rgba(20, 30, 60, 0.95) 100%)',
                        backdropFilter: 'blur(14px)',
                        boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)',
                      }}
                    >
                      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                        {/* Head Image(s) and Name(s) */}
                        {Array.isArray(competition.head.pic) ? (
                          competition.head.pic.map((pic, idx) => (
                            <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
                              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                                <Box sx={{
                                  position: 'absolute',
                                  inset: -6,
                                  background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                                  borderRadius: '50%',
                                  filter: 'blur(8px)',
                                  opacity: 0.6,
                                }} />
                                <img
                                  src={pic}
                                  alt={competition.head.name[idx]}
                                  style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    objectFit: 'contain',
                                    border: '3px solid rgba(139, 92, 246, 0.8)',
                                    position: 'relative',
                                    zIndex: 1,
                                    backgroundColor: 'rgba(14, 21, 45, 0.8)'
                                  }}
                                />
                              </Box>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: '#fff', textAlign: 'center', fontSize: '0.85rem', mt: 1 }}>
                                {competition.head.name[idx]}
                              </Typography>
                              <Typography sx={{ color: '#06b6d4', fontWeight: 700, fontSize: '1.05rem', mt: 0.5 }}>
                                {competition.head.phone[idx]}
                              </Typography>
                            </Box>
                          ))
                        ) : (
                          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                              <Box sx={{
                                position: 'absolute',
                                inset: -6,
                                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                                borderRadius: '50%',
                                filter: 'blur(8px)',
                                opacity: 0.6,
                              }} />
                              <img
                                src={competition.head.pic}
                                alt={competition.head.name}
                                style={{
                                  width: 120,
                                  height: 120,
                                  borderRadius: '50%',
                                  objectFit: 'contain',
                                  border: '3px solid rgba(139, 92, 246, 0.8)',
                                  position: 'relative',
                                  zIndex: 1,
                                  backgroundColor: 'rgba(14, 21, 45, 0.8)'
                                }}
                              />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: '#fff', textAlign: 'center', fontSize: '1.1rem', mt: 1 }}>
                              {competition.head.name}
                            </Typography>
                            <Typography sx={{ color: '#06b6d4', fontWeight: 700, fontSize: '1.05rem', mt: 0.5 }}>
                              {competition.head.phone}
                            </Typography>
                          </Box>
                        )}
                      </CardContent>
                        </Card>
              </motion.div>
              </Box>

              {/* Buttons below card */}
              <Stack direction="row" spacing={1.2} sx={{ mt: 2.5, mb: 6, width: '100%' }}>
                <Button
                  fullWidth
                  href={competition.registerLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                    boxShadow: '0 0 15px rgba(6, 182, 212, 0.35)',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #0ea5e9, #7c3aed)',
                      boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
                    },
                  }}
                >
                  Register
                </Button>
                <Button
                  fullWidth
                  href={competition.head.driveLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  startIcon={<span style={{fontSize:'1.2em'}}>📄</span>}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 800,
                    fontSize: '1.08rem',
                    background: 'linear-gradient(90deg, #8b5cf6 60%, #06b6d4 100%)',
                    color: '#fff',
                    boxShadow: '0 0 18px 2px #8b5cf6',
                    pointerEvents: 'auto',
                    cursor: competition.head.driveLink ? 'pointer' : 'not-allowed',
                    opacity: competition.head.driveLink ? 1 : 0.7,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #a78bfa 60%, #06b6d4 100%)',
                      color: '#fff',
                      boxShadow: '0 0 28px 4px #8b5cf6',
                    },
                  }}
                >
                  Details
                </Button>
              </Stack>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Competitions
