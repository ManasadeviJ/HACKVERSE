import React from "react";
import { motion } from "framer-motion";
import "../../styles/dashboard/FooterSection.css";

export default function FooterSection() {
  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="footer-grid">
        <div className="footer-item">
          <h4>Enrich Knowledge</h4>
          <p>Learn by building real solutions</p>
        </div>

        <div className="footer-item">
          <h4>Form Friends</h4>
          <p>Collaborate with passionate builders</p>
        </div>

        <div className="footer-item">
          <h4>Win Prizes</h4>
          <p>Showcase skills & earn rewards</p>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 Hackverse. All rights reserved.
      </p>
    </motion.footer>
  );
}
