import { combineReducers } from "redux";
import commonReducer from "../redux/reducer";

const rootReducer = combineReducers({
  common: commonReducer,
});

export default rootReducer;
