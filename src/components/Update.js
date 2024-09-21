import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Update() {
  const [title, setTitle] = useState();
  const [userId, setUserId] = useState();
  const [id, setId] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    const req = new Request(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ id, userId, title }),
      }
    );

    fetch(req)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/list");
        alert("Updated successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <h1>Update Album</h1>
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
        <label>UserId:</label>
        <input
          type="text"
          placeholder="Enter UserId"
          name="userId"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        ></input>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter Album Name"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button onClick={handleSubmit} className="bttn">
          Update
        </button>
      </form>
    </>
  );
}
