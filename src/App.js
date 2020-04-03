import React, { Component } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { MuiThemeProvider, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import theme from "./themes/theme";
import NavBar from "./components/navBar";
import "./App.css";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Projects from "./components/pages/projects";
import Work from "./components/pages/work";
import Home from "./components/pages/home";

class App extends Component {
  render() {
    const styles = {
      container: {
        margin: "70px 20px 20px 15px"
      },
      homeBackground: {
        backgroundColor: "#000000"
      }
    };
    console.log(this.props);
    document.body.style = "background: black";
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <div syle={styles.homeBackground}>
            <NavBar />
            <div style={styles.container}>
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
