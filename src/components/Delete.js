import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/componentStyles.css";
import Navbar from "./Navbar";
import Notification from "./Notification";
import { toast } from "react-toastify";
export default function Delete() {
  const [id, setId] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    const req = new Request(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      {
        method: "Delete",
      }
    );

    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Deleted the given Album Successfully");
        setTimeout(() => {
          navigate("/list");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Notification />
      <h1>Delete Album</h1>
      <form className="add-form">
        <label>Id:</label>
        <input
          type="text"
          placeholder="Enter Id"
          name="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>

        <button onClick={handleSubmit} className="bttn">
          Delete
        </button>
      </form>
    </>
  );
}
