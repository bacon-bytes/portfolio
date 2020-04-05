import React from "react";
import theme from "../../../themes/theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";
import CodeCard from "./codeCard";

const Code = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };

  const colors = {
    green: "#bae67e",
    blue: "#5ccfe6",
    purple: "#d4bfff",
    pink: "#f28779",
    yellow: "#ffd580"
  };

  const namespaceDescription = "Everything from enemy ai to frame counts.";

  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <title>Bacon Bytes | Code</title>
        <meta
          name="description"
          content="A sampling of previous code development work and projects."
        />
      </Helmet>
      <div style={styles.container}>
        <CodeCard
          title="Namespace Studio"
          subtitle="Co-founder and Lead Programmer"
          description={namespaceDescription}
          color={colors.green}
          image="./namespacelogo.png"
          link="https://namespacestudio.com/"
          linktitle="namespacestudio.com"
        />
      </div>
    </MuiThemeProvider>
  );
};

export default Code;
