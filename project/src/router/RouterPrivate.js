import DashBoard from "../pages/backend/Bashboard/index";
import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandList from "../pages/backend/Brand/BrandList";
import BrandShow from "../pages/backend/Brand/BrandShow";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";


import PostCreate from "../pages/backend/Post/PostCreate";
import PostList from "../pages/backend/Post/PostList";
import PostShow from "../pages/backend/Post/PostShow";
import PostUpdate from "../pages/backend/Post/PostUpdate";


import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryShow from "../pages/backend/Category/CategoryShow";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";


import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductList from "../pages/backend/Product/ProductList";
import ProductShow from "../pages/backend/Product/ProductShow";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";


import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuList from "../pages/backend/Menu/MenuList";
import MenuShow from "../pages/backend/Menu/MenuShow";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";



import QuanliCreate from "../pages/backend/Quanlitrangdon/QuanliCreate";
import QuanliList from "../pages/backend/Quanlitrangdon/QuanliList";
import QuanliShow from "../pages/backend/Quanlitrangdon/QuanliShow";
import QuanliUpdate from "../pages/backend/Quanlitrangdon/QuanliUpdate";











import ContactCreate from "../pages/backend/Contact/ContactCreate";
import ContactList from "../pages/backend/Contact/ContactList";
import ContactShow from "../pages/backend/Contact/ContactShow";
import ContactUpdate from "../pages/backend/Contact/ContactUpdate";

import OrderCreate from "../pages/backend/Order/OrderCreate";
import OrderList from "../pages/backend/Order/OrderList";
import OrderShow from "../pages/backend/Order/OrderShow";
import OrderUpdate from "../pages/backend/Order/OrderUpdate";


import SliderCreate from "../pages/backend/Slider/SliderCreate";
import SliderList from "../pages/backend/Slider/SliderList";
import SliderShow from "../pages/backend/Slider/SliderShow";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";

import TopicCreate from "../pages/backend/Topic/TopicCreate";
import TopicList from "../pages/backend/Topic/TopicList";
import TopicShow from "../pages/backend/Topic/TopicShow";
import TopicUpdate from "../pages/backend/Topic/TopicUpdate";

import UserCreate from "../pages/backend/User/UserCreate";
import UserList from "../pages/backend/User/UserList";
import UserShow from "../pages/backend/User/UserShow";
import UserUpdate from "../pages/backend/User/UserUpdate";

import MemberCreate from "../pages/backend/Member/MemberCreate";
import MemberList from "../pages/backend/Member/MemberList";
import MemberShow from "../pages/backend/Member/MemberShow";
import MemberUpdate from "../pages/backend/Member/MemberUpdate";

const RouterPrivate = [
    { path: "/admin", component: DashBoard },
    { path: "/admin/brand", component: BrandList },
    { path: "/admin/brand/create", component: BrandCreate },
    { path: "/admin/brand/update/:id", component: BrandUpdate },
    { path: "/admin/brand/show/:id", component: BrandShow },

    { path: "/admin/category", component:CategoryList },
    { path: "/admin/category/create", component: CategoryCreate },
    { path: "/admin/category/show/:id", component: CategoryShow},
    { path: "/admin/category/update/:id", component: CategoryUpdate},

    { path: "/admin/product", component:ProductList },
    { path: "/admin/product/create", component:ProductCreate },
    { path: "/admin/product/update/:id", component:ProductUpdate },
    { path: "/admin/product/show/:id", component:ProductShow},

    { path: "/admin/menu", component:MenuList },
    { path: "/admin/menu/create", component:MenuCreate },
    { path: "/admin/menu/show/:id", component:MenuShow },
    { path: "/admin/menu/update/:id", component:MenuUpdate},

    { path: "/admin/contact", component:ContactList },
    { path: "/admin/contact/create", component:ContactCreate },
    { path: "/admin/contact/show/:id", component:ContactShow },
    { path: "/admin/contact/update/:id", component:ContactUpdate},

    { path: "/admin/order", component:OrderList },
    { path: "/admin/order/create", component:OrderCreate },
    { path: "/admin/order/show/:id", component:OrderShow },
    { path: "/admin/order/update/:id", component:OrderUpdate},

    { path: "/admin/slider", component:SliderList },
    { path: "/admin/slider/create", component:SliderCreate },
    { path: "/admin/slider/show/:id", component:SliderShow },
    { path: "/admin/slider/update/:id", component:SliderUpdate},

    { path: "/admin/topic", component:TopicList },
    { path: "/admin/topic/create", component:TopicCreate },
    { path: "/admin/topic/show/:id", component:TopicShow },
    { path: "/admin/topic/update/:id", component:TopicUpdate},

    { path: "/admin/user", component:UserList },
    { path: "/admin/user/create", component:UserCreate },
    { path: "/admin/user/show/:id", component:UserShow },
    { path: "/admin/user/update/:id", component:UserUpdate},

    { path: "/admin/member", component:MemberList },
    { path: "/admin/member/create", component:MemberCreate },
    { path: "/admin/member/show/:id", component:MemberShow },
    { path: "/admin/member/update/:id", component:MemberUpdate},

    { path: "/admin/post", component:PostList },
    { path: "/admin/post/create", component:PostCreate },
    { path: "/admin/post/show/:id", component:PostShow },
    { path: "/admin/post/update/:id", component:PostUpdate},

    { path: "/admin/quan-li-trang-don", component:QuanliList },
    { path: "/admin/quan-li-trang-don/create", component:QuanliCreate },
    { path: "/admin/quan-li-trang-don/show/:id", component:QuanliShow },
    { path: "/admin/quan-li-trang-don/update/:id", component:QuanliUpdate},



];
export default RouterPrivate;
