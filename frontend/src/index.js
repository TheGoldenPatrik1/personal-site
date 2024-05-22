import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Pages/About';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
