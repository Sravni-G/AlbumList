import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function List() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
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
      <ul>
        {albums.map((album, index) => (
          <li key={index}>
            {album.userId} &nbsp;&nbsp;{album.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
