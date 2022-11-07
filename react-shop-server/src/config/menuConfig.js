import {
  HomeOutlined,
  UnorderedListOutlined,
  SafetyCertificateOutlined,
  InsertRowAboveOutlined,
  FundOutlined,
  PieChartOutlined,
  UserOutlined,
  BorderOuterOutlined,
  PicRightOutlined,
} from "@ant-design/icons";

export const menuConfig = [
  {
    title: "首页",
    path: "home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    title: "商品",
    key: "prod_about",
    icon: <InsertRowAboveOutlined />,
    children: [
      {
        title: "商品分类",
        path: "prod_about/category",
        key: "category",
        icon: <SafetyCertificateOutlined />,
      },
      {
        title: "商品管理",
        path: "prod_about/product",
        key: "product",
        icon: <UnorderedListOutlined />,
      },
    ],
  },
  {
    title: "角色管理",
    path: "role",
    key: "role",
    icon: <BorderOuterOutlined />,
  },
  {
    title: "用户管理",
    path: "user",
    key: "user",
    icon: <UserOutlined />,
  },
  {
    title: "图形图表",
    key: "charts",
    icon: <PicRightOutlined />,
    children: [
      {
        title: "饼状图",
        path: "charts/pie",
        key: "pie",
        icon: <PieChartOutlined />,
      },
      {
        title: "折线图",
        path: "charts/line",
        key: "line",
        icon: <FundOutlined />,
      },
    ],
  },
];
