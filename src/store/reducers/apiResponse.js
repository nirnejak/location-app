import { SET_RESPONSE, CLEAR_RESPONSE, LOADING } from "../actions/actionTypes";

const initialState = {
  loading: null,
  success: null,
  message: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case SET_RESPONSE:
      return {
        success: action.success,
        message: action.message
      };
    case CLEAR_RESPONSE:
      return {};
    default:
      return state;
  }
};

export default reducer;
