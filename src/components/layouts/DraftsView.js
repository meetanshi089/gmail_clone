import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import emails from "../../temp/emails.json";
import EmailItem from "../Emailitem/EmailItem";

function DraftsView() {
  const draftEmails = emails.filter((emails) => emails.draft);

  return (
    <div className="drafts">
      <div className="topicons">
        <Checkbox
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          onChange={(e) => console.log("Checked:", e.target.checked)}
        />
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="emailcontainer">
        {draftEmails.length > 0 ? (
          draftEmails.map(
            ({ starred, from, subject, message, received, read }, index) => (
              <EmailItem
                key={index}
                starred={starred}
                from={from}
                subject={subject}
                message={message}
                received={received}
                read={read}
              />
            )
          )
        ) : (
          <p style={{ padding: "1rem" }}>No drafts available.</p>
        )}
      </div>
    </div>
  );
}

export default DraftsView;
