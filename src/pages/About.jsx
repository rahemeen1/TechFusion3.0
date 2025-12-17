import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1 className="about-title">
          <span className="about-title-tech">About</span> TechFusion <span className="about-title-number">3.0</span>
        </h1>
        <p className="about-subtitle">
          Celebrating innovation, collaboration, and creativity across competitions, workshops, and community.
        </p>
      </header>

      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            Empower students to explore cutting-edge technology, build real-world skills, and connect with peers and mentors
            through a vibrant, inclusive tech festival.
          </p>
        </div>
        <div className="about-card">
          <h3>What To Expect</h3>
          <p>
            A curated lineup of competitions, speaker sessions, hands-on workshops, and exhibitions designed to inspire and
            challenge participants of all levels.
          </p>
        </div>
        <div className="about-card">
          <h3>Who Can Join</h3>
          <p>
            Open to all students and enthusiasts. Whether you're a beginner or an expert, there's something for you at
            TechFusion.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
