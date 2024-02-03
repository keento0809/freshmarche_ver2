export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export type ProductsInCart = {
  title: string;
  quantity: string;
};

export type CartProduct = Product & Omit<ProductsInCart, "title">;
