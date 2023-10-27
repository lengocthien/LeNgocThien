
import Pages from "../pages/Pages"
import Cart from "../layouts/LayoutSite/Cart/Cart"
import Footer from "../layouts/LayoutSite/footer/Footer"
import Header from "../layouts/LayoutSite/header/Header"
import Productdetail from "../layouts/LayoutSite/productdetail/Productdetail"
import Contact from"../layouts/LayoutSite/contact/Contact"
import Product from"../layouts/LayoutSite/product/Product"
import Register from "../layouts/LayoutSite/register/Register"
import Profile_Address from "../common/Profile/Profile_Address"
import Blog from "../layouts/LayoutSite/post/Post"
import Policy from "../layouts/LayoutSite/policy/Policy"
import Login from "../layouts/LayoutSite/login/Login"
import Search from "../common/Search_Product/index"





const RouterPublic = [

    

    {path:'/',component:Pages},  
    {path:'/cart',component:Cart},
    {path:'/Login',component:Login},
    {path:'/Footer',component:Footer},    
    {path:'/Register',component:Register},
    {path:'/Contact',component:Contact},
    {path:'/Product',component:Product},
    {path:'/Profile',component:Profile_Address},
    {path:'/details-product/:slug',component:Productdetail},
    {path:'/Post',component:Blog},
    {path:'/Policy',component:Policy},
    {path:'/search_product/:key',component:Search},

    

   

];
export default RouterPublic;