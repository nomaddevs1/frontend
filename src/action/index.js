import axios from "axios";
import {
  FETCH_USER,
  LOGIN_USER,
  REGISTER_USER,
  LOG_OUT,
  FETCH_POSTS,
  CREATE_POST,
} from "../action/types";

// const API = axios.create({ baseURL: "http://localhost:4000" });

axios.interceptors.request.use((req) => {
  const token = localStorage.getItem("Token");
  if (token) {
    req.headers.Authorization = `Bearer ${JSON.parse(token).token}`;
  }

  return req;
});
export const googleSigin = () => async (dispatch) => {
  await axios.get("/auth/google");
};
export const fetchUser = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/api/curent_user");

    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const login = (value, history) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/login", {
      ...value,
    });

    if (!res.data.message) {
      dispatch({ type: LOGIN_USER, payload: res.data.token });
      history.push("/streams/edit");
    }
  } catch (err) {
    console.log(err);
  }
};

export const logout = (history) => async (dispatch) => {
  localStorage.clear();
  await axios.get("/auth/logout");
  history.push("/");
  return dispatch({ type: LOG_OUT });
};
export const register = (value, history) => async (dispatch) => {
  try {
    const res = await axios.post("/register", {
      ...value,
    });
    if (!res.data.message) {
      dispatch({ type: REGISTER_USER, payload: res.data });
      history.push("/login");
    }
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (values, history) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/posts", {
      ...values,
    });
    dispatch({ type: CREATE_POST, payload: data });
    history.push("/");
    history.push("/streams/edit");
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (id) => {
  try {
    console.log(id);
  } catch (err) {
    console.log(err);
  }
};

export const fetchPosts = (history) => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({ type: FETCH_POSTS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};
