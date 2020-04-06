import React from "react";
import theme from "../../themes/theme";
import { MuiThemeProvider, CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EmailForm from "../emailForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  const styles = {
    container: {
      minWidth: 320,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    card: {
      overflow: "auto"
    },
    top: {
      backgroundColor: "#c17b00"
    },
    content: {
      maxWidth: 400,
      padding: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    head: {
      color: "#1f2430",
      textAlign: "center",
      fontFamily: "Rubik"
    }
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <title>Bacon Bytes | Contact</title>
        <meta
          name="description"
          content="Interested in working together? Send me an email."
        />
      </Helmet>
      <div style={styles.container}>
        <Card styles={styles.card}>
          <CardContent style={styles.top}>
            <h1 style={styles.head}>Contact</h1>
          </CardContent>
          <div style={styles.content}>
            <EmailForm />
          </div>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};

export default Contact;
