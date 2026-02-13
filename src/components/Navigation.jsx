import React, { useState } from 'react'
import { NavLink, Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'

import './Navigation.css'

// Registration nav removed for post-event version
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Competitions', href: '/competitions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleDrawer = () => setMobileOpen((v) => !v)

  return (
    <>
      <AppBar
        position="fixed"
        elevation={8}
        sx={{
          background: '#33215d7b',
          backdropFilter: 'blur(20px)',
          borderBottom: '2px solid',
          borderImage: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 100%) 1',
        }}
      >
        <Toolbar sx={{ maxWidth: 1400, width: '100%', mx: 'auto' }}>
          <Typography component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none' }}>
            <span className="logo-brand">
              <span className="logo-text">
                <span className="tech-text">TECH</span>
                <span className="fusion-text">FUSION</span>
              </span>
              <span className="logo-version">3.0</span>
            </span>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                component={NavLink}
                to={item.href}
                color="inherit"
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 0,
                  '&.active': {
                    color: '#06b6d4',
                    borderBottom: '2px solid #06b6d4',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={mobileOpen} onClose={toggleDrawer} sx={{ display: { md: 'none' } }}>
        <Box sx={{ background: 'rgba(10, 14, 39, 0.98)', color: '#e2e8f0' }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton component={NavLink} to={item.href} onClick={toggleDrawer}
                  sx={{ '&.active .MuiListItemText-primary': { color: '#06b6d4', fontWeight: 700 } }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navigation