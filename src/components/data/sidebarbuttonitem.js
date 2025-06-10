import { Link } from "react-router-dom";

const sidebarbuttonitem = ({ icon, text, path }) => {
  return (
    <Link to={path} className="sidebar-button-item-link">
      <div className="sidebar-button-item">
        {icon}
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default sidebarbuttonitem;
