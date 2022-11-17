import { combineReducers } from "redux";

import { saveUserInfo } from "./userReducer";
import { saveProducts } from "./productsReducer";
import { saveCategory } from "./categoryReducer";

export default combineReducers({ saveUserInfo, saveProducts, saveCategory });
