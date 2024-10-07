import React from "react";
import Navbar from "../Component/Navbar";
import HeroSection from "../Component/HeroSection";
import Blog from "../Component/Blog";
import LoadingMore from "../Component/More";
import Footer from "../Component/Footer";
const HeroPage = () => {
    return ( 
        <>
            <div className="">
                <Navbar/>
                <HeroSection/>
                <Blog/>
                <LoadingMore/>
                <Footer/>
            </div>
        </>
     );
}
 
export default HeroPage;