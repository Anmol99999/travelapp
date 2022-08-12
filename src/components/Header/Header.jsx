import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}></Toolbar>
    </AppBar>
  );
};

export default Header;
