import Product from "../containers/Product";
import Category from "../containers/Category";
import Home from "../containers/Home";
import Line from "../containers/Line";
import Pie from "../containers/Pie";
import Role from "../containers/Role";
import User from "../containers/user";

export const all_routes = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "/prod_about",
    // element: <Products />,
    Children: [
      {
        path: "prod_about/category",
        element: <Category />,
      },
      {
        path: "prod_about/product",
        element: <Product />,
      },
    ],
  },
  /* {
    path: "prod_about/category",
    element: <Category />,
  },
  {
    path: "prod_about/product",
    element: <Product />,
  }, */
  {
    path: "user",
    element: <User />,
  },
  {
    path: "role",
    element: <Role />,
  },
  {
    path: "charts",
    // element: <Charts />,
    children: [
      {
        path: "charts/line",
        element: <Line />,
      },
      {
        path: "charts/pie",
        element: <Pie />,
      },
    ],
  },
  /* {
    path: "charts/line",
    element: <Line />,
  },
  {
    path: "charts/pie",
    element: <Pie />,
  }, */
];
