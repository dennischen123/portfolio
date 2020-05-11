// import React, { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Nav() {
    const navStyle = {
        color: 'black',
    };

  return (
    <nav>
        <h3>Dennis Chen</h3>
        <FontAwesomeIcon icon="check-square" />
        <ul className="nav-links">
            <Link style={navStyle} to="/">
                <li>Home</li>
            </Link>
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={navStyle} to="/projects">
                <li>Projects</li>
            </Link>
            <Link style={navStyle} to="/contact">
                <li>Contact</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
 