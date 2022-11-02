import { SAVE_USER_INFO, LOGIN_OUT } from "../action_types";
import { getToken } from "../../config/tools";

let user = JSON.parse(getToken("user"));
let token = getToken("token");

let initState = {
  user: user || "",
  token: token || "",
  isLogin: user && token ? true : false,
};
export function saveUserInfo(preState = initState, action) {
  const { type, data } = action;
  let newState;
  switch (type) {
    case SAVE_USER_INFO:
      newState = { user: data.user, token: data.token, isLogin: true };
      return newState;
    case LOGIN_OUT:
      newState = { isLogin: false };
      return newState;
    default:
      return preState;
  }
}
