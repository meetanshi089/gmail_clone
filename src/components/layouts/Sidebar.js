import React from "react";
import "./Sidebar.css";
import Compose from "./buttons/Compose";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { BottomIcons } from "../data/BottomIcons";
function SidebarButtonItem({ icon, text, onClick }) {
  return (
    <div className="sidebar-button-item" onClick={() => onClick(text)}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Sidebar({ onComposeClick, onSidebarItemClick, collapsed }) {
  return (
    <div className={`sbdiv1 ${collapsed ? "collapsed" : ""}`}>
      <div className="topsectwrap">
        <div className="sbcompose">
          <Compose onClick={onComposeClick} />
        </div>

        <div className="sbbuttons">
          {sidebarbuttonitems.map((item, index) => (
            <div
              className="sidebar-button-item"
              key={index}
              onClick={() => onSidebarItemClick(item.text)}
            >
              {item.icon}
              {!collapsed && <span>{item.text}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="bottomwrap">
        <div className="sbsection">
          <h4>Meet</h4>
          <p>
            <VideocamIcon />
            {!collapsed && " New Meeting"}
          </p>
          <p>
            <KeyboardIcon />
            {!collapsed && " Join Meeting"}
          </p>
        </div>
        <div className="sbsection">
          <h4>Hangouts</h4>
          <p>
            <AccountCircleIcon />
            {!collapsed && " Meetanshi"}
          </p>
        </div>
        <div className="sbicons">
          {BottomIcons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
