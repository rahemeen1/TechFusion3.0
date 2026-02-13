import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Gallery.css';

// Import WhatsApp images manually
import img1 from '../assets/WhatsApp Image 2026-02-05 at 12.00.44 AM.jpeg';
import img2 from '../assets/WhatsApp Image 2026-02-05 at 12.00.44 AM (1).jpeg';
import img3 from '../assets/WhatsApp Image 2026-02-05 at 12.00.45 AM.jpeg';
import img4 from '../assets/WhatsApp Image 2026-02-05 at 12.00.45 AM (1).jpeg';
import img5 from '../assets/WhatsApp Image 2026-02-05 at 12.00.46 AM.jpeg';
import img6 from '../assets/WhatsApp Image 2026-02-05 at 12.00.47 AM.jpeg';
import img7 from '../assets/WhatsApp Image 2026-02-05 at 12.00.48 AM.jpeg';
import img8 from '../assets/WhatsApp Image 2026-02-05 at 12.00.48 AM (1).jpeg';
import img9 from '../assets/WhatsApp Image 2026-02-05 at 12.00.49 AM.jpeg';
import img10 from '../assets/WhatsApp Image 2026-02-05 at 12.00.49 AM (1).jpeg';
import img11 from '../assets/WhatsApp Image 2026-02-05 at 12.00.49 AM (2).jpeg';
import img12 from '../assets/WhatsApp Image 2026-02-05 at 12.00.50 AM.jpeg';
import img13 from '../assets/WhatsApp Image 2026-02-05 at 12.00.50 AM (1).jpeg';
import img14 from '../assets/WhatsApp Image 2026-02-05 at 12.00.50 AM (2).jpeg';
import img15 from '../assets/WhatsApp Image 2026-02-05 at 12.00.51 AM.jpeg';
import img16 from '../assets/WhatsApp Image 2026-02-05 at 12.00.52 AM.jpeg';
import img17 from '../assets/WhatsApp Image 2026-02-05 at 12.00.52 AM (1).jpeg';
import img18 from '../assets/WhatsApp Image 2026-02-05 at 12.00.54 AM.jpeg';
import img19 from '../assets/WhatsApp Image 2026-02-05 at 12.00.55 AM.jpeg';
import img20 from '../assets/WhatsApp Image 2026-02-05 at 12.00.56 AM.jpeg';
import img21 from '../assets/WhatsApp Image 2026-02-05 at 12.00.57 AM.jpeg';
import img22 from '../assets/WhatsApp Image 2026-02-05 at 12.00.57 AM (1).jpeg';
import img23 from '../assets/WhatsApp Image 2026-02-05 at 12.00.57 AM (2).jpeg';
import img24 from '../assets/WhatsApp Image 2026-02-05 at 12.00.58 AM.jpeg';

const galleryImages = [
  // Row 1: images 9, 17, 19, 21
  { src: img9, msg: 'Creative Minds' },
  { src: img17, msg: 'Future Ready' },
  { src: img19, msg: 'Making Memories' },
  { src: img21, msg: 'Dream Big' },
  // Row 2: images 2, 3, 5, 16
  { src: img2, msg: 'Women in Tech' },
  { src: img3, msg: 'Powering the Future' },
  { src: img5, msg: 'Tech Talks' },
  { src: img16, msg: 'Empowering Women' },
  // Row 3: images 1, 6, 18, 24
  { src: img1, msg: 'Innovation in Action' },
  { src: img6, msg: 'Collaboration' },
  { src: img18, msg: 'Unleashing Potential' },
  { src: img24, msg: 'See You Next Year!' },
  // Row 4: images 10, 12, 20, 22
  { src: img10, msg: 'Next Gen Leaders' },
  { src: img12, msg: 'Inspiring Change' },
  { src: img20, msg: 'Game Changers' },
  { src: img22, msg: 'Lead the Way' },
  // Row 5: images 13, 15, 23, 14
  { src: img13, msg: 'Building Networks' },
  { src: img15, msg: 'TechFusion Family' },
  { src: img23, msg: 'Tech for Good' },
  { src: img14, msg: 'Bright Ideas' },
  // Remaining images in original order, skipping those already listed
  { src: img4, msg: 'Team Spirit' },
  { src: img7, msg: 'Celebrating Success' },
  { src: img8, msg: 'Learning Together' },
  { src: img11, msg: 'Fun Moments' },
];


import { motion } from 'framer-motion';

const isTouchDevice = () => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const Gallery = () => {
  return (
    <Box
      className="tf3-gallery-section"
      sx={{ pt: 0, pb: { xs: 3, md: 6 }, px: { xs: 1, md: 4 }  }}
    >
      <h2 className="tf3-gallery-title tf3-purple" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        TechFusion 3.0 Gallery
      </h2>
      <Grid container spacing={3} justifyContent="center">
        {galleryImages.map((img, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <motion.div
              className="tf3-gallery-card"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={!isTouchDevice() ? { scale: 1.03, boxShadow: '0 0 32px 0 #8b5cf6' } : {}}
              whileTap={isTouchDevice() ? { scale: 1.03, boxShadow: '0 0 32px 0 #8b5cf6' } : {}}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              style={{
                borderRadius: 18,
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                outline: 'none',
                background: 'transparent',
                height: 270,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 0,
                maxWidth: 340,
                aspectRatio: '4/3',
              }}
            >
              <img
                className="tf3-gallery-img"
                src={img.src}
                alt={img.msg}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
