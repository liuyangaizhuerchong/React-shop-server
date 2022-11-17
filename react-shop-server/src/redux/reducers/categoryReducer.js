import { SAVE_CATEGORY } from "../action_types";

const initState = [];

export const saveCategory = (preState = initState, action) => {
  const { type, data } = action;
  let newState;
  switch (type) {
    case SAVE_CATEGORY:
      newState = data;
      return newState;
    default:
      return preState;
  }
};
