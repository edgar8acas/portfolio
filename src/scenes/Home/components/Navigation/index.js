import React from "react";
import NavigationButton from "../NavigationButton";
import "./styles.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  }

  render() {
    return (
      <div className="navigation">
        <NavigationButton
          onClick={this.toggle}
          isMenuActive={this.state.toggle}
        ></NavigationButton>
        <nav
          className={`navigation--menu ${
            this.state.toggle ? "navigation--menu__active" : ""
          }`}
        >
          <div className="navigation-wrapper">
            <ul>
              <li>
                <a href="#portfolio" onClick={this.toggle}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about-me" onClick={this.toggle}>
                  About me
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.toggle}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" onClick={this.toggle}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
