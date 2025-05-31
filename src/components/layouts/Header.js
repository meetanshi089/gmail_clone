import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

function Header() {
  return (
    <div className="div1">
      <div className="div2">
        <MenuIcon style={{ color: "#5f6368" }} />
        <img
          src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21939811/newgmaillogo.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200"
          className="resized-img"
        />
        <div className="div3">
          <SearchIcon style={{ color: "#5f6368" }} />
          <input type="text" placeholder="Search Mail"></input>
          <ExpandMoreIcon style={{ color: "#5f6368" }} />
        </div>
        <div className="div4">
          <HelpOutlineIcon style={{ color: "#5f6368" }} />
          <SettingsIcon style={{ color: "#5f6368" }} />
          <AppsIcon style={{ color: "#5f6368" }} />
          <AccountCircleIcon style={{ color: "#5f6368" }} />
        </div>
      </div>
    </div>
  );
}
export default Header;
