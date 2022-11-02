import { post } from "../config/requests";

export const login_Api = (data) => post("/api/v1/auth/manager_login", data);
