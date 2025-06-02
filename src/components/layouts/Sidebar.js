import React from "react";
import "./Sidebar.css";
import Compose from "./buttons/Compose";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { sidebarbuttonitems } from "../data/sidebarbuttonitems";
import { BottomIcons } from "../data/BottomIcons";
function SidebarButtonItem({ icon, text }) {
  return (
    <div className="sidebar-button-item">
      {icon}
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </div>
  );
}
function Sidebar() {
  return (
    <div className="sbdiv1">
      <div>
        <div className="sbdiv2">
          <Compose />
        </div>

        <div className="sbdiv3">
          {sidebarbuttonitems.map((item, index) => (
            <SidebarButtonItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>

      <div className="bottomwrap">
        <div className="sbdiv4">
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
        <div className="sbdiv4">
          <h4>Hangouts</h4>
          <p>
            <AccountCircleIcon />
            Meetanshi
          </p>
        </div>
        <div className="sbdiv6">
          {BottomIcons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
        <div className="sbdiv7"></div>
        <div className="sbdiv8"></div>
      </div>
    </div>
  );
}
export default Sidebar;
