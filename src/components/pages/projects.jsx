import React from "react";
import theme from "../../themes/theme";
import { MuiThemeProvider, Box, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Projects = () => {
  const styles = {
    paper: {
      minHeight: 50,
      padding: 10
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Paper style={styles.paper}>
        {/* <Box color={theme.palette.primary.contrastText}>
          <h1>Projects</h1>

          <Box
            color={theme.palette.secondary.light}
            padding={(50, 50, 50, 50)}
          ></Box>
        </Box> */}
      </Paper>
    </MuiThemeProvider>
  );
};

export default Projects;
