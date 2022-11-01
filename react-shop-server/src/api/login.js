import { post } from "../utils/requests";

export const login_Api = (data) => post("/api/v1/auth/manager_login", data);
