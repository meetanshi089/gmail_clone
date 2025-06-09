import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Compose.css";

const Compose = ({ onClick }) => {
  return (
    <div className="composediv" onClick={onClick} style={{ cursor: "pointer" }}>
      <AddIcon fontSize="large" />
      <span style={{ marginLeft: "8px" }}>Compose</span>
    </div>
  );
};

export default Compose;
