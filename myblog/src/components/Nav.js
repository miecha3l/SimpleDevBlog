import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return(
        <nav className="app-nav">
            <Link className="nav-link" to="/">
                <h3>SimpleDev</h3>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/posts">Posts</Link>
            </div>
        </nav>
    );
}

export default NavBar;