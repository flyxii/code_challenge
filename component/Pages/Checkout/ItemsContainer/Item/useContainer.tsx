import { useContext } from "react";
import { AppContext } from "./../../store/context";
import { ActionType } from "./../../store/type";

interface Props {
  sku: string;
  stockLevel: number;
  quantity: number;
}

// eslint-disable-next-line
export const useContainer = (props: Props) => {
  const { sku, stockLevel, quantity } = props;
  const { state, dispatch } = useContext(AppContext);
  const { UPDATE_CART } = ActionType;

  const onIncrement = () => {
    if (quantity >= stockLevel) return;

    const products = state.products;
    const newQuantity = quantity + 1;

    // find the index of product from the list
    const index = products.findIndex((obj) => obj.sku === sku);

    // create new object for updated product
    const updatedProduct = { ...products[index], quantity: newQuantity };

    //create new array of product list
    const updatedProducts = [...products.slice(0, index), updatedProduct, ...products.slice(index + 1)];
    dispatch({ type: UPDATE_CART, payload: updatedProducts });
  };

  const onDecrement = () => {
    if (quantity <= 1) return;

    const products = state.products;
    const newQuantity = quantity - 1;

    //find the index of product from the list
    const index = products.findIndex((obj) => obj.sku === sku);

    //create new object for updated product
    const updatedProduct = { ...products[index], quantity: newQuantity };

    //create new array of product list
    const updatedProducts = [...products.slice(0, index), updatedProduct, ...products.slice(index + 1)];
    dispatch({ type: UPDATE_CART, payload: updatedProducts });
  };

  const onDelete = () => {
    const products = state.products.filter((item) => {
      return item.sku !== sku;
    });
    dispatch({ type: UPDATE_CART, payload: products });
  };

  return { onIncrement, onDecrement, onDelete };
};
