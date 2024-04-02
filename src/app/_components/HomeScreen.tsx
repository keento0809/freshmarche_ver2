"use client";

import { Button } from "@/src/components/common/button/button";
import Link from "next/link";

export const HomeScreen = () => {
  return (
    <main className="min-h-svh flex flex-col gap-6 justify-center items-center lg:pb-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl">HomeScreen</h2>
      <Button
        asChild
        variant={"outline"}
        size={"sm"}
        className="border border-red-400 px-6"
      >
        <Link href={"/home"}>Get started</Link>
      </Button>
    </main>
  );
};
