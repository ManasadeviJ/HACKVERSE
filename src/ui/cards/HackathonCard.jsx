import React from "react";
import "../../styles/dashboard/HackathonCard.css";

export default function HackathonCard({ hackathon }) {
  return (
    <div className="hackathon-card">
      <div className="hackathon-avatar" />
      <h4>{hackathon.name}</h4>
      <p>Deadline to Reg</p>
    </div>
  );
}
