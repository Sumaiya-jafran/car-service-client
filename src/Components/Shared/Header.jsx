import React from "react";
import { NavLink } from "react-router";
const Header = () => {
  const navItems = (
    <>
      <nav className=" flex gap-8">
        <NavLink
          className="text-md font-bold px-3 py-1 rounded-md  hover:bg-violet-600 active:bg-violet-700"
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className="text-md font-bold px-3 py-1 rounded-md  hover:bg-violet-600 active:bg-violet-700"
          to="/signin"
          end
        >
          Sign In
        </NavLink>
        <NavLink
          className="text-md font-bold px-3 py-1 rounded-md  hover:bg-violet-600 active:bg-violet-700"
          to="/signup"
        >
          SignUp
        </NavLink>
      </nav>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal   px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-success">Book Apponintment</button>
        
      </div>
    </div>
  );
};

export default Header;
