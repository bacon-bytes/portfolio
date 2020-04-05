import React from "react";
import theme from "../../themes/theme";
import { MuiThemeProvider } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const NotFound = () => {
  const styles = {
    paper: {
      minHeight: 50,
      padding: 10
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Paper style={styles.paper}>
        <h1>Page Not Found</h1>
      </Paper>
    </MuiThemeProvider>
  );
};

export default NotFound;
