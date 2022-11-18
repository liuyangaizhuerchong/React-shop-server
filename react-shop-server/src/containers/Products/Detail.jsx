import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Card, List } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { detailProductApi } from "../../api/products";
import { dalImg } from "../../config/tools";
import "./index.less";

const { Item } = List;
export default function Detail() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.saveProducts);
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    productDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const productDetail = async () => {
    let res = data?.find((item) => item.id === id * 1);
    if (res) setDetail(res);
    else {
      res = await detailProductApi(id);
      setDetail(res);
    }
  };

  return (
    <>
      <Card
        className="detail_card"
        title={
          <Button
            className="prod_button"
            type="link"
            icon={<LeftOutlined />}
            onClick={() => navigate(-1)}
          >
            商品详情
          </Button>
        }
      >
        <List className="detail_list">
          <Item>
            <h1>商品名称：</h1>
            <span>{detail.name}</span>
          </Item>
          <Item>
            <h1>商品售价：</h1>
            <span>{detail.price + "元"}</span>
          </Item>
          <Item>
            <h1>商品分类：</h1>
            <span>{detail.category?.name}</span>
          </Item>
          <Item>
            <h1>商品简介：</h1>
            <span>{detail.desc}</span>
          </Item>
          <Item>
            <h1>商品图片：</h1>
            <span>
              <img
                className="detail_img"
                src={dalImg(detail.coverImage)}
                alt={detail.name}
              />
            </span>
          </Item>
          <Item>
            <h1>商品详情：</h1>
            <span dangerouslySetInnerHTML={{ __html: detail.content }}></span>
          </Item>
        </List>
      </Card>
    </>
  );
}
