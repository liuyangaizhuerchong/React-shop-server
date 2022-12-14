import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Table,
  Form,
  Modal,
  Input,
  message,
  Space,
  Spin,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { saveCategory } from "../../redux/actions/categoryAction";
import {
  categoryListApi,
  addCategoryApi,
  putCategoryApi,
  deleteCategoryApi,
} from "../../api/products";
import { dalImg } from "../../config/tools";
import "./index.less";
const { confirm } = Modal;
export default function Category() {
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState("");
  const [id, setId] = useState(0);
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    categoryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const categoryList = async () => {
    const result = await categoryListApi();
    if (result.code === 1) {
      setCategory(result.data);
      setIsLoading(false);
      dispatch(saveCategory(result.data));
    } else {
      message.error("获取数据失败", 1);
    }
  };
  const addCategory = () => {
    setTypeOpen("ADD");
    setOpen(true);
  };
  const modifyCategory = (text) => {
    setId(text.id);
    form.setFieldsValue(text);
    setTypeOpen("MODIFY");
    setOpen(true);
  };
  const delCategory = (id) => {
    confirm({
      title: "警告",
      icon: <ExclamationCircleOutlined />,
      content: "是否删除该项？",
      okText: "确定",
      okType: "danger",
      cancelText: "取消",
      centered: true,
      onOk: async () => {
        await deleteCategoryApi(id);
        categoryList();
        message.success("删除成功", 1);
      },
    });
  };

  const onOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        form.resetFields();
        if (typeOpen === "ADD" && values) {
          await addCategoryApi(values);
          message.success("新增成功", 1);
          categoryList();
        }
        if (typeOpen === "MODIFY") {
          await putCategoryApi(id, values);
          message.success("修改成功", 1);
          categoryList();
        }
        setOpen(false);
      })
      .catch((info) => {
        return info;
      });
  };
  const onCancel = () => {
    form.resetFields();
    setOpen(false);
  };
  const columns = [
    {
      title: "序号",
      key: "index",
      align: "center",
      render: (text, record, index) => index + 1,
    },
    {
      title: "分类",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "主图",
      key: "coverImage",
      align: "center",
      render: (text, record, index) => {
        return <img src={dalImg(text.coverImage)} alt={text.name} />;
      },
    },
    {
      title: "描述",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "操作",
      width: "25%",
      align: "center",
      render: (text) => {
        return (
          <Space>
            <Button type="primary" onClick={() => modifyCategory(text)}>
              修改
            </Button>
            <Button type="danger" onClick={() => delCategory(text.id)}>
              删除
            </Button>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <Spin tip="Loading..." spinning={isLoading}>
        <Card
          className="category_card"
          extra={
            <Button type="primary" onClick={addCategory}>
              新增
            </Button>
          }
        >
          <Table
            className="category_table"
            dataSource={category}
            columns={columns}
            bordered={true}
            rowKey="id"
            pagination={{ pageSize: 5, showQuickJumper: true }}
          />
        </Card>
      </Spin>
      <Modal
        getContainer={false}
        open={open}
        title={typeOpen === "ADD" ? "新增分类" : "分类修改"}
        okText="确定"
        cancelText="取消"
        onCancel={onCancel}
        onOk={onOk}
        destroyOnClose={true}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="name"
            label="商品分类"
            rules={[
              {
                required: true,
                message: "请输入分类",
              },
              {
                min: 1,
                message: "输入字符不能低于1位",
              },
              {
                max: 12,
                message: "输入字符不能超过20位",
              },
            ]}
          >
            <Input placeholder="请输入商品分类" />
          </Form.Item>
          <Form.Item name="desc" label="分类描述">
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
