import React from "react";
import Sidebar from "./Sidebar";
import EmailsView from "./EmailsView";
import SideIcons from "./SideIcons";
import "./Main.css";

function Main() {
  return (
    <div className="div1">
      <Sidebar />
      <EmailsView />
      <SideIcons />
    </div>
  );
}
export default Main;
