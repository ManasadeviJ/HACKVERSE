import React from "react"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "../pages/Login/Login"
import Dashboard from "../pages/Dashboard/Dashboard"
import useGameState from "../hooks/useGameState"

export default function Router(){
  const loggedIn=useGameState(s=>s.loggedIn)

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route
          path="/dashboard"
          element={loggedIn?<Dashboard/>:<Navigate to="/login"/>}
        />
        <Route
          path="*"
          element={<Navigate to="/login"/>}
        />
      </Routes>
    </BrowserRouter>
  )
}
