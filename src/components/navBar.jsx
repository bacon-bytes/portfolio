import React from "react";
import { AppBar, Link, Tab, Tabs } from "@material-ui/core";

const NavBar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Work" />
        <Tab label="Projects" />
        <Tab label="About" />
        <Tab label="Contact" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
