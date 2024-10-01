import airbnb_logo from "../assets/images/transparent-airbnb-logo.png";
import avater from "../assets/images/avater.jpg";

import { TbWorld } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
          </div>
          <a className="btn btn-ghost">
            <img src={airbnb_logo} alt="" className="h-16" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg font-semibold">Stays</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <a className="font-semibold btn-ghost btn rounded-full text-[16px]">Airbnb your home</a>
          <TbWorld size={20} />
          <div className="flex gap-2 items-center px-2 py-1 border rounded-full">
            <GiHamburgerMenu size={18} />
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={avater} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
