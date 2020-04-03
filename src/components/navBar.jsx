import React from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { Link } from "react-router-dom";

const NavBar = ({ triggerChange }) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar>
      <Tabs value={value} onChange={handleChange} centered>
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
