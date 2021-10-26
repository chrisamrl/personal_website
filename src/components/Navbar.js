import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Christian Amriel</h1>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
        </nav>
    )
}
