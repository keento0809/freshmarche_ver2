import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../common/card/card";
import { Skeleton } from "../common/skeleton/skeleton";

export const ProductCardSkelton: FC = () => {
  return (
    <Card className="max-h-[450px]">
      <CardHeader className="min-h-[122px] p-6">
        <Skeleton className="h-6" />
        <Skeleton className="h-3.5" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[226px] w-[245px]" />
      </CardContent>
      <CardFooter className="h-16 p-6 pt-0">
        <Skeleton className="w-[73px] h-[40px]" />
      </CardFooter>
    </Card>
  );
};
