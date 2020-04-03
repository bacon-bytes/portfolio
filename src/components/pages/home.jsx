import React, { Component } from "react";

class Home extends Component {
  state = {};

  render() {
    const styles = {
      main: {}
    };
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "70px"
        }}
      >
        <h1
          style={{
            color: "White",
            textAlign: "center",
            fontFamily: "Libre Baskerville",
            textShadow: "1px 1px #000000"
          }}
        >
          Hi, I'm Sean
          <br />
          <br />
          Web / Game / Software
          <br />
          <br />
          Developer
        </h1>
      </div>
    );
  }
}

export default Home;
