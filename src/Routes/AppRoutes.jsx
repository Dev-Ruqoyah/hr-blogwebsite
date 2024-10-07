import React from "react";
import { Routes,Route } from "react-router-dom";
import HeroPage from "../Pages/HeroPage";
import Error from "../Pages/Error";
import Signup  from "../Pages/SignUp";

const AppRoutes = () => {
    return ( 
       
       <Routes>
            <Route element={<HeroPage/>} path="/"/>
            <Route element={<Signup/>} path="/Signup"/>
            <Route element={<Error/>} path="*"/>
       </Routes>
     );
}
 
export default AppRoutes;