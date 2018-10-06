import React, { Component } from "react";
import "./formInput.css";

class FormInput extends Component {
  render() {
    return (
      <div className="divs">
        <input type="text" placeholder="Your email address " />
      </div>
    );
  }
}

export default FormInput;
