import { SAVE_USER_INFO, LOGIN_OUT } from "../action_types";
import { setToken } from "../../config/tools";
export const userAction = (data) => {
  setToken("user", JSON.stringify(data.user));
  setToken("token", data.token);
  return { type: SAVE_USER_INFO, data };
};

export const userLogout = () => ({ type: LOGIN_OUT });
