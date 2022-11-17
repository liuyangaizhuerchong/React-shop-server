import Products from "../containers/Products";
import Category from "../containers/Category";
import Home from "../containers/Home";
import Line from "../containers/Line";
import Pie from "../containers/Pie";
import Role from "../containers/Role";
import User from "../containers/user";
import AddProduct from "../containers/Products/AddProduct";
import Detail from "../containers/Products/Detail";

export const all_routes = [
  {
    path: "home",
    element: <Home />,
  },

  {
    path: "prod_about/category",
    element: <Category />,
  },
  {
    path: "prod_about/product/add_product",
    element: <AddProduct />,
  },

  {
    path: "prod_about/product",
    element: <Products />,
    children: [
      // { path: "add_product", element: <AddProduct /> },
      { path: "update_product", element: <AddProduct /> },
      { path: "detail", element: <Detail /> },
    ],
  },

  {
    path: "user",
    element: <User />,
  },
  {
    path: "role",
    element: <Role />,
  },

  {
    path: "charts/line",
    element: <Line />,
  },
  {
    path: "charts/pie",
    element: <Pie />,
  },
];
