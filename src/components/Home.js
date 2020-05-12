import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home ml-5 mr-5">
      <main>
        <h5 className="ml-2">Hi, my name is</h5>
        <h1>Dennis Chen.</h1>
        <h3 className="mb-5">Full Stack Software Engineer</h3>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
