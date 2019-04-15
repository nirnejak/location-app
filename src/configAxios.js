import axios from "axios";
import { toast } from "react-toastify";
import storeConfig from "./store/configStore";
import { logoutUser } from "./store/actions";

const store = storeConfig();

axios.defaults.baseURL = "https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest/";

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      store.dispatch(logoutUser());
    } else {
      toast.error("Something went wrong");
    }
    return Promise.reject(error);
  }
);

export default axios;