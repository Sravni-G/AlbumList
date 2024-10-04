import { Link } from "react-router-dom";
import "../styles/componentStyles.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="bttn">
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25694.png"
            alt="Home Icon"
          />
        </button>
      </Link>
      <Link to="/list">
        <button className="bttn">List</button>
      </Link>
      <Link to="/add">
        <button className="bttn">ADD</button>
      </Link>
      <Link to="/delete">
        <button className="bttn">Delete</button>
      </Link>
      <Link to="/update">
        <button className="bttn">Update</button>
      </Link>
    </div>
  );
}

export default Navbar;
