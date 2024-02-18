import {
  MagnifyingGlassIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute w-full bg-transparent">
      <div className="navbar mx-auto max-w-6xl bg-transparent">
        {/* Left Side */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <Bars3BottomLeftIcon className="w-8 md:w-10 text-secondary" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <label className="flex cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                  </svg>
                  <input
                    type="checkbox"
                    value="dracula"
                    className="theme-controller toggle"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              </li>
            </ul>
          </div>
        </div>

        {/* Center */}
        <div className="navbar-center">
          <Link
            to={"/"}
            className="btn btn-ghost text-2xl font-bold text-primary md:text-3xl lg:text-4xl"
          >
            NUTRON
          </Link>
        </div>

        {/* Right Side */}
        <div className="navbar-end">
          <button className="btn btn-circle btn-ghost">
            <MagnifyingGlassIcon className="w-6 md:w-8 text-secondary" />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
