import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Select,
  Input,
  Table,
  Space,
  Tooltip,
  message,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { productsListApi } from "../../api/products";
import { dalImg } from "../../config/tools";
import { PER_SIZE } from "../../config/tools";
import "./index.less";
export default function Products() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(1);
  const [selectName, setSelectName] = useState("name");
  const [input_Value, setInputValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const productsList = async (number = 1) => {
    let res = [];
    isSearch
      ? (res = await productsListApi({
          per: PER_SIZE,
          page: number,
          [selectName]: input_Value,
        }))
      : (res = await productsListApi({ per: PER_SIZE, page: number }));

    if (res.code === 1) {
      setData(res.data);
      setTotal(res.total);
    } else message.error("商品列表获取失败！");
  };
  useEffect(() => {
    productsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const searchProducts = async () => {
    setIsSearch(true);
    productsList();
  };
  const columns = [
    {
      title: "序号",
      key: "index",
      width: "3%",
      align: "center",
      render: (text, record, index) => index + 1,
    },
    {
      title: "商品名称",
      dataIndex: "name",
      key: "name",
      width: "10%",
      align: "center",
      ellipsis: {
        showTitle: false,
      },
      // return text.length > 25 ? text.substring(0, 25) + "..." : text;
      render: (text) => (
        <Tooltip placement="topLeft" title={text}>
          {text}
        </Tooltip>
      ),
    },
    {
      title: "商品分类",
      dataIndex: "category",
      key: "category",
      width: "5%",
      align: "center",
      render: (text) => text?.name,
    },
    {
      title: "商品主图",
      dataIndex: "coverImage",
      key: "coverImage",
      width: "8%",
      align: "center",
      render: (text) => (
        <img className="product_img" src={dalImg(text)} alt={text} />
      ),
    },
    {
      title: "价格",
      dataIndex: "price",
      key: "price",
      width: "5%",
      align: "center",
    },
    {
      title: "状态",
      key: "status",
      width: "5%",
      align: "center",
      render: (text, record, index) => {
        return (
          <>
            <Button type="primary">上架</Button>
            <br />
            <span>已下架</span>
          </>
        );
      },
    },
    {
      title: "操作",
      width: "10%",
      align: "center",
      render: (text, record, index) => {
        return (
          <Space>
            <Button type="link">详情</Button>
            <Button type="link">修改</Button>
            <Button type="link">删除</Button>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <Card
        className="products_card"
        title={
          <>
            <Select
              className="search_name"
              defaultValue="name"
              onChange={(value) => setSelectName(value)}
              options={[
                {
                  value: "name",
                  label: "商品名称",
                },
              ]}
            />
            <Input
              placeholder="请输入关键字"
              className="search_input"
              allowClear
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={searchProducts}
            >
              搜索
            </Button>
          </>
        }
        extra={<Button type="primary">新增</Button>}
      >
        <Table
          dataSource={data}
          columns={columns}
          rowKey="id"
          bordered={true}
          pagination={{
            total,
            pageSize: PER_SIZE,
            showQuickJumper: true,
            onChange: productsList,
            defaultCurrent: 1,
            showSizeChanger: false,
          }}
        />
      </Card>
    </>
  );
}
