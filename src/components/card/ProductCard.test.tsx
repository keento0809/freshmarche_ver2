import { Product } from "@/src/types/products";
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

const mockProduct: Product = {
  id: 1,
  title: "mock-tea",
  description: "mock description",
  price: 100,
  discountPercentage: 0,
  rating: 4,
  stock: 200,
  brand: "mock",
  category: "tea",
  thumbnail: "",
  images: ["", ""],
};

describe("ProductCard", () => {
  const renderProductCard = () => {
    render(<ProductCard product={mockProduct} />);

    const product = screen.getByTestId("productCard");
    const link = screen.getByRole("link");

    return {
      product,
      link,
    };
  };

  it("should render product", () => {
    const { product } = renderProductCard();

    expect(product).toBeInTheDocument();
  });

  it("should jump to page when link is clicked", () => {
    const { link } = renderProductCard();

    expect(link).toHaveAttribute("href", "/products/" + mockProduct.id);
  });

  it("should render Loader while loading product image", () => {});
});
