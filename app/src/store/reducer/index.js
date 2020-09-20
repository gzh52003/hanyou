import {
  combineReducers
} from "redux"

import comReducer from "./common";
import userReducer from "./user";
// import cartReducer from "./cart";

//使用
const reducer = combineReducers({
  common: comReducer,
  user: userReducer,
  // cart: cartReducer
})

export default reducer;