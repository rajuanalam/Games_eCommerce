import { combineReducers } from "redux";
import addCartReducer from "../redux/addToCart/Reducer";
import clickReducer from "../redux/clickCart/Reducer";
import counterReducer from "../redux/counter/Reducer";

const rootReducer = combineReducers({
  addCart: addCartReducer,
  clickCart: clickReducer,
  count: counterReducer
});

export default rootReducer;
