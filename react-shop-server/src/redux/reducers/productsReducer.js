import { SAVE_PRODUCTS } from "../action_types";

const initState = [];
export const saveProducts = (preState = initState, action) => {
  const { data, type } = action;
  let newState;
  switch (type) {
    case SAVE_PRODUCTS:
      newState = data;
      return newState;
    default:
      return preState;
  }
};
