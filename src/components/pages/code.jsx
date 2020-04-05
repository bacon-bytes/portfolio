import React from "react";
import theme from "../../themes/theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";
import Paper from "@material-ui/core/Paper";

const Code = () => {
  const styles = {
    paper: {
      minHeight: 50,
      padding: 10
    }
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <title>Bacon Bytes | Code</title>
        <meta
          name="description"
          content="A sampling of previous code development work and projects."
        />
      </Helmet>
      <Paper style={styles.paper}></Paper>
    </MuiThemeProvider>
  );
};

export default Code;
