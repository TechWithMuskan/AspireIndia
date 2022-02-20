import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga.js";

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(RootSaga);

  return { store };
};
