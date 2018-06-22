import React from "react";
import "./Jumbotron.css"

export const Jumbotron = props => {
  return (
    <div className='jumbotron'>
      <h1>local.</h1>
        <p id='logoP'>
        Bringing local goods to global consumers.
        </p>
        <button id="about">About</button>  

    </div>
  );
}

export default Jumbotron;



