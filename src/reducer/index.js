import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import getUser from "./auth";
import { postReducer } from "./post";

export default combineReducers({
  user: getUser,
  form: formReducer,
  post: postReducer,
});
