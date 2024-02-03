import { Product } from "../products";

export type ResponseUserLogin = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

export type ResponseIsCartExist = {
  carts: Array<{
    id: number;
    products: Array<Product>;
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
  }>;
  total: number;
  skip: number;
  limit: number;
};

export type ResponseAddingCart = {
  id: number;
  products: Array<Product>;
};
