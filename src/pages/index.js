import React from "react"
import Navbar from "../components/Navbar.js"
import '../styles/global.css'
import { graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

export default function Home({data}) {
  return (
    <div className="content">
      <Navbar/>
        <div className="about">
          <h3>UNDER CONSTRUCTION :) </h3>
          <h3>Hello there!</h3>
          <p>I'm Chris, a freshman at the University of Toronto.
          I made this website to motivate myself to learn React.
          I know, sadly, this website is still very empty , but I promise
          I'll add more content and improve the aesthetic of this website as time goes by.
          </p>
      <p>
        So for now, please bear with this emptiness... ( of my website that is ).
      </p>

      <p>You can find me on one of the following</p>
      <div className="images">
      <div className="icon">
      <Link target="_blank" rel="noreferrer noopener" to="https://github.com/chrisamrl">
        <GatsbyImage image={getImage(data.front)} alt="github" />
      </Link>
      </div>
      <Link target="_blank" rel="noreferrer noopener" to="https://www.linkedin.com/in/christian-amriel/">
        <GatsbyImage image={getImage(data.front2)} alt="github" />
      </Link>
      </div>
      </div>
    </div>
  )
}

export const query = graphql`
query MyQuery {
  front:  file(relativePath: {eq: "github.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 50, height: 50)
    }
  }
  front2: file(relativePath: {eq: "linkedin.png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width: 50, height: 50)
    }
  }
}
`