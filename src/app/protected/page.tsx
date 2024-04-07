import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect("/login");

  return (
    <div className="min-h-[calc(100svh_-_80px)] flex justify-center items-center pb-10 lg:pb-20">
      This page is protected, so only authorized users can see it.
    </div>
  );
}
