import React, { Component } from "react";
import { moveSyntheticComments } from "typescript";
import { MuiThemeProvider, Box, Container } from "@material-ui/core";
import theme from "../../themes/theme";

const Projects = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Box color={theme.palette.primary.contrastText}>
        <h1>Projects</h1>
        <Container>
          <Box
            color={theme.palette.secondary.light}
            padding={(50, 50, 50, 50)}
          ></Box>
        </Container>
        <Container>wooo</Container>
        <Container>wooo</Container>
      </Box>
      <div>l;ksndflksdk ks a as asd asd as ssdadasdas</div>
    </MuiThemeProvider>
  );
};

export default Projects;
