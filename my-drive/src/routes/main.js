import React from "react";
import { createBrowserRouter, useParams } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/error",
    element: <h1>404</h1>,
  },
  {
    path: "/login",
    element: <h1>login</h1>,
  },
  {
    path: "/signup",
    element: <h1>signup</h1>,
  },
  {
    path: "/folder/:folderName",
    element: <h1> this is folder </h1>,
  },

]);

export default router;