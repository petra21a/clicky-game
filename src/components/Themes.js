import React from "react";

const Themes = props => {
  return (
    <div className="row d-flex justify-content-center bg-secondary my-2">
      <form className="form-inline">
        <button
          className="btn bg-success btn-outline-white text-white font-weight-bold m-2 my-sm-0"
          onClick={props.handleFormSubmit}
        >
          New Game
        </button>
        <input
          className="form-control mr-sm-2"
          type="search"
          name="theme"
          value={props.blank}
          placeholder="Pick Theme"
          aria-label="Search"
          onChange={props.handleSearchChange}
        />

        <p className="text-white font-weight-bold">
          # Tiles:{" "}
          <span className="badge badge-success mx-2">{props.limit}</span>
        </p>

        <input
          type="range"
          name="limit"
          className="custom-range"
          max="25"
          min="5"
          step="5"
          id="tile-total"
        
          onChange={props.handleLimitChange}
        />
      </form>
    </div>
  );
};

export default Themes;
