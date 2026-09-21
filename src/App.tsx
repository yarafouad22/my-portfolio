import "./App.css";

import Home from "./assets/Pages/Home";
import Projects from "./assets/Pages/Projects";
import Contact from "./assets/Pages/Contact";

import Navbar from "./Component/Navbar/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}


export default App;
