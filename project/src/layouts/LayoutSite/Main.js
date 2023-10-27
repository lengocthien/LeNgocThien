import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from "../LayoutSite/login/Login";
import Cart from "../LayoutSite/Cart/Cart";
import Contact from "../LayoutSite/contact/Contact";

import Post from "../LayoutSite/post/Post";
import Product from "../LayoutSite/product/Product";
import Pages from "../../pages/Pages";
import Register from "../LayoutSite/register/Register"
import Profile from "../../common/Profile/Profile_Address"
import Productdetail from "../LayoutSite/productdetail/ProductItem"
import Policy from "../LayoutSite/policy/Policy"
const Main = () => (
    <main>
         <Routes>
          
                     <Route path='/' exact>
                       <Route path="/" element={<Pages/>} />
                     </Route>
                    
                     <Route path="/cart" element={<Cart/>} />
                    
                     <Route path="/login" element={<Login />} />
          
                     <Route path="/Register" element={<Register  />} />
          
                     <Route path="/Contact" element={<Contact />} />
                      
                     <Route path="/Product" element={<Product />} />
                    
                     <Route path="/Profile" element={<Profile/>} />
                    
                     <Route path="/details-product/:slug" element={<Productdetail />} />
                    
                     <Route path="/Blog" element={<Post/>} />
                   
                      <Route path="/Policy" element={<Policy />} />
          
                     
                     </Routes>
    </main>


)
export default Main;