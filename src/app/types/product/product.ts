import DUMMY_IMG_URL from "../../public/apple-test-img.jpg";

export interface Product {
  name: string;
  price: number;
  imageUrl: string;
  rate: number;
}

// Dummy product for the development environment
export const DUMMY_PRODUCT: Product = {
  name: "Apple",
  price: 2.99,
  imageUrl: DUMMY_IMG_URL.src,
  rate: 4,
};
