"use client";

import { useEffect } from "react";
import { Button } from "../components/common/button/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="min-h-svh flex flex-col justify-center items-center pb-10">
      <h4 className="text-lg lg:text-xl">Something went wrong!</h4>
      <Button onClick={() => reset()}>Back</Button>
    </div>
  );
}
