// import React, { useEffect, useState } from 'react';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

ReactDOM.render(element, document.body)

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <i className="fab fa-github"></i>
      <i className="fab fa-linkedin"></i>
    </div>
  );
}

export default Home;
