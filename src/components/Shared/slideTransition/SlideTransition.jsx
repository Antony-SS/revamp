// SlideTransition.js
import React from "react";
import { CSSTransition } from "react-transition-group";
import "./SlideTransition.css"; // Import the CSS file for the slide transition

const SlideTransition = ({ children, show, color }) => (
  <CSSTransition
    in={show}
    appear={true}
    timeout={500} // Adjust the timeout as needed
    classNames="slide"
  >
    <div className="slide-container" style={{ backgroundColor: color }}>
      {children}
    </div>
  </CSSTransition>
);

export default SlideTransition;
