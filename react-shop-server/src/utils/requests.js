import axios from "axios";
import NProgress from "nprogress";
import { serversUrl } from "./tools";
// import { message } from "antd";
import qs from "qs";
import "nprogress/nprogress.css";

const instance = axios.create({
  timeout: 5000,
  baseURL: serversUrl,
});

instance.interceptors.request.use(
  (config) => {
    const { method, data } = config;
    NProgress.start();
    if (method.toLowerCase() === "post") {
      if (data instanceof Object) {
        config.data = qs.stringify(data);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    NProgress.done();
    return Promise.reject("失败了", error);
  }
);
/**
 * 发送get请求
 * @param {*} url    请求地址
 * @param {*} params 请求params参数
 * @returns
 */
export const get = (url, params) => instance.get(url, params);
/**
 * 发送post请求
 * @param {*} url    请求地址
 * @param {*} params 请求参数
 * @returns
 */
export const post = (url, data) => instance.post(url, data);
/**
 * 发送put修改请求
 * @param {*} url    请求地址
 * @param {*} data   请求参数
 * @returns
 */
export const put = (url, data) => instance.put(url, data);
/**
 * 发送delete删除请求
 * @param {*} url    请求地址
 * @returns
 */
export const del = (url) => instance.delete(url);
