import React from "react";
import theme from "../../../themes/theme";
import { MuiThemeProvider } from "@material-ui/core";
import { Helmet } from "react-helmet";
import CodeCard from "./codeCard";
import CodeImage from "./codeImage";

const Code = () => {
  const styles = {
    row: {
      padding: 10
    }
  };
  const rowCard = "col-xs-15 col-sm-6";
  const rowImage = "col-xs-15 col-sm-6 col-md-6";

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
      <div className="row center-xs center-sm center-md center-lg">
        <div className={rowCard} style={styles.row}>
          <div className="box">
            <CodeCard
              title="Namespace Studio"
              subtitle="Lead Programmer"
              color={colors.green}
              image="./namespacelogo.png"
              link="https://namespacestudio.com/"
              linktitle="namespacestudio.com"
            />
          </div>
        </div>
        <div className={rowImage} style={styles.row}>
          <CodeImage color={colors.green} link="./pathing.gif" />
        </div>
        <div className={rowImage} style={styles.row}>
          <CodeImage color={colors.green} link="./wallRun.gif" />
        </div>
        <div className={rowImage} style={styles.row}>
          <CodeImage color={colors.green} link="./targeting.gif" />
        </div>
        <div className={rowImage} style={styles.row}>
          <CodeImage color={colors.green} link="./Regen.gif" />
        </div>
        <div className={rowImage} style={styles.row}>
          <CodeImage color={colors.green} link="./BoxRolls.gif" />
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Code;
