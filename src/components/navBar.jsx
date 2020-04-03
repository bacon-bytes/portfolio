import React from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";

const NavBar = ({ triggerChange, tabValue }) => {
  let valueTime = 0;

  const setValue = () => {
    if (changeTabValue()) valueTime = changeTabValue();
  };

  const changeTabValue = () => {
    let path = window.location.pathname;
    let tabValue = switchPathToTab(path);
    return tabValue;
  };

  const switchPathToTab = path => {
    switch (path) {
      case "/":
        return 0;
        break;
      case "/work":
        return 1;
        break;
      case "/projects":
        return 2;
        break;
      case "/about":
        return 3;
        break;
      case "/contact":
        return 4;
        break;
      default:
        break;
    }
  };

  return (
    <AppBar>
      {setValue()}
      <Tabs value={valueTime} centered>
        <Tab
          icon={<HomeRoundedIcon />}
          aria-label="home"
          to="/"
          component={Link}
          onClick={triggerChange}
        />
        <Tab label="Work" to="/work" component={Link} onClick={triggerChange} />
        <Tab
          label="Projects"
          to="/projects"
          component={Link}
          onClick={triggerChange}
        />
        <Tab
          label="About"
          to="/about"
          component={Link}
          onClick={triggerChange}
        />
        <Tab
          label="Contact"
          to="/contact"
          component={Link}
          onClick={triggerChange}
        />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
