import { get, post, put, del } from "../config/requests";
// 商品分类列表
export const categoryListApi = () => get("/api/v1/admin/productcategory");
// 新增商品分类 data为对象类型
export const addCategoryApi = (data) =>
  post("/api/v1/admin/productcategory", data);
// 修改商品分类
export const putCategoryApi = (id, data) =>
  put(`/api/v1/admin/productcategory/${id}`, data);
// 删除商品分类
export const deleteCategoryApi = (id) =>
  del(`/api/v1/admin/productcategory/${id}`);
// 商品列表
export const productsListApi = (params) =>
  get("/api/v1/admin/product", { params });
// 新增商品
export const addProductApi = (data) => post("/api/v1/admin/product", data);
// 修改商品
export const putProductApi = (id, data) =>
  put("/api/v1/admin/product/" + id, data);
// 删除商品
export const delProductApi = (id) => del("/api/v1/admin/product/" + id);
// 单个商品
export const detailProductApi = (id) => get("/api/v1/admin/product/" + id);
