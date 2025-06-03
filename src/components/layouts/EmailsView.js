import React from "react";
import "./EmailsView.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import { Emaildata } from "../../temp/Emaildata";
import EmailItem from "../Emailitem/EmailItem";
import { ReadMoreSharp } from "@mui/icons-material";
function EmailsView() {
  return (
    <div className="emailview">
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
        {Emaildata.map(
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
        )}
      </div>
    </div>
  );
}
export default EmailsView;
