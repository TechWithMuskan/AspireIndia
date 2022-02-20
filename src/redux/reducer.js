import * as Constant from "./constant";

const initialState = {
  debitCard: {},
  weeklyLimit: 0,
  cardDetail: {},
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case Constant.SAVE_BALANCE:
      return {
        ...state,
        debitCard: action.payload,
      };
    case Constant.SAVE_SPENDING_LIMIT:
      return {
        ...state,
        weeklyLimit: action.payload,
      };
    case Constant.SAVE_CARD_DETAIL:
      return {
        ...state,
        cardDetail: action.payload,
      };
    default:
      return state;
  }
};

export default common;
