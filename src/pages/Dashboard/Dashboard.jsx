import React from "react"
import TeamPanel from "../../ui/panels/TeamPanel"
import SubmissionPanel from "../../ui/panels/SubmissionPanel"
import ResultsPanel from "../../ui/panels/ResultsPanel"
import Button from "../../ui/components/Button"
import "./Dashboard.css"

export default function Dashboard(){
  return(
    <div className="dashboard-container">

      <header className="dashboard-header">
        <h1>Hackathon Dashboard</h1>
        <Button>Join Event</Button>
      </header>

      <section className="dashboard-grid">
        <TeamPanel/>
        <SubmissionPanel/>
        <ResultsPanel/>
      </section>

    </div>
  )
}
