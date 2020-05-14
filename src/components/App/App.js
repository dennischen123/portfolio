// import React, { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Home from '../Home';
import Nav from '../Nav';
import Resume from '../Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}/> */}
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;