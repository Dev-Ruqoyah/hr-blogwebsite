import React from "react";
// import Link
// import 
const Navbar = () => {
    const links = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" }
        ];
    
    return ( 
        <>
            <div className="container mx-auto">
                <div className="navbar flex items-center">
                    <div className="nav-logo">
                        <h3 className="font-bold text-3xl ">Blog</h3>
                    </div>
                    <div className="nav-links flex">
                        {
                            links.map((link,index) =>(
                                
                                    <a className="font-semibold text-md" key={index} href={link.url}>{link.label}</a>
                                
                                
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;