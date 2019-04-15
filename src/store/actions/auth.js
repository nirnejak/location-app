import { toast } from "react-toastify";
import { AUTHENTICATE_USER } from "../actions/actionTypes";
import axios, { setAuthToken } from "../../configAxios";
import { setLoading } from "./index";

export const authenticateUser = isAuthenticated => {
  return {
    type: AUTHENTICATE_USER,
    isAuthenticated: isAuthenticated
  };
};

export const loginUser = userData => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post("/login", userData)
      .then(res => {
        if (res.data.token === null) {
          toast.error("UserName or Password is invalid");
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
          localStorage.setItem("authToken", res["data"]["token"]);
          localStorage.setItem("expiresIn", res["data"]["expires_in"]);
          setAuthToken(res["data"]["token"]);
          dispatch(authenticateUser(true));
        }
      })
      .catch(err => {
        toast.error("Something went wrong");
        dispatch(setLoading(false));
      });
  };
};

export const resetPassword = userData => {
  return dispatch => {
    dispatch(setLoading(true));
    axios
      .post("/passwords", userData)
      .then(res => {
        dispatch(setLoading(false));
        if (res["data"]["json"]["success"]) {
          window.location.href = "/";
          toast.success("Your password has been reset successfully");
        } else {
          toast.error("User not found");
        }
      })
      .catch(err => {
        dispatch(setLoading(false));
        toast.error("Something went wrong");
      });
  };
};

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("expiresIn");
    dispatch(authenticateUser(false));
    window.location.href = "/";
  };
};
