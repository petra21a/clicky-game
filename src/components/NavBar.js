import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Click-Me Game: <span className="text-primary font-weight-bold">{props.theme}</span> !</a>
      <h6>
        Score <span className="badge badge-primary">{props.score}</span>
      </h6>
      <h6>
        {" "}
        Top Score{" "}
        <span className="badge badge-secondary">{props.topScore}</span>
      </h6>
    <div className = "row justify-content-center">
    <p>A Memory game with GIFs! Try to click on all the images ONLY once</p>
    </div>
    </nav>
  );
};

export default NavBar;
