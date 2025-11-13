import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import Blog from "../pages/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
