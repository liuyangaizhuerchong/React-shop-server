import { get, post, put, del } from "../config/requests";

export const categoryListApi = () => get("/api/v1/admin/productcategory");

export const addCategoryApi = (data) =>
  post("/api/v1/admin/productcategory", data);

export const putCategoryApi = (id, data) =>
  put(`/api/v1/admin/productcategory/${id}`, data);

export const deleteCategoryApi = (id) =>
  del(`/api/v1/admin/productcategory/${id}`);
