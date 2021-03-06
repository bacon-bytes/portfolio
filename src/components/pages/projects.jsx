import React from "react";
import theme from "../../themes/theme";
import { MuiThemeProvider } from "@material-ui/core";
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
      <Paper style={styles.paper}></Paper>
    </MuiThemeProvider>
  );
};

export default Projects;
