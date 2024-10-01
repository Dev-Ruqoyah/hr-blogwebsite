import React from "react";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
const HeroPage = () => {
    return ( 
        <>
            <div className="container mx-auto">
                <Navbar/>
                <HeroSection/>
            </div>
        </>
     );
}
 
export default HeroPage;