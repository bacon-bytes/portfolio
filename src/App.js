import React from "react";
import { MuiThemeProvider, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import theme from "./themes/theme";
import "./App.css";
import NavBar from "./components/navBar";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Container></Container>
    </MuiThemeProvider>
  );
}

export default App;
