import React, { Component } from "react";
import Form from "./form";

const styles = {
  root: {
    borderRadius: 5,
    // backgroundColor: 'rgb(255,255,255, .2)',
    padding: "20px 20px 20px 20px",
    background: "white",
    width: 560,
    boxShadow: "none !important",
    backgroundSize: "100% 100%", // backgroundSize: 'contain'
    height: 150
  },
  container: {
    padding: "10px 8px",
    color: "rgb(0, 128, 200)",
    fontSize: 25
  },
  form: {
    marginTop: 20
  }
};

class NewSletter extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <div>Enter your Email and We'll keep you posted!</div>
          <div style={styles.form}>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default NewSletter;
