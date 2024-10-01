import React from "react";
import { Routes,Route } from "react-router-dom";
import HeroPage from "../Pages/HeroPage";
import Error from "../Pages/Error";
const AppRoutes = () => {
    return ( 
       
       <Routes>
            <Route element={<HeroPage/>} path="/"/>
            <Route element={<Error/>} path="*"/>
       </Routes>
     );
}
 
export default AppRoutes;