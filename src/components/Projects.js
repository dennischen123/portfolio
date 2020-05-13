import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  const githubIcon = <FontAwesomeIcon className = "mr-2 icon-github" icon = { faGithub }/>

  return (
    <div className="Projects">
      <h1 className="mb-5">Projects</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm row">
            <img className="col-sm image" src={`${process.env.PUBLIC_URL}/images/trackItPic.png`} alt="projectPicture"></img>
            <div className="col-sm text-left">
              <div>
                <a href="https://github.com/dennischen123/trackIt"> { githubIcon } </a>
                <a href="https://track--it.herokuapp.com/"><img className="icon-heroku" src="https://img.icons8.com/color/48/000000/heroku.png" alt="icon"></img></a>
              </div>
              <h5>Track IT - Warranty Tracker</h5>
              <h6>Description:</h6>
              <p>Warranty tracker website to store receipts and related information for ease of warranty claiming. </p>
              {/* <h6>Challenges:</h6>
              <p></p> */}
              <h6>Technology Stack</h6>
              <div className="icons">
                <img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/mongodb.png"></img>
                <img className="icon-express" alt="icon" src={`${process.env.PUBLIC_URL}/images/express-logo.png`}></img>
                <img className="icon-react" alt="icon" src="https://img.icons8.com/plasticine/100/000000/react.png"></img>
                <img className="icon-node" alt="icon" src="https://img.icons8.com/windows/96/000000/nodejs.png"></img>
              </div>
            </div>
          </div>
          <div className="col-sm row">
            <img className="col-sm image" src={`${process.env.PUBLIC_URL}/images/budgetFusion.png`} alt="projectPicture"></img>
            <div className="col-sm text-left">
              <div>
                <a href="https://github.com/dennischen123/budgetFusion"> { githubIcon } </a>
                <a href="https://budgetfusion.herokuapp.com/"><img className="icon-heroku" src="https://img.icons8.com/color/48/000000/heroku.png" alt="icon"></img></a>
              </div>
              <h5>Budget Fusion</h5>
              <h6>Description:</h6>
              <p>Budgeting website to set, keep record of expenses and being able to see a visual overview of your spending.</p>
              {/* <h6>challenges</h6>
              <p></p> */}
              <h6>Technology Stack</h6>
              <div className="icons">
                <img className="icon-python" alt="icon" src="https://img.icons8.com/color/48/000000/python.png"></img>
                <img className="icon-django" alt="icon" src="https://img.icons8.com/ios/100/000000/django.png"></img>
                <img className="icon-bootstrap" alt="icon" src="https://img.icons8.com/color/48/000000/bootstrap.png"></img>
                <img className="icon-chartJS" alt="icon" src="https://cms-assets.tutsplus.com/uploads/users/1251/posts/28384/preview_image/chartjs-tutsplus.jpg"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm row">
            <img className="col-sm image" src={`${process.env.PUBLIC_URL}/images/yelpPal.png`} alt="projectPicture"></img>
            <div className="col-sm text-left">
              <div>
                <a href="https://github.com/dennischen123/YelpPal"> { githubIcon } </a>
                <a href="https://budgetfusion.herokuapp.com/"><img className="icon-heroku" src="https://img.icons8.com/color/48/000000/heroku.png" alt="icon"></img></a>
              </div>
              <h5>YelpPal</h5>
              <h6>Description:</h6>
              <p>YelpPal is a reviewing website for MealPal restaurants. Where you can find the best rated and best portion meals from others without wasted meals.</p>
              {/* <h6>challenges</h6> */}
              {/* <p></p> */}
              <h6>Technology Stack</h6>
              <div className="icons">
                <img className="icon" alt="icon" src="https://img.icons8.com/color/48/000000/mongodb.png"></img>
                <img className="icon-express" alt="icon" src={`${process.env.PUBLIC_URL}/images/express-logo.png`}></img>
                <img className="icon-node ml-3" alt="icon" src="https://img.icons8.com/windows/96/000000/nodejs.png"></img>
              </div>
            </div>
          </div>
          <div className="col-sm row">
            <img className="col-sm image" src={`${process.env.PUBLIC_URL}/images/game.png`} alt="projectPicture"></img>
            <div className="col-sm text-left">
              <div>
                <a href="https://github.com/dennischen123/Pattern-Matching-Game"> { githubIcon } </a>
                <a href="https://dennischen123.github.io/Pattern-Matching-Game/"><img className="icon-heroku" src="https://img.icons8.com/color/48/000000/heroku.png" alt="icon"></img></a>
              </div>
              <h5>Pattern Matching Game</h5>
              <h6>Description:</h6>
              <p>Game to test and improve your Spatial memory with a round based difficulty increase.</p>
              {/* <h6>challenges</h6>
              <p></p> */}
              <h6>Technology Stack</h6>
              <div className="icons mt-0">
                <img className="icon" alt="icon" src="https://img.icons8.com/ios-filled/50/000000/javascript-logo.png"></img>
                <img className="icon-bootstrap" alt="icon" src="https://img.icons8.com/color/48/000000/bootstrap.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
