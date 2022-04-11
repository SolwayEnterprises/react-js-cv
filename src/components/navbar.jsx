import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Slide from "@mui/material/Slide";

export default function NavBar() {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  const menuStyle = {
    paddingLeft: "3%",
    textDecoration: "none"
  };

  return (
    <Toolbar style={{ color: "#C6A514", position: "fixed", top: "0", zIndex: "1"}}>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} >
        <MenuIcon />
      </IconButton>
      <Slide direction="right" in={isClicked} mountOnEnter unmountOnExit>
        <a className="navbar-options" style={menuStyle} href="#about">
            About
        </a>
      </Slide>
      <Slide direction="right" in={isClicked} mountOnEnter unmountOnExit>
        <a className="navbar-options" style={menuStyle} href="#Experience">
            Experience
        </a>
      </Slide>
      <Slide direction="right" in={isClicked} mountOnEnter unmountOnExit>
        <a className="navbar-options" style={menuStyle} href="#contact">
            Contact
        </a>
      </Slide>
    </Toolbar>
  );
}
