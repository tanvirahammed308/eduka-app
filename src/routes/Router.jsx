import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

    //   errorElement: <ErrorPage />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],

    },
  ]);
  