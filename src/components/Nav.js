import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Nav() {
    const navStyle = {
        color: 'black',
    };
    const githubIcon = < FontAwesomeIcon className = "mr-2 icon-github"
    icon = { faGithub }
    />
    const linkedinIcon = < FontAwesomeIcon className = "ml-2 icon-linkedin"
    icon = { faLinkedin }
    />

    return (
        <div className="Nav">
            <nav className="navbar navbar-light">
                <div>
                    <h3 className="pt-3" > Dennis Chen </h3>
                    <a href="https://github.com/dennischen123"> { githubIcon } </a>
                    <a href="https://www.linkedin.com/in/dennischen123/" > { linkedinIcon } </a>
                </div>
                <ul id="nav-links" className="nav-links">
                    <Link style={ navStyle } to="/">
                        <li> Home </li>
                    </Link>
                    <Link style={ navStyle } to="/about">
                        <li> About </li>
                    </Link>
                    <Link style={ navStyle } to="/projects">
                        <li> Projects </li>
                    </Link>
                    <Link style={ navStyle } to="/resume">
                        <li> Resume </li>
                    </Link>
                    <Link style={ navStyle } to="/contact">
                        <li> Contact </li>
                    </Link>
                </ul>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
          <div class="collapse" id="navContent">
            <ul className="bg-light">
                <Link style={ navStyle } to="/">
                    <li> Home </li>
                </Link>
                <Link style={ navStyle } to="/about">
                    <li> About </li>
                </Link>
                <Link style={ navStyle } to="/projects">
                    <li> Projects </li>
                </Link>
                <Link style={ navStyle } to="/resume">
                    <li> Resume </li>
                </Link>
                <Link style={ navStyle } to="/contact">
                    <li> Contact </li>
                </Link>
            </ul>
          </div>
        </div>
    );
}

export default Nav;