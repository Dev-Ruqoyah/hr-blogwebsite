import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false)
  const handleToggle = () =>{
    setIsOpen(!isOpen)
    console.log("clicked");
    
  }
 

  return (
    <>
      

      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <button  onClick={handleToggle}  className="btn btn-ghost lg:hidden">
              <FaBars />
            </button>
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
        <div className={ `navbar-center  ${isOpen? "flex flex-col":"hidden"}  lg:flex `}>
          <ul className={`menu ${isOpen? "menu-vertical":"menu-horizontal"}  px-1`}>
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
