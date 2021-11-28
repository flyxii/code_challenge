import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { products } from "shared/const";
import { State, Actions } from "./type";

/**
 * Trying to reproduce the scenario that a user has already choosen some products into cart
 * In real world it should be hydrated from DB or local storage
 */
const initState = products.items
  .filter((item) => {
    return item.stockLevel !== 0;
  })
  .map((item) => ({
    sku: item.sku,
    name: item.name,
    price: item.price,
    stockLevel: item.stockLevel,
    quantity: 1,
  }));

export const initialState: State = {
  products: initState,
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}> {children} </AppContext.Provider>;
};

export { AppContext, AppProvider };
