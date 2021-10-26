import React from "react"
import Navbar from "../components/Navbar.js"
import '../styles/global.css'

export default function Home( {data} ) {
  return (
    <div className="content">
      <Navbar/>
      <div className="about">
      <h3>Resume</h3>
      <iframe width="600" height="600" src="resume.pdf"/>
      </div>
    </div>
  )
}