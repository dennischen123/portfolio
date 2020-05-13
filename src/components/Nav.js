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
        <nav >
            <div>
                <h3 className="pt-3" > Dennis Chen </h3>
                <a href="https://github.com/dennischen123"> { githubIcon } </a>
                <a href="https://www.linkedin.com/in/dennischen123/" > { linkedinIcon } </a>
            </div>
            <ul className="nav-links">
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
                {/* <a href="/images/Resume.pdf" className="text-dark"><li> Resume </li></a> */}
                </Link>
                <Link style={ navStyle } to="/contact">
                    <li> Contact </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;