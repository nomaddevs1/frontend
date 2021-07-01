import _ from "lodash";
import { FETCH_POSTS } from "../action/types";

export function postReducer(state = {}, action) {
  switch (action.type) {
    // case CREATE_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case EDIT_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    case FETCH_POSTS:
      // action.payload.forEach((load) => {
      //   state[load.id] = load;
      // });
      //or we use loadash mapKeys which will return an object
      console.log(action.payload);
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    // return state;
    // case FETCH_STREAM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_STREAM:
    //   return _.omit(state, action.payload);
    default:
      return state;
  }
}
