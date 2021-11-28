interface _Product {
  name: string;
  price: number;
}

export const _products: _Product[] = [
  {
    name: "Cotton T-Shirt, medium",
    price: 10.99,
  },
  {
    name: "Baseball cap, one size",
    price: 5.99,
  },
  {
    name: "Shorts, medium",
    price: 14.99,
  },
];

interface Product {
  sku: string;
  name: string;
  size?: string;
  price: number;
  stockLevel: number;
}

interface Products {
  items: Product[];
}

export const products: Products = {
  items: [
    {
      sku: "AWDT0001-S",
      name: "Cotten T-Shirt",
      size: "small",
      price: 10.99,
      stockLevel: 10,
    },
    {
      sku: "AWDT0001-M",
      name: "Cotten T-Shirt",
      size: "medium",
      price: 10.99,
      stockLevel: 50,
    },
    {
      sku: "AWDT0001-L",
      name: "Cotten T-Shirt",
      size: "large",
      price: 10.99,
      stockLevel: 0,
    },
    {
      sku: "AWDT0002",
      name: "Baseball cap",
      price: 5.99,
      stockLevel: 7,
    },
    {
      sku: "AWDT0003-M",
      name: "Shorts",
      price: 14.99,
      stockLevel: 100,
      size: "medium",
    },
  ],
};
