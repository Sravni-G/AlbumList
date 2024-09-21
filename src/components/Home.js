import "../styles/Navbar.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <h1>Welcome to Album List</h1>
      </div>
    </>
  );
}

export default Home;
