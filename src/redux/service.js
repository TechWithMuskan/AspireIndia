import ApiMethod from "../store/ApiMethod";

export const getBalance = () => {
  return ApiMethod.get("/api/balance");
};

export const getCardDetail = () => {
  return ApiMethod.get("/api/card-detail");
};

export const setSpendingLimit = (data) => {
  return ApiMethod.post("/api/spending-limit", data);
};

export const getSpendingLimit = () => {
  return ApiMethod.get("/api/spending-limit");
};

export const getSpentLimit = () => {
  return ApiMethod.get("/api/spent-limit");
};
