import React from "react"
import "../../styles/Button.css"

export default function Button({children,onClick,full,type="button"}){
  return(
    <button
      type={type}
      onClick={onClick}
      className={`btn ${full?"btn-full":""}`}
    >
      {children}
    </button>
  )
}
