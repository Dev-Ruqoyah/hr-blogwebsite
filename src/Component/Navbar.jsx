import React from "react";
import { FaBars } from "react-icons/fa6";
import {Link} from "react-router-dom";


// import Link
// import 
const Navbar = () => {
    const links = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" , sublink: "/about/link" },
        { label: "Contact", url: "/contact" }
        ];
        
        const buttons = [
            { label: "Login", url: "/login", border:"border",hover: 'hover:bg-black',hovert:'hover:text-white' },
            { label: "Signup", url: "/signup", bag:"bg-slate-950",hover:'border',hovert:'hover:text-white', text: "text-white" },

        ]
    
    return ( 
        <>
            <div className="container mx-auto mt-2">
                <div className="navbar flex items-center justify-between">
                    <div className="nav-logo">
                        <h3 className="font-bold text-3xl ">Blog</h3>
                    </div>
                    <div className="md:hidden block">
                        <FaBars className="text-2xl text-gray-600" />
                        {/* <FaTimes className="text-2xl text-gray-600" /> */}
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
                            buttons.map(({bag,label,hover,hovert,border,text},index) =>(
                                // <button key={index} className={`text-white py-2 px-4 rounded-md ${bg}}`></button>
                                <button key={index} className={`px-3 py-2 rounded-md border font-bold ${bag} ${hover} ${border} ${hovert} ${text}`}>{label}</button>
                            
                            ))
                        }
                        {/* <button className="bg-black hover:bg-slate-950 text-white font-bold py-2 rounded-md px-3 ">Login</button>

                        <button className="bg-black hover:bg-slate-950 text-white font-bold py-2 rounded-md px-3 ">sign Up</button> */}

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;