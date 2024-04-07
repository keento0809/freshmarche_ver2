"use client";

import { useToast } from "@/src/components/common/toast/use-toast";

export const TestingPage = () => {
  // const supabase = await createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) redirect("/login");
  const { toast } = useToast();

  return (
    <div className="min-h-[calc(100svh_-_80px)] flex flex-col gap-6 justify-center items-center pb-10 lg:pb-20">
      <h2 className="font-semibold text-base lg:text-xl">
        This is a test page for login status.
      </h2>
      <div className="py-6">
        <button
          onClick={() => {
            console.log("clickやで〜");
            toast({
              variant: "destructive",
              description: "Something is wrong...",
            });
          }}
          className="px-6 py-2 text-sm rounded-2xl border border-slate-600"
        >
          Show Toast
        </button>
      </div>
    </div>
  );
};
