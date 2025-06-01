import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Compose.css";
const Compose = () => {
  return (
    <div className="composediv">
      <AddIcon fontSize="large" />
      <span style={{ marginLeft: "8px" }}>Compose</span>
    </div>
  );
};
export default Compose;
