import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
import "./Emailitem.css";
const EmailItem = ({
  index,
  starred: initialStarred,
  from,
  subject,
  message,
  received,
  read,
}) => {
  const [starred, setStarred] = useState(initialStarred || false);

  const toggleStar = () => {
    setStarred((prev) => !prev);
    console.log("Starred:", !starred);
  };
  return (
    <div className="emailitemwrap">
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
        onChange={(e) => console.log("Checked:", e.target.checked)}
      />
      <IconButton onClick={toggleStar}>
        {starred ? (
          <StarIcon style={{ color: "#fbc02d" }} /> // yellow star
        ) : (
          <StarBorderIcon />
        )}
      </IconButton>

      <div className="emailbody">
        <p className={!read && "unread"}>{from}</p>

        <p className={!read && "unread"}>{subject}</p>

        <p className={!read && "unread"}>{received}</p>
      </div>
    </div>
  );
};
export default EmailItem;
