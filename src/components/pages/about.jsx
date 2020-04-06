import React from "react";
import theme from "../../themes/theme";
import { MuiThemeProvider, CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Helmet } from "react-helmet";

const About = () => {
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
      textIndent: 40
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
        <title>Bacon Bytes | About</title>
        <meta
          name="description"
          content="Hi, I'm Sean Bacon, web, video game, software developer. Personal developer portfolio. "
        />
      </Helmet>
      <div style={styles.container}>
        <Card styles={styles.card}>
          <CardContent style={styles.top}>
            <h1 style={styles.head}>About Me</h1>
          </CardContent>
          <div style={styles.content}>
            Hi, I’m Sean. I got into coding back in the early 2010’s after I
            discovered that the ability to make video games wasn’t witchcraft
            but in fact a series of logical steps. Ever since I have been on a
            journey of continuous knowledge consumption. When I am not coding
            behind a computer I can be found somewhere outside climbing or
            enjoying the nature of Colorado.
          </div>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};

export default About;
