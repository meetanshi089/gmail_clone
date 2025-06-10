import React from "react";
import "./Sidebar.css";
import Compose from "./buttons/Compose";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { sidebarbuttonitems } from "../data/sidebarbuttonitems";
import { BottomIcons } from "../data/BottomIcons";
function SidebarButtonItem({ icon, text, onClick }) {
  return (
    <div className="sidebar-button-item" onClick={() => onClick(text)}>
      {icon}
      <span>{text}</span>
    </div>
  );
}

function Sidebar({ onComposeClick, onSidebarItemClick }) {
  return (
    <div className="sbdiv1">
      <div className="topsectwrap">
        <div className="sbcompose">
          <Compose onClick={onComposeClick} />
        </div>

        <div className="sbbuttons">
          {sidebarbuttonitems.map((item, index) => (
            <SidebarButtonItem
              key={index}
              icon={item.icon}
              text={item.text}
              onClick={onSidebarItemClick}
            />
          ))}
        </div>
      </div>

      <div className="bottomwrap">
        <div className="sbsection">
          <h4>Meet</h4>
          <p>
            <VideocamIcon />
            New Meeting
          </p>
          <p>
            <KeyboardIcon />
            Join Meeting
          </p>
        </div>
        <div className="sbsection">
          <h4>Hangouts</h4>
          <p>
            <AccountCircleIcon />
            Meetanshi
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
