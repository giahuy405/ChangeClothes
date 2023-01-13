import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./producReducer";
export const rootReducer = combineReducers({
    categoryReducer,
    productReducer,
})