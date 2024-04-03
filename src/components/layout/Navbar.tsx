import { useNavbar } from "./_hooks/useNavbar";

export const Navbar = () => {
  const { session } = useNavbar();
  return (
    <header className="lg:max-w-[1280px] mx-auto w-full py-5 px-4 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="text-xs lg:text-sm">TM</div>
        <div className="text-xs lg:text-sm">
          {session ? (
            <div className="">Logout</div>
          ) : (
            <div className="">Login</div>
          )}
        </div>
      </div>
    </header>
  );
};
