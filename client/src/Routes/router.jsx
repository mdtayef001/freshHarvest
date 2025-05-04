import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homelayout from "../Layouts/Homelayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
