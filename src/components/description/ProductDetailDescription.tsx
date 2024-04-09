import { Product } from "@/src/types/products";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../common/card/card";
import { cn } from "@/src/lib/utils";
import { QuantitySelectForm } from "../form/QuantitySelectForm";

type ProductDetailDescriptionType = {
  product: Product;
  className?: string;
};

export const ProductDetailDescription = ({
  product,
  className,
}: ProductDetailDescriptionType) => {
  return (
    <Card
      className={cn(
        "bg-transparent w-full border-none outline-none flex flex-col lg:gap-8 gap-4 shadow-none",
        className
      )}
    >
      <CardHeader className="p-0 min-h-none">
        <CardTitle className="text-2xl">{product.title}</CardTitle>
        <CardDescription>{product.brand}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">{product.description}</CardContent>
      <CardContent className="p-0 font-semibold">${product.price}</CardContent>
      <CardFooter className="p-0 flex gap-2 items-center">
        <QuantitySelectForm product={product} />
      </CardFooter>
    </Card>
  );
};
