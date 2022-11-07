import Product from "../containers/Product";
import Category from "../containers/Category";
import Home from "../containers/Home";
import Line from "../containers/Line";
import Pie from "../containers/Pie";
import Role from "../containers/Role";
import User from "../containers/user";
/* import Products from "../containers/Products";
import Charts from "../containers/Charts"; */

export const all_routes = [
  {
    path: "home",
    element: <Home />,
  },
  /* {
    path: "/prod_about",
    element: <Products />,
    Children: [
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  }, */
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "role",
    element: <Role />,
  },
  /* {
    path: "charts",
    element: <Charts />,
    children: [
      {
        path: "line",
        element: <Line />,
      },
      {
        path: "pie",
        element: <Pie />,
      },
    ],
  }, */
  {
    path: "line",
    element: <Line />,
  },
  {
    path: "pie",
    element: <Pie />,
  },
];
