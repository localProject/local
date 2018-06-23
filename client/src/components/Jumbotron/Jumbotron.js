import React from "react";
// import styled from "styled-components";
import "./Jumbotron.css";

export const Jumbotron = props => {
  return (
    <div className="jumbotron">
      <h1>local.</h1>
      <h2>Bringing local goods to global consumers.</h2>
      <button className="about-local-button">
        <p>About</p>
      </button>
    </div>
  );
};

export default Jumbotron;
