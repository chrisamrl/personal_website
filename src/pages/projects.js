import React from "react"
import Navbar from "../components/Navbar.js"
import '../styles/global.css'
import { graphql, Link } from 'gatsby'

export default function Home({ data }) {
  const projects = data.allMarkdownRemark.nodes
  console.log(data)

  return (
    <div className="content">
      <Navbar/>
      <div className="about">
      <h3 class="pageTitle">Projects (Click to open Github Repo)</h3>
      <div>
        {projects.map(project => (
      <Link target="_blank" rel="noreferrer noopener" to={project.frontmatter.github} style={{ textDecoration: 'none', color: 'black'}}>
        <div className="projects">
            <div className="projectsContainer">
            <h4 className="projectsTitle">{project.frontmatter.title}</h4>
            <ul>
              <li>{project.frontmatter.stack}</li>
              <li><div dangerouslySetInnerHTML={{ __html: project.html}}></div></li>
            </ul>
            </div>
          </div>
        </Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export const query = graphql`
query ProjectsInfo {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        title
        stack
        github
      }
      id
    }
  }
}
`