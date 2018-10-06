import React, { Component } from "react";
import FormInput from "./formInput";
import MyButton from "./MyButton";
const styles = {
  root: {
    display: "flex"
  }
};

class Form extends Component {
  render() {
    return (
      <div style={styles.root}>
        <FormInput />
        <div>
          <MyButton />
        </div>
      </div>
    );
  }
}

export default Form;
