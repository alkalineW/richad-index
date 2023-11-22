import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import About from "./About.js";
import Error from "./Error.js";
import Works from "./Works.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Single from "./Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  { path: "about", element: <About /> },
  {
    path: "works",
    element: <Works />,
  },
  { path: "works/:category/:projectName", element: <Single /> },
  { path: "single", element: <Single /> },
  { path: "*", element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
