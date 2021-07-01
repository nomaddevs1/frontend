import { FETCH_USER, LOGIN_USER, LOG_OUT } from "./../action/types";

function getUser(state = {}, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN_USER:
      console.log(action.payload);
      localStorage.setItem("Token", JSON.stringify({ token: action?.payload }));
      return { ...state, id: action.payload };
    case LOG_OUT:
      return { ...state, id: action.payload };
    default:
      return state;
  }
}

export default getUser;
