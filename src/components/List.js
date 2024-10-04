import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function List() {
  const [albums, setAlbums] = useState([]);
  let num = Math.ceil(Math.random()) + 3;
  const url = useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div>
      <Navbar />
      <ul className="list">
        {albums.map((album, index) => (
          <li key={index} className="item">
            <img
              src={`https://picsum.photos/200/200?random=${album.id}`}
              style={{ height: "200px", width: "200px" }}
            />
            <p>{album.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
