import * as Constant from "./constant";

export function fetchBalance() {
  return {
    type: Constant.TOTAL_BALANCE,
  };
}

export function saveBalance(balance) {
  return {
    type: Constant.SAVE_BALANCE,
    payload: balance,
  };
}

export function fetchCardDetail() {
  return {
    type: Constant.CARD_DETAIL,
  };
}

export function saveCardDetail(data) {
  return {
    type: Constant.SAVE_CARD_DETAIL,
    payload: data,
  };
}

export function setWeeklySpending(data) {
  return {
    type: Constant.SET_SPENDING_LIMIT,
    payload: data,
  };
}

export function fetchSpendingLimit() {
  return {
    type: Constant.SPENDING_LIMIT,
  };
}

export function saveSpendingLimit(data) {
  return {
    type: Constant.SAVE_SPENDING_LIMIT,
    payload: data,
  };
}
