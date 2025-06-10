import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

function Header({ onMenuClick }) {
  return (
    <div className="Header">
      <div className="header-left">
        <MenuIcon
          style={{ color: "#5f6368", cursor: "pointer" }}
          onClick={onMenuClick}
        />
        <img
          src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21939811/newgmaillogo.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200"
          alt="Gmail Logo"
          className="header-logo"
        />
      </div>
      <div className="header-search">
        <SearchIcon style={{ color: "#5f6368" }} />
        <input type="text" placeholder="Search Mail"></input>
        <ExpandMoreIcon style={{ color: "#5f6368" }} />
      </div>
      <div className="header-right">
        <HelpOutlineIcon style={{ color: "#5f6368" }} />
        <SettingsIcon style={{ color: "#5f6368" }} />
        <AppsIcon style={{ color: "#5f6368" }} />
        <AccountCircleIcon style={{ color: "#5f6368" }} />
      </div>
    </div>
  );
}
export default Header;
