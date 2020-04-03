import { createMuiTheme } from "@material-ui/core/styles";

// Colors - https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=344955&secondary.color=f9aa33

// Fonts - https://material.io/design/typography/the-type-system.html#type-scale

// https://material-ui.com/customization/default-theme/

const palette = {
  primary: { main: "#344955" },
  secondary: { main: "#f9aa33" }
};
const themeName = "Oxford Blue Sea Buckthorn Ring-tailed Mongoose";

export default createMuiTheme({ palette, themeName });
