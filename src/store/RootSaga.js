import { all } from "redux-saga/effects";
import commonSaga from "../redux/saga";

export default function* rootSagas() {
  yield all([commonSaga()]);
}
