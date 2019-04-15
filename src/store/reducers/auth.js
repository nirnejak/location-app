import { AUTHENTICATE_USER } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      };
    default:
      return state;
  }
};

export default reducer;
