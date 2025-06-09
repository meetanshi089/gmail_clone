import React, { useState } from "react";
import Sidebar from "./Sidebar";
import EmailsView from "./EmailsView";
import SideIcons from "./SideIcons";
import ComposeEmail from "./ComposeEmail";
import "./Main.css";

function Main() {
  const [composeOpen, setComposeOpen] = useState(false);

  const openCompose = () => setComposeOpen(true);
  const closeCompose = () => setComposeOpen(false);

  const handleSendEmail = (email) => {
    console.log("Send email:", email);
    closeCompose(); // close after sending
  };

  return (
    <div className="div1">
      <Sidebar onComposeClick={openCompose} />
      <EmailsView />
      <SideIcons />
      <ComposeEmail
        open={composeOpen}
        handleClose={closeCompose}
        onSend={handleSendEmail}
      />
    </div>
  );
}

export default Main;
