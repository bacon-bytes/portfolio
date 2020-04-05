import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
import NavBar from "./components/navBar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Code from "./components/pages/code/code";
import NotFound from "./components/pages/notFound";
import "./App.css";

class App extends Component {
  state = {
    changed: true,
    tabValue: 0
  };

  componentDidMount() {
    this.changeBackground();
  }

  componentDidUpdate() {
    this.changeBackground();
  }

  changeBackground = () => {
    const background = "/bg.png";
    let path = window.location.pathname;

    if (path === "/")
      document.body.style.backgroundImage = "url(" + background + ")";
    else document.body.style = "background: #5f7481";
  };

  triggerChange = () => {
    this.setState({ changed: !this.state.changed });
  };

  render() {
    const styles = {
      container: {
        margin: "70px 20px 20px 15px"
      }
      // main: { backgroundImage: "url(" + { Background } + ")" }
    };
    const { tabValue } = this.state;
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar triggerChange={this.triggerChange} tabValue={tabValue} />
            <div onLoad={this.checkPageChange} style={styles.container}>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/code" component={Code} />
                <Route path="/contact" component={Contact} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/" exact component={Home} />
                <Redirect to="/not-found" />
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
