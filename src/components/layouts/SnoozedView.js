import React from "react";
import emails from "../../temp/emails.json";
import EmailItem from "../Emailitem/EmailItem";
import "./EmailsView.css";

function SnoozedView() {
  const snoozedEmails = emails.filter((email) => email.snoozed);

  return (
    <div className="emailview">
      <div className="emailcontainer">
        {snoozedEmails.length === 0 ? (
          <p style={{ padding: "1rem" }}>No snoozed emails.</p>
        ) : (
          snoozedEmails.map((email, index) => (
            <EmailItem
              key={email.id || index}
              index={index}
              starred={email.starred}
              from={email.from}
              subject={email.subject}
              message={email.message}
              received={email.received}
              read={email.read}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SnoozedView;
