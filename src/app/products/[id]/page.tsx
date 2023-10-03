import { ProductPage } from "./ProductPage";

export default function Product({ params }: { params: { id: string } }) {
  return <ProductPage id={params.id} />;
}
