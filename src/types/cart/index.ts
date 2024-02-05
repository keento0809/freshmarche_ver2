import { CartProduct } from "@/src/types/products";

export type Cart = {
  userId: string;
  products: CartProduct;
};
