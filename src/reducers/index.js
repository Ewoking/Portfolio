import { combineReducers } from "redux";
import DisplayReducer from "./displayReducer";


const rootReducer = combineReducers({
    display: DisplayReducer
});

export default rootReducer;