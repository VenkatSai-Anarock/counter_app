

import changeNumber from "./handleIncAndDec";
import divOrMulNumber from './handleDivAndMul'
import { combineReducers } from "redux";

const rootReducer = combineReducers({changeNumber,divOrMulNumber})

export default rootReducer;