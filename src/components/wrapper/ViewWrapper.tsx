"use client";

import { cn } from "@/src/lib/utils";

export const ViewWrapper: React.FC<{
  children: React.ReactNode;
  childrenClassName?: string;
}> = ({ children, childrenClassName }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="max-w-screen-xl mx-auto py-16 px-6">
        <div
          className={cn(
            "mx-auto fixed top-[100px] left-0 right-0 max-w-screen-xl overflow-scroll",
            childrenClassName
          )}
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
