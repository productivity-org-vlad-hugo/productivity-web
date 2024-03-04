import "./TitleBar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const TitleBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="TitleBar">
      <h1>
        <Link to="/" className="TitleBar__link">
        ACHIEVE IT
        </Link>
        </h1>
        <span className="icon-bubbles2"></span>
      {user && (
        <div className="TitleBar-item">
          <Link to="/profile/me" className="TitleBar__link">
            Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default TitleBar;
