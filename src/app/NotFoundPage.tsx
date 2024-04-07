"use client";

import { FC } from "react";
import Link from "next/link";

export const NotFoundPage: FC = () => {
  return (
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col justify-center items-center gap-10 lg:pb-20 pb-10">
      <h4 className="text-lg lg:text-xl font-medium">Page Not Found</h4>
      <Link
        href={"/home"}
        className="text-sm px-6 py-2.5 rounded-2xl border border-slate-600 hover:bg-neutral-200 transition-all"
      >
        Go Back
      </Link>
    </div>
  );
};
