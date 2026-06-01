import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayouts";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "*",
    element: <h2>Error404</h2>,
  },
]);

export default router;