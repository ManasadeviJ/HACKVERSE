import {create} from "zustand"

const useGameState=create((set)=>({
  user:null,
  loggedIn:false,
  team:null,

  login:(user)=>set({
    user,
    loggedIn:true
  }),

  logout:()=>set({
    user:null,
    loggedIn:false,
    team:null
  })
}))

export default useGameState
