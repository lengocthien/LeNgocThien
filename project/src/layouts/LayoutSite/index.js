import React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Pages from "../../pages/Pages";
import { Outlet } from "react-router-dom";

function LayoutSite() {
    return ( 
      <>
      
         <div >
      <div className="overlay" data-overlay></div> 
      <Header />
      <Outlet/>
      <Footer />
     </div> 
    </>
     );
}
export default LayoutSite;
