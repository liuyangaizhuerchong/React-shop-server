import { combineReducers } from "redux";

import { saveUserInfo } from "./userReducer";
import { saveProducts } from "./productsReducer";

export default combineReducers({ saveUserInfo, saveProducts });
