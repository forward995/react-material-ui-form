import React, { Component } from "react";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    padding: "12px 0px",
    marginTop: -15
  },
  btnContainer: {
    position: "relative"
  },
  btn: {
    backgroundImage:
      "linear-gradient(to right, rgba(243, 113, 33, 0.75) 0%, rgba(0, 128, 200, 0.75) 100%)",
    borderRadius: 30,
    color: "rgb(0, 128, 200)",
    height: 46,
    letterSpacing: 0,
    margin: "0px, 20px",
    padding: 2,
    minWidth: 230,
    zIndex: 2,
    fontFamily: `Myriad Pro`,
    fontSize: 26,
    textTransform: `none`,
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  btnSpan: {
    alignItems: "center",
    background: "white",
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    transition: "background .5s ease",
    height: 42,
    width: "100%"
  }
};
class MyButton extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.btnContainer}>
          <Button style={styles.btn}>
            <span style={styles.btnSpan}>Sign Up Now</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default MyButton;
