import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, message, Select, Col, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BraftEditor from "braft-editor";
import { categoryListApi } from "../../api/products";
import UploadMain from "./UploadMain";
import RichBraftEditor from "./RichBraftEditor";
import {
  addProductApi,
  detailProductApi,
  putProductApi,
} from "../../api/products";
import "./index.less";

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;
export default function AddProduct() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.saveCategory);
  const [categoryList, setCategory] = useState([]);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [editorState, setEditorState] = useState(null);
  const { state } = useLocation();
  const onFinish = async (values) => {
    if (state) {
      await putProductApi(state.id, {
        ...values,
        coverImage: imageUrl,
        content: editorState.toHTML(),
      });
    } else
      await addProductApi({
        ...values,
        coverImage: imageUrl,
        content: editorState.toHTML(),
      });
    message.success(state ? "修改商品成功" : "新增商品成功");
    navigate("/admin/prod_about/products", { replace: true });
  };
  const loadCategory = async () => {
    if (data.length === 0) {
      const res = await categoryListApi();
      res.code === 1 ? setCategory(res.data) : setCategory([]);
    } else {
      setCategory(data);
    }
  };
  useEffect(() => {
    if (state) {
      detailProduct();
      setImageUrl(state.coverImage);
    }
    loadCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const detailProduct = async () => {
    const res = await detailProductApi(state.id);
    setEditorState(BraftEditor.createEditorState(res.content));
  };
  return (
    <Card
      className="add_product"
      bordered={false}
      title={
        <Button
          className="prod_button"
          type="link"
          icon={<LeftOutlined />}
          onClick={() => navigate(-1)}
        >
          {state ? "修改商品" : "新增商品"}
        </Button>
      }
    >
      <Form
        form={form}
        onFinish={onFinish}
        className="prod_form"
        initialValues={{
          ...state,
          category: state ? state.category?.id : "",
        }}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Item
              label="商品名称："
              name="name"
              rules={[{ required: true, message: "请输入商品名称" }]}
            >
              <Input
                placeholder="请输入商品名称"
                allowClear
                showCount
                maxLength={20}
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              label="商品售价："
              name="price"
              rules={[{ required: true, message: "请输入商品售价" }]}
            >
              <Input
                placeholder="请输入商品售价"
                prefix="￥"
                suffix="元"
                type="number"
              />
            </Item>
          </Col>
          <Col span={6}>
            <Item
              label="商品库存："
              name="amount"
              rules={[{ required: true, message: "请输入商品库存" }]}
            >
              <Input placeholder="请输入商品库存" allowClear type="number" />
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <Item
              label="商品分类："
              name="category"
              rules={[{ required: true, message: "请选择商品分类" }]}
            >
              <Select placeholder="请选择商品分类" allowClear>
                {categoryList.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Item>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginLeft: "0" }}>
          <Col span={6}>
            <Item label="商品图片：" name="coverImage">
              <UploadMain imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </Item>
          </Col>
          <Col span={12}>
            <Item label="商品简介：" name="desc">
              <TextArea
                rows={4}
                placeholder="请输入商品简介"
                showCount
                maxLength={200}
              />
            </Item>
          </Col>
        </Row>
        <Row gutter={18} style={{ marginLeft: "0" }}>
          <Col span={18}>
            <Item label="商品描述：" name="content">
              <RichBraftEditor
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </Item>
          </Col>
        </Row>
        <Item wrapperCol={{ span: 24 }} className="submit-form">
          <Button type="primary" onClick={() => navigate(-1)}>
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Item>
      </Form>
    </Card>
  );
}
