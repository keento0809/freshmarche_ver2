import { render, screen, waitFor } from "@testing-library/react";
import { ProductList } from "./ProductList";
import { Product } from "@/src/types/products";

export const mockProducts: Product[] = [
  {
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
  },
  {
    id: 2,
    title: "mock-car",
    description: "mock description",
    price: 100,
    discountPercentage: 0,
    rating: 4,
    stock: 200,
    brand: "mock",
    category: "car",
    thumbnail: "",
    images: ["", ""],
  },
  {
    id: 3,
    title: "mock-bike",
    description: "mock description",
    price: 100,
    discountPercentage: 0,
    rating: 4,
    stock: 200,
    brand: "mock",
    category: "bike",
    thumbnail: "",
    images: ["", ""],
  },
];

describe("ProductList", () => {
  it("render product list", async () => {
    const itemLength = mockProducts.length;
    render(<ProductList products={mockProducts} />);

    const items = await screen.findAllByRole("listitem");

    expect(items.length).toEqual(itemLength);
  });

  it("should render product information", () => {
    render(<ProductList products={mockProducts} />);

    waitFor(() => {
      mockProducts.forEach((p) => {
        expect(screen.getByText(p.title)).toBeInTheDocument();
        expect(screen.getByText(p.brand)).toBeInTheDocument();
      });
    });
  });

  it("should render texts if no products found", async () => {
    render(<ProductList products={[]} />);

    const text = await screen.findByText(/no products/i);

    expect(text).toBeInTheDocument();
  });
});
