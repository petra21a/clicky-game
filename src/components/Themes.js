import React from "react";

const Themes = props => {
  return (
    <div className="row d-flex justify-content-center my-2">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          name="theme"
          placeholder="Pick Theme"
          aria-label="Search"
          onChange={props.handleInputChange}
        />
        <p># Tiles:</p><span className="badge badge-secondary">5</span>
        <input
          type="range"
          name="limit"
          className="custom-range"
          min="5"
          max="25"
          step="5"
          id="tile-total"
          onChange={props.handleInputChange}
        />
        <span className="badge badge-secondary">25</span>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={props.handleFormSubmit}
        >
          New Game
        </button>
      </form>
    </div>
  );
};

export default Themes;
