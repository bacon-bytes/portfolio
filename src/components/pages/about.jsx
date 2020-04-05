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
      padding: 20
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
            <h1>About Me</h1>
          </CardContent>
          <div style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet mi ullamcorper, dignissim est non, convallis leo. Mauris vel
            nisi vel erat dapibus auctor. Donec malesuada, lorem id rutrum
            finibus, urna ipsum suscipit eros, id pharetra lacus velit et mi.
            Integer ut quam dapibus, ullamcorper nibh eget, accumsan libero.
            Donec porttitor pellentesque eros non elementum. Vestibulum sed odio
            cursus, sollicitudin ipsum eget, dignissim arcu. Maecenas viverra
            consequat aliquam. Cras vulputate a sem at volutpat. Aenean eget
            ipsum velit. Nulla id sagittis libero, non aliquam nunc.
          </div>
        </Card>
      </div>
    </MuiThemeProvider>
  );
};

export default About;
