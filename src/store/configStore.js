import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/auth";
import apiResponse from "./reducers/apiResponse";

const rootReducer = combineReducers({
  auth: authReducer,
  response: apiResponse,
});

const middlewares = [thunk];

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeConfig = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

export default storeConfig;
