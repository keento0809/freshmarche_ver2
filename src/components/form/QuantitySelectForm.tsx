import { Button } from "@/src/components/common/button/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/src/components/common/form/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/common/select/select";
import { productQuantityArray } from "@/src/constants/product/productQuantity";
import { Product } from "@/src/types/products";
import { useQuantitySelectForm } from "./useQuantitySelectForm";

export function QuantitySelectForm({ product }: { product: Product }) {
  const { onSubmit, form } = useQuantitySelectForm({
    product,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Quantity:" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {productQuantityArray.map((num) => (
                    <SelectItem value={num.toString()} key={num}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-1/2">
          Add Cart
        </Button>
      </form>
    </Form>
  );
}
