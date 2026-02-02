import React from "react"
import Router from "./Router"
import "../styles/globals.css"

export default function App(){
  return(
    <div className="app-bg">
      <div className="overlay">
        <Router/>
      </div>
    </div>
  )
}
