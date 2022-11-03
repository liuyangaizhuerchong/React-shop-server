import Category from "../containers/Category";
import Home from "../containers/Home";
import Line from "../containers/Line";
import Pie from "../containers/Pie";
import Role from "../containers/Role";

export const all_routes = [
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "role",
    element: <Role />,
  },
  {
    path: "line",
    element: <Line />,
  },
  {
    path: "pie",
    element: <Pie />,
  },
];
