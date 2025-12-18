import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import './About.css';

// Competitions data with unique icons
const competitions = [
  {
    name: 'Flash Coding Competition',
    icon: <span role="img" aria-label="Lightning" style={{ fontSize: 32 }}>⚡</span>,
  },
  {
    name: 'Gaming Competition',
    icon: <SportsEsportsIcon sx={{ color: '#a084e8', fontSize: 32 }} />,
  },
  {
    name: 'Designathon Competition',
    icon: <span role="img" aria-label="Art Palette" style={{ fontSize: 32 }}>🎨</span>,
  },
  {
    name: 'Idea Pitch Competition',
    icon: <span role="img" aria-label="Lightbulb" style={{ fontSize: 32 }}>💡</span>,
  },
  {
    name: 'Poster Competition',
    icon: <span role="img" aria-label="Poster" style={{ fontSize: 32 }}>🖼️</span>,
  },
  {
    name: 'Cybersecurity Competition',
    icon: <span role="img" aria-label="Lock" style={{ fontSize: 32 }}>🔒</span>,
  },
  {
    name: 'Tech Scavenger Hunt',
    icon: <span role="img" aria-label="Magnifying Glass" style={{ fontSize: 32 }}>🔍</span>,
  },
  {
    name: 'Escape Room',
    icon: <span role="img" aria-label="Door" style={{ fontSize: 32 }}>🚪</span>,
  },
];

const workshops = [
  {
    icon: <SportsEsportsIcon sx={{ color: '#a084e8' }} />, title: 'Game Development',
    desc: 'Dive into the world of game creation, from design to deployment, with hands-on activities.'
  },
  {
    icon: <SchoolIcon sx={{ color: '#a084e8' }} />, title: 'Career Counselling',
    desc: 'Get expert advice on tech career paths, resume building, and interview skills.'
  },
  {
    icon: <WorkOutlineIcon sx={{ color: '#a084e8' }} />, title: 'Freelancing',
    desc: 'Learn how to kickstart your freelancing journey and succeed in the digital marketplace.'
  },
];

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      {/* Intro Section */}
      <section className="about-section">
        <h1 className="about-title">About TechFusion 3.0</h1>
        <Typography variant="body1" sx={{ color: '#c7bfff', fontSize: '1.13rem', mb: 2 }}>
          TechFusion 3.0 is Kinnaird College’s flagship student-led technology festival, bringing together hundreds of students, educators, and industry professionals for two days of innovation, learning, and collaboration. The event features a vibrant mix of competitions, hands-on workshops, expert seminars, and networking opportunities, all designed to empower the next generation of tech leaders. Whether you’re a coder, designer, gamer, or aspiring entrepreneur, TechFusion 3.0 offers a platform to showcase your talent, learn new skills, and connect with like-minded peers in a dynamic, inclusive environment.
        </Typography>
        <div className="about-subtitle">Our Mission</div>
        <div className="about-mission">
          Bridging the gap between academia and industry by fostering real-world skills and connections.
        </div>
        <div className="about-subtitle">Our Vision</div>
        <div className="about-vision">
          To inspire innovation, nurture talent, and build a collaborative tech community that thrives on creativity and shared growth.
        </div>
      </section>

      {/* Competitions Section */}
      <section className="about-section competitions-section">
        <h2 className="about-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Competitions at TechFusion 3.0</h2>
        <Grid container spacing={3} className="competitions-grid" justifyContent="center" alignItems="stretch">
          {competitions.map((comp) => (
            <Grid item xs={12} sm={6} md={3} key={comp.name} style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
              <Card className="competition-card" sx={{ border: '1.5px solid #a084e8', borderRadius: '1.1rem', transition: 'box-shadow 0.3s', boxShadow: '0 2px 12px #a084e820', '&:hover': { boxShadow: '0 6px 24px #a084e8cc', transform: 'translateY(-4px) scale(1.03)' }, background: 'rgba(24,18,48,0.97)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 180, height: '100%', width: '100%' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                  <div className="competition-icon" style={{ marginBottom: 8 }}>{comp.icon}</div>
                  <Typography variant="h6" className="competition-name" sx={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', mb: 1, textAlign: 'center' }}>{comp.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* Workshops Section */}
      <section className="about-section workshops-section">
        <h2 className="about-title" style={{ fontSize: '2rem' }}>Workshops</h2>
        <Typography variant="body1" sx={{ color: '#c7bfff', fontSize: '1.08rem', mb: 2 }}>
          Our workshops are designed to equip you with practical skills and insights from industry experts. Join us to learn, create, and grow!
        </Typography>
        <List className="workshops-list">
          {workshops.map((w) => (
            <ListItem key={w.title} alignItems="flex-start">
              <ListItemIcon>{w.icon}</ListItemIcon>
              <ListItemText
                primary={<span style={{ color: '#fff', fontWeight: 600 }}>{w.title}</span>}
                secondary={<span style={{ color: '#c7bfff' }}>{w.desc}</span>}
              />
            </ListItem>
          ))}
        </List>
      </section>

      {/* Buttons Section */}
      <div className="about-buttons">
        <Button
          variant="contained"
          color="secondary"
          sx={{ background: 'linear-gradient(90deg,#a084e8,#6f4bb1)', color: '#fff', fontWeight: 600, borderRadius: '2rem', px: 3, py: 1, fontSize: '1.1rem', boxShadow: '0 2px 12px #a084e850' }}
          href="https://linktr.ee/ieee_techfusion"
          target="_blank"
          rel="noopener"
        >
          Register Now
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ border: '2px solid #a084e8', color: '#a084e8', fontWeight: 600, borderRadius: '2rem', px: 3, py: 1, fontSize: '1.1rem', background: 'rgba(24,18,48,0.7)' }}
          onClick={() => navigate('/competitions')}
        >
          Competitions Overview
        </Button>
      </div>
    </div>
  );
}
