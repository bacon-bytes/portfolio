import React, { Component } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
import NavBar from "./components/navBar";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Work from "./components/pages/work";
import Home from "./components/pages/home";
import "./App.css";

class App extends Component {
  state = {
    changed: true
  };

  componentDidMount() {
    this.changeBackground();
  }

  componentDidUpdate() {
    this.changeBackground();
  }

  changeBackground = () => {
    let path = window.location.pathname;

    if (path === "/") document.body.style = "background: #ffdc65";
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
    };

    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <div>
            <NavBar triggerChange={this.triggerChange} />
            <div onLoad={this.checkPageChange} style={styles.container}>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/projects" component={Projects} />
                <Route path="/work" component={Work} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
