import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
import "./Emailitem.css";
const EmailItem = ({ starred, from, subject, message, received, read }) => {
  const [star, setStar] = useState(starred);
  const changeStar = () => {};
  return (
    <div className="emailitemwrap">
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
        onChange={(e) => console.log("Checked:", e.target.checked)}
      />
      <IconButton onClick={() => (star ? setStar(false) : setStar(true))}>
        {star ? <StarIcon htmlColor="#f7cb69" /> : <StarBorderIcon />}
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
