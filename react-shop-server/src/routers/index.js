import Products from "../containers/Products";
import Category from "../containers/Category";
import Home from "../containers/Home";
import Line from "../containers/Line";
import Pie from "../containers/Pie";
import Role from "../containers/Role";
import User from "../containers/user";
import Detail from "../containers/Products/Detail";
import AddProduct from "../containers/Products/AddProduct";

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
    path: "prod_about/products",
    element: <Products />,
  },
  {
    path: "prod_about/products/add_product",
    element: <AddProduct />,
  },
  {
    path: "prod_about/products/detail/:id",
    element: <Detail />,
  },
  {
    path: "prod_about/products/update_product/:id",
    element: <AddProduct />,
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
