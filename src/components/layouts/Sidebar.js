import React from "react";
import "./Sidebar.css";
import Compose from "./buttons/Compose";
import { sidebarbuttonitems } from "../data/sidebarbuttonitems";
function Sidebar() {
  return (
    <div className="sbdiv1">
      <div className="sbdiv2">
        <Compose />
      </div>
      <div className="sbdiv3">
        {sidebarbuttonitems.map((item, index) => (
          <SidebarButtonItem
            className="SidebarButtonItem"
            key={index}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
      <div className="sbdiv4"></div>
      <div className="sbdiv5"></div>
      <div className="sbdiv6"></div>
      <div className="sbdiv7"></div>
      <div className="sbdiv8"></div>
    </div>
  );
  function SidebarButtonItem({ icon, text }) {
    return (
      <div className="sidebar-button-item">
        {icon}
        <span style={{ marginLeft: "10px" }}>{text}</span>
      </div>
    );
  }
}
export default Sidebar;
