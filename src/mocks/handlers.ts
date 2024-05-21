import { http, HttpResponse } from "msw";
import { mockProducts } from "../components/list/ProductList.test";

export const handlers = [
  http.get("/products", () => {
    return HttpResponse.json(mockProducts);
  }),
];
