import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About/About";

import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Error from "../pages/error/Error";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
]);
