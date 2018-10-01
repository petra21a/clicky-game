import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Clicky Game</a>
      <h6>Score <span className="badge badge-secondary">{props.score}</span></h6>
      <h6> Top Score <span className="badge badge-secondary">{props.topScore}</span></h6>
      
    </nav>
  );
};

export default NavBar;
