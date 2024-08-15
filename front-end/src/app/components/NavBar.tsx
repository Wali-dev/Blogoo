
import Link from "next/link";
import { PiNotePencilBold } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className="min-h-[60px] px-4 navbar flex justify-between w-auto">

      {/* Left Section: Logo and Search Bar */}
      <div>
        <div className="flex-1 gap-x-9">
          {/* Logo Link */}
          <Link href={"/"} className="btn btn-ghost text-2xl">
            Blogoo
          </Link>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="ml-2 input input-sm input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      {/* Right Section: Buttons and Avatar */}
      <div className="gap-x-4">
        {/* Write Button - Visible on sm screens and up */}
        <div className="hidden sm:block">
          <button className="btn">
            <Link href={"/post"} className="flex gap-x-1">
              <PiNotePencilBold />
              Write
            </Link>
          </button>
        </div>

        {/* Sign In Button - Visible on sm screens and up */}
        <div className="hidden sm:block">
          <button className="btn btn-sm btn-ghost">
            <Link href={"/signin"}>Sign In</Link>
          </button>
        </div>

        {/* Sign Up Button - Visible on sm screens and up */}
        <div className="hidden sm:block">
          <button className="btn btn-sm btn-outline btn-orange-400">
            <Link href={"/signup"}>Sign Up</Link>
          </button>
        </div>

        {/* User Avatar Button */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {/* Placeholder Avatar Image */}
            <img
              alt="User Avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;



