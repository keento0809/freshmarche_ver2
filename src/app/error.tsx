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
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col gap-6 justify-center items-center pb-10 lg:pb-20">
      <h4 className="text-lg lg:text-xl">Something went wrong!</h4>
      <Button onClick={() => reset()}>Back</Button>
    </div>
  );
}
