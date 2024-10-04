import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/componentStyles.css";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import Notification from "./Notification";

function Add() {
  const [title, setTitle] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    const request = new Request("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({ userId, title }),
    });
    fetch(request)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);

        toast("Added the given Album Successfully");
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
      <h1>Add Album</h1>
      <form className="add-form">
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
          Add
        </button>
      </form>
    </>
  );
}

export default Add;
