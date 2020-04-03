import React, { Component } from "react";
import { moveSyntheticComments } from "typescript";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../../themes/theme";
import { useTheme } from "@material-ui/core/styles";

const Projects = () => {
  const theme = useTheme();
  return (
    <MuiThemeProvider theme={theme}>
      <h1 color={theme.palette.secondary}>Projects</h1>
      <div color={theme.palette.primary.main}>
        l;ksndflksdk ks a as asd asd as ssdadasdas
      </div>
    </MuiThemeProvider>
  );
};

export default Projects;
