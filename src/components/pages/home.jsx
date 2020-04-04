import React, { Component } from "react";

const textArray = ["Web", "Game", "Software", "Frontend"];

class Home extends Component {
  state = { textIndex: 0 };

  componentDidMount() {
    this.timeout = setInterval(() => {
      let curIndex = this.state.textIndex;
      this.setState({ textIndex: curIndex + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let changingAdjective = textArray[this.state.textIndex % textArray.length];

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
            //fontFamily: "Proza Libre",
            fontWeight: "bold",
            textShadow: "1px 1px #000000"
          }}
        >
          Hi, I'm Sean
          <br />
          <br />
          {changingAdjective}
          <br />
          <br />
          Developer
        </h1>
      </div>
    );
  }
}

export default Home;
