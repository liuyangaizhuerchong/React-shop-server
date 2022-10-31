import { ADD_NUM, ADD_STR } from "../action_types";
let initState = "hello";
export function test(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_STR:
      return preState + data;
    case ADD_NUM:
      return preState + data + "!";
    default:
      return preState;
  }
}
