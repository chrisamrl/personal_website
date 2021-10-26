import React from "react"
import Navbar from "../components/Navbar.js"
import '../styles/global.css'


export default function Home( {data} ) {
  return (
    <div className="content">
      <Navbar/>
        <div className="about">
          <h3>Resume</h3>
          <object data="resume.pdf" type="application/pdf" width="700px" height="700px">
          <p>The browser does not support PDFs <a href="resume.pdf">Please download the PDF to view it: Download PDF</a></p>
          </object>
        </div>
    </div>
  )
}
