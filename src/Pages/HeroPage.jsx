import React from "react";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import Blog from "../Component/Blog";
const HeroPage = () => {
    return ( 
        <>
            <div className="">
                <Navbar/>
                <HeroSection/>
                <Blog/>
            </div>
        </>
     );
}
 
export default HeroPage;