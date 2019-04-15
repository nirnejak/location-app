import { SET_RESPONSE, CLEAR_RESPONSE, LOADING } from "./actionTypes";

export const setLoading = loading => {
  return {
    type: LOADING,
    loading: loading
  };
};

export const setResponse = (success, message) => {
  return {
    type: SET_RESPONSE,
    success: success,
    message: message
  };
};

export const clearResponse = (success, message) => {
  return {
    type: CLEAR_RESPONSE
  };
};
