import { LoginDialog } from "@/src/app/components/LoginDialog";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="lg:max-w-7xl mx-auto w-full py-5 px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="text-xs lg:text-base">
          <Link href="/home">TM</Link>
        </div>
        <div className="text-xs lg:text-sm">
          <div>
            <LoginDialog triggerText="Login" />
          </div>
        </div>
      </div>
    </header>
  );
};
