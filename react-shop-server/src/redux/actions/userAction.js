import { SAVE_USER_INFO } from "../action_types";
import { setToken } from "../../utils/tools";
export const userAction = (data) => {
  setToken("user", data.user);
  setToken("token", data.token);
  return { type: SAVE_USER_INFO, data };
};
