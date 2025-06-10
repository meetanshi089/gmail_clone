import React from "react";
import EmailItem from "../Emailitem/EmailItem";
import emails from "../../temp/emails.json";
import "./EmailsView.css";
function Starredview() {
  const starredEmails = emails.filter((email) => email.starred);
  return (
    <div className="emailview">
      <div className="emailcontainer">
        {starredEmails.length === 0 ? (
          <p style={{ padding: "1rem" }}>No starred emails.</p>
        ) : (
          starredEmails.map((email, index) => (
            <EmailItem
              key={email.id || index}
              index={index}
              starred={email.starred}
              from={email.from}
              subject={email.subject}
              message={email.message}
              received={email.received}
              read={email.read}
              //onToggleStar={toggleStar}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default Starredview;
