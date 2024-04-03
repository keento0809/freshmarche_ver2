"use client";

import { FC } from "react";
import Link from "next/link";

export const NotFoundPage: FC = () => {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center">
      <h4 className="text-lg lg:text-xl">Page Not Found</h4>
      <Link href={"/home"}>Go Back</Link>
    </div>
  );
};
