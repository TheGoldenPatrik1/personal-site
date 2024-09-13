import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ReactGA from 'react-ga4';

import './Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Pages/About';
import Achievements from './Pages/Achievements';
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
  },
  {
    path: "/achievements",
    element: <Achievements />
  }
]);

ReactGA.initialize('G-NSC69VV4RR', {
    gaOptions: {
        anonymizeIp: true
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
