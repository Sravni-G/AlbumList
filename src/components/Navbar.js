import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
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
