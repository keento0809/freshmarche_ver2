import { LoginDialog } from "@/src/app/_components/LoginDialog";
import { useNavbar } from "./_hooks/useNavbar";
import Link from "next/link";

export const Navbar = () => {
  const { session } = useNavbar();
  return (
    <header className="lg:max-w-[1280px] mx-auto w-full py-5 px-4 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="text-xs lg:text-base">
          <Link href="/home">TM</Link>
        </div>
        <div className="text-xs lg:text-sm">
          {session ? (
            <div className="">Logout</div>
          ) : (
            <div className="">
              <LoginDialog triggerText="Login" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
