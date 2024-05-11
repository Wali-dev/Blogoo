import Link from "next/link"
import { PiNotePencilBold } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className="min-h-[60px] px-4 navbar flex justify-between w-auto">
      <div>
        <div className="flex-1 gap-x-9">
          <Link href={"/"} className="btn btn-ghost text-2xl">Blogoo</Link>
          <input type="text" placeholder="Search" className="ml-2 input input-sm input-bordered w-24 md:w-auto" />
        </div>
      </div>
      <div className="gap-x-4">
        <div className="hidden sm:block">
          <button className="btn"><Link href={"/post"} className="flex gap-x-1"> <PiNotePencilBold />Write</Link></button>
        </div>
        <div className="hidden sm:block">
          <button className="btn btn-sm btn-ghost"><Link href={"/signin"}>Sign In</Link></button>
        </div>
        <div className="hidden sm:block">
          <button className="btn btn-sm btn-outline btn-orange-400"><Link href={"/signup"}>Sign Up</Link></button>
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default NavBar