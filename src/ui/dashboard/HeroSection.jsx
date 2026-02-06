import React from "react";
import { motion } from "framer-motion";
import "../../styles/dashboard/HeroSection.css";


export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      {/* NAVBAR */}
      <nav className="hero-navbar">
        <div className="logo">&lt;/&gt; Hackverse</div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <input
          className="search-input"
          placeholder="Search events..."
        />
      </nav>

      {/* HERO CONTENT */}
      <div className="hero-content">
        {/* LEFT TEXT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Hackverse</h1>
          <p>
            Hackathons are innovation-driven events that bring people together
            to collaboratively solve problems within limited timeframes.
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  );
}
