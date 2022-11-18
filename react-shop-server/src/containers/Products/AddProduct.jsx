import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { categoryListApi } from "../../api/products";
import UpLoad from "./UpLoad";
import "./index.less";
const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;
export default function AddProduct() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.saveCategory);
  const [category, setCategory] = useState([]);
  const loadCategory = async () => {
    if (data.length === 0) {
      const res = await categoryListApi();
      res.code === 1 ? setCategory(res.data) : setCategory([]);
    } else {
      setCategory(data);
    }
  };
  useEffect(() => {
    loadCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card
      bordered={false}
      title={
        <Button
          className="prod_button"
          type="link"
          icon={<LeftOutlined />}
          onClick={() => navigate(-1)}
        >
          新增商品
        </Button>
      }
    >
      <Form
        className="prod_form"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 5 }}
      >
        <Item label="商品名称：">
          <Input
            placeholder="请输入商品名称"
            allowClear
            showCount
            maxLength={20}
          />
        </Item>
        <Item label="商品售价：">
          <Input
            placeholder="请输入商品售价"
            allowClear
            prefix="￥"
            suffix="元"
          />
        </Item>
        <Item label="商品分类：">
          <Select placeholder="请选择商品分类" allowClear>
            {category.map((item) => (
              <Option key={item.id} value={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Item>
        <Item label="商品简介：" wrapperCol={{ span: 15 }}>
          <TextArea
            rows={4}
            placeholder="请输入商品简介"
            showCount
            maxLength={200}
          />
        </Item>
        <Item label="商品图片：" wrapperCol={{ span: 15 }}>
          <UpLoad />
        </Item>
        <Item label="商品描述：">
          <Input placeholder="请输入商品名称" />
        </Item>
        <Item wrapperCol={{ span: 24 }} className="submit-form">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Item>
      </Form>
    </Card>
  );
}
