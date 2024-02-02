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

export type ResponseAddingCart = {
  id: number;
  products: Array<Product>;
};
