import React from "react";
import "./styles.css";

function OpenButton(props) {
  return (
    <button className="navigation-button" onClick={props.onClick}>
      <div className="navigation-button--open-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </button>
  );
}

function CloseButton(props) {
  return (
    <button
      className="navigation-button navigation-button--close"
      onClick={props.onClick}
    >
      <div className="navigation-button--close-icon"></div>
    </button>
  );
}

function NavigationButton(props) {
  if (props.isMenuActive) {
    return <CloseButton onClick={props.onClick} />;
  }
  return <OpenButton onClick={props.onClick} />;
}

export default NavigationButton;
