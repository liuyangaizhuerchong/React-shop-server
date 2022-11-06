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
    icon: <HomeOutlined />,
  },
  {
    title: "商品",
    path: "prod_about",
    icon: <InsertRowAboveOutlined />,
    children: [
      {
        title: "商品分类",
        path: "category",
        icon: <SafetyCertificateOutlined />,
      },
      {
        title: "商品管理",
        path: "product",
        icon: <UnorderedListOutlined />,
      },
    ],
  },
  {
    title: "角色管理",
    path: "role",
    icon: <BorderOuterOutlined />,
  },
  {
    title: "用户管理",
    path: "user",
    icon: <UserOutlined />,
  },
  {
    title: "图形图表",
    path: "charts",
    icon: <PicRightOutlined />,
    children: [
      {
        title: "饼状图",
        path: "pie",
        icon: <PieChartOutlined />,
      },
      {
        title: "折线图",
        path: "line",
        icon: <FundOutlined />,
      },
    ],
  },
];
