import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

// import Link
// import
const Navbar = () => {
  const links = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about", sublink: "/about/link" },
    { label: "Contact", url: "/contact" },
  ];

  const buttons = [
    {
      label: "Login",
      url: "/login",
      border: "border",
      hover: "hover:bg-black",
      hovert: "hover:text-white",
    },
    {
      label: "Signup",
      url: "/signup",
      bag: "bg-slate-950",
      hover: "border",
      hovert: "hover:text-white",
      text: "text-white",
    },
  ];

  return (
    <>
      {/* <div className="container mx-auto mt-2">
                <div className="navbar flex items-center justify-between">
                    <div className="nav-logo">
                        <h3 className="font-bold text-3xl ">Blog</h3>
                    </div>
                    <div className="md:hidden block">
                        <FaBars className="text-2xl text-gray-600" />
                        <FaTimes className="text-2xl text-gray-600" />
                    </div>
                    <div className="nav-links md:flex hidden gap-2">
                        {
                            links.map((link,index) =>(
                                
                                    <Link className="font-semibold text-md" key={index} to={link.url}>{link.label}</Link>
                                
                                
                            ))
                        }
                    </div>
                    <div className="btns md:flex hidden gap-3">
                        {
                            buttons.map(({bag,label,hover,hovert,border,text,url},index) =>(
                                <button key={index} className={`text-white py-2 px-4 rounded-md ${bg}}`></button>
                                <Link to={url} key={index}>
                                <button  className={`px-3 py-2 rounded-md border font-bold ${bag} ${hover} ${border} ${hovert} ${text}`}>{label}</button>

                                </Link>
                            
                            ))
                        }
                        { <button className="bg-black hover:bg-slate-950 text-white font-bold py-2 rounded-md px-3 ">Login</button>

                        <button className="bg-black hover:bg-slate-950 text-white font-bold py-2 rounded-md px-3 ">sign Up</button> }

                    </div>
                </div>
            </div> */}

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
