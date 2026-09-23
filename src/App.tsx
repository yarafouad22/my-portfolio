import "./App.css";
import NotFound from "./assets/Pages/NotFound";
import Home from "./assets/Pages/Home";
import Projects from "./assets/Pages/Projects";
import Contact from "./assets/Pages/Contact";
import Navbar from "./Component/Navbar/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./Component/Footer/Footer";

function Root() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
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
     
      {
           path: "*",
           element: <NotFound />,
         },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;