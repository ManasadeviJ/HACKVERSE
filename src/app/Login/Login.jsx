import React from "react"
import {useNavigate} from "react-router-dom"
import useGameState from "../../hooks/useGameState"
import Button from "../../ui/components/Button"
import "./Login.css"

export default function Login(){
  const navigate=useNavigate()
  const login=useGameState(s=>s.login)

  const handleDummyLogin=()=>{
    login({
      id:"dummy-user",
      email:"dummy@hackverse.com",
      role:"participant"
    })
    navigate("/dashboard")
  }

  return(
    <div className="login-wrapper">
      <div className="login-card">
        <h2>HackVerse Login</h2>

        <input placeholder="Email"/>
        <input type="password" placeholder="Password"/>

        <Button full onClick={handleDummyLogin}>
          Login
        </Button>
      </div>
    </div>
  )
}
