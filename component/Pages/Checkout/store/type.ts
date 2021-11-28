interface Product {
  sku: string;
  name: string;
  price: number;
  stockLevel: number;
  quantity: number;
}

export interface State {
  products: Product[];
}

export enum ActionType {
  UPDATE_CART,
}

export type UPDATE_CART = { type: ActionType.UPDATE_CART; payload: Product[] };

export type Actions = UPDATE_CART;
