import React from "react"
import Button from "../../ui/components/Button"
import "../../styles/panels/event-detail.css"

export default function EventDetail(){
  return(
    <div className="event-detail">

      <h1>AI Innovation Hackathon 2026</h1>
      <p className="event-desc">
        Build innovative AI solutions to solve real-world problems.
      </p>

      <section>
        <h2>Event Information</h2>
        <ul>
          <li>Mode: Online</li>
          <li>Dates: Feb 10 – Feb 15</li>
        </ul>
      </section>

      <section>
        <h2>Rules & Structure</h2>
        <ul>
          <li>Team size: 2 – 4</li>
          <li>Eligibility: Students only</li>
          <li>Submission: PPT + GitHub</li>
          <li>Disqualification: Plagiarism</li>
        </ul>
      </section>

      <section>
        <h2>Timeline</h2>
        <ul>
          <li>Registration: Feb 8</li>
          <li>Submission: Feb 14</li>
          <li>Judging: Feb 15</li>
          <li>Results: Feb 16</li>
        </ul>
      </section>

      <section>
        <h2>Evaluation Criteria</h2>
        <ul>
          <li>Innovation</li>
          <li>Technical Complexity</li>
          <li>Feasibility</li>
          <li>Presentation</li>
        </ul>
      </section>

      <Button>Join Event</Button>

    </div>
  )
}
