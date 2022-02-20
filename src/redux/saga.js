import { call, put, takeEvery } from "redux-saga/effects";
import { saveBalance, saveCardDetail, saveSpendingLimit } from "./action";
import * as Constant from "./constant";
import {
  getBalance,
  setSpendingLimit,
  getSpendingLimit,
  getCardDetail,
} from "./service";

function* getBalanceSaga() {
  try {
    const [response, status] = yield call(getBalance);
    if (status === 200) {
      yield put(saveBalance(response));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* getCardDetailSaga() {
  try {
    const [response, status] = yield call(getCardDetail);
    if (status === 200) {
      yield put(saveCardDetail(response));
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* setSpendingLimitSaga(data) {
  try {
    const [response, status] = yield call(setSpendingLimit, data.payload);
    if (status === 201) {
      // alert("Success!");
    }
  } catch (error) {
    console.log("error", error);
  }
}

function* getSpendingLimitSaga() {
  try {
    const [response, status] = yield call(getSpendingLimit);
    if (status === 200) {
      yield put(saveSpendingLimit(response.spendingAmount));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export default function* commonSaga() {
  yield takeEvery(Constant.TOTAL_BALANCE, getBalanceSaga);
  yield takeEvery(Constant.CARD_DETAIL, getCardDetailSaga);
  yield takeEvery(Constant.SET_SPENDING_LIMIT, setSpendingLimitSaga);
  yield takeEvery(Constant.SPENDING_LIMIT, getSpendingLimitSaga);
}
