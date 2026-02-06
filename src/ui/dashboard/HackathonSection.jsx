import React from "react";
import { motion } from "framer-motion";
import { hackathons } from "../../data/dashboardData";
import HackathonCard from "../cards/HackathonCard";
import "../../styles/dashboard/HackathonSection.css";

export default function HackathonSection() {
  return (
    <section className="hackathon-section">
      <h2 className="section-title">New Hackathon &lt;/&gt;</h2>

      <div className="hackathon-scroll">
        {hackathons.map((hack, index) => (
          <motion.div
            key={hack.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <HackathonCard hackathon={hack} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
