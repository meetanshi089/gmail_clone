import React, { useState } from "react";
import Sidebar from "./Sidebar";
import EmailsView from "./EmailsView";
import SideIcons from "./SideIcons";
import ComposeEmail from "./ComposeEmail";
import Starredview from "./Starredview";
import SnoozedView from "./SnoozedView";
import SentView from "./SentView";
import InboxView from "./InboxView";
import DraftsView from "./DraftsView";
import "./Main.css";

function Main() {
  const [composeOpen, setComposeOpen] = useState(false);
  const [currentView, setCurrentView] = useState("Inbox");

  const openCompose = () => setComposeOpen(true);
  const closeCompose = () => setComposeOpen(false);

  const handleSendEmail = (email) => {
    console.log("Send email:", email);
    closeCompose();
  };

  const handleSidebarItemClick = (text) => {
    if (["Inbox", "Sent", "Starred", "Drafts", "Snoozed"].includes(text)) {
      setCurrentView(text);
    } else {
      alert(`No view defined for "${text}" yet.`);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "Inbox":
        return <InboxView />;
      case "Snoozed":
        return <SnoozedView />;
      case "Sent":
        return <SentView />;
      case "Starred":
        return <Starredview />;
      case "Drafts":
        return <DraftsView />;
      default:
        return <EmailsView />;
    }
  };

  return (
    <div className="div1">
      <Sidebar
        onComposeClick={openCompose}
        onSidebarItemClick={handleSidebarItemClick}
      />
      {renderCurrentView()}
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
