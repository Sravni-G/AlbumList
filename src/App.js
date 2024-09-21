import List from "./components/List.js";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Add from "./components/Add.js";
import Delete from "./components/Delete.js";
import Home from "./components/Home.js";
import Update from "./components/Update.js";

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/add" element={<Add />}></Route>
      <Route path="/delete" element={<Delete />}></Route>
      <Route path="/update" element={<Update />}></Route>
    </>
  );

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
