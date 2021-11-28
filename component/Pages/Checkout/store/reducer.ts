import { State, Actions, ActionType } from "./type";

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ActionType.UPDATE_CART:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
