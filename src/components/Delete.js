import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

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
        navigate("/list");
        alert("Deleted successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
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
