import React from "react"
import Navbar from "../components/Navbar.js"
import '../styles/global.css'
import { graphql } from "gatsby"


export default function Home( {data} ) {
  console.log(data)
  return (
    <div className="content">
      <Navbar/>
        <div className="about">
          <h3>Resume</h3>
          <object data={data.file.publicURL} type="application/pdf" width="700px" height="800px">
          <p>Your browser does not support PDFs. Please download the PDF to view it:<a href="resume.pdf"> Download PDF</a></p>
          </object>
        </div>
    </div>
  )
}

export const query = graphql`
query ResumeInfo {
  file(relativePath: {eq: "resume.pdf"}) {
    publicURL
  }
}
`