import React, { Component } from "react";
import "./Button.scss";
export default class Button extends Component {
  handleChange = () => {
    console.log("button pressed");
  };

  handleColor1 = (val) => {
    return (
      isNaN(val) &&
      (val === "/" || val === "X" || val === "=" || val === "-" || val === "+")
    );
  };
  handleColor2 = (val) => {
    return isNaN(val) && (val === "C" || val === "+/-" || val === "%");
  };
  render() {
    const newButtonStyle = this.handleColor1(this.props.text)
      ? "type1ButtonContainer"
      : this.handleColor2(this.props.text)
      ? "type2ButtonContainer"
      : null;
    console.log(newButtonStyle);
    return (
      <button
        className={`button-box ${newButtonStyle}`}
        onClick={this.handleChange}
        style={this.props.style}
      >
        {this.props.text}
      </button>
    );
  }
}
