import { Link } from 'gatsby'
import React from 'react'
import '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <h1>Christian Amriel</h1>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
        </div>
    )
}
