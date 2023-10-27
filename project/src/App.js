// import React, { useState } from "react"
// import "./App.css"
// import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
// import Pages from "./pages/Pages"
// import Data from "./components/Data"
// import Cart from "./layouts/LayoutSite/Cart/Cart"
// import Login from "./layouts/login/Login"
// import Sdata from "./components/shops/Sdata"
// import Register from "./layouts/LayoutSite/register/Register"
// import Contact from"./layouts/LayoutSite/contact/Contact"
// import Product from"./common/product/Product"
// import Profile  from "./layouts/LayoutSite/Profile/Profile_Setting"
// import Productdetail  from "./common/productdetail/Productdetail"
// import Post  from "./common/post/Post"
// import Policy from "./layouts/LayoutSite/policy/Policy"
// import Header from "./layouts/LayoutSite/header/Header"
// import Footer from "./layouts/LayoutSite/footer/Footer"
// import LayoutAdmin from "./layouts/LayoutAdmin"
// import LayoutSite from "./layouts/LayoutSite"


// function App() {

//   //Step 1 :
//   const { productItems } = Data
  
//   const { pro } = Sdata

//   //Step 2 :
//   const [CartItem, setCartItem] = useState([])
//   const [LoginItem,] = useState([])
//   const [RegisterItem,] = useState([])
//   const [ContactItem,] = useState([])
//   const [productItem,] = useState([])
//   const [profileItem,] = useState([])
//   const [productdetail,] = useState([])
//   const [postItem,] = useState([])
//   const [PolicyItem,] = useState([])




//   //Step 4 :
//   const addToCart = (product) => {
//     const productExit = CartItem.find((item) => item.id === product.id)
    
//     if (productExit) {
//       setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
//     } else {
//       setCartItem([...CartItem, { ...product, qty: 1 }])
//     }
//   }

//   // Stpe: 6
//   const decreaseQty = (product) => {
//     const productExit = CartItem.find((item) => item.id === product.id)
//     if (productExit.qty === 1) {
//       setCartItem(CartItem.filter((item) => item.id !== product.id))
//     } else {
//       setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
//     }
//   }

//   return (
//     <>
//       {/* <Router>
//         <Header CartItem={CartItem} />
        
//         <Routes>
          
//           <Route path='/' exact>
//             <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} pro={pro} />} />
//           </Route>
          
//           <Route path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
          
//           <Route path="/login" element={<Login />} />

//           <Route path="/Register" element={<Register RegisterItem={RegisterItem} />} />

//           <Route path="/Contact" element={<Contact ContactItem={ContactItem} />} />
            
//           <Route path="/Product" element={<Product productItem={productItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
          
//           <Route path="/Profile" element={<Profile profileItem={profileItem} />} />
          
//           <Route path="/details-product/:slug" element={<Productdetail Productdetail={Productdetail} />} />
          
//           <Route path="/Blog" element={<Post postItem={postItem} />} />
         
//            <Route path="/Policy" element={<Policy PolicyItem={PolicyItem} />} />

           
//           </Routes>
//         <Footer />
        
//       </Router> */}
      
//       <Route path="/" element={<LayoutSite />}> 
//         {/* router có thẻ đóng và mở là thằng cha thằng con sẻ kế thừa thằng cha :V */}
//           {/* ta xoa crouayter public la mang nen ta chay mang */}
//           {/* {RouterSite.RouterPublic.map(function(router,index){
//                 // return thang duoi th the nen ai cu
//                 const Page=router.component;
//                 return  <Route key={index} path={router.path} element={<Page/>} />
//           })} */}

//         </Route>
//       <Route path="/admin" element={<LayoutAdmin />}> 
//           {/* {RouterSite.RouterPrivate.map(function(router,index){
//                 // return thang duoi thay the nen ta xoa cai cu
//                 const Page=router.component;
//                 return  <Route key={index} path={router.path} element={<Page/>} />
//           })} */}

//         </Route>
//     </>
//   )
// }

// export default App




import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterSite from "./router";
//function component


function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}> 
        {/* router có thẻ đóng và mở là thằng cha thằng con sẻ kế thừa thằng cha :V */}
          {/* ta xoa crouayter public la mang nen ta chay mang */}
          {RouterSite.RouterPublic.map(function(router,index){
                // return thang duoi th the nen ai cu
                const Page=router.component;
                return  <Route key={index} path={router.path} element={<Page/>} />
          })}

        </Route>
        <Route path="/admin" element={<LayoutAdmin />}> 
          {RouterSite.RouterPrivate.map(function(router,index){
                // return thang duoi thay the nen ta xoa cai cu
                const Page=router.component;
                return  <Route key={index} path={router.path} element={<Page/>} />
          })}

        </Route>
      </Routes>
    </BrowserRouter>

  //   <BrowserRouter>
  //    <Routes>
  //      <Route path="/" element={<LayoutSite />}>
  //        {RouterSite.RouterPublic.map(function (route, index) {
  //          const Page = route.component;
  //          return <Route key={index} path={route.path} element={<Page />} />
  //        })}
  //      </Route>
  //      {/*  */}
  //      <Route path="/admin" element={<LayoutAdmin />}>
  //        {RouterSite.RouterPrivate.map(function (route, index) {
  //          const Page = route.component;
  //          return <Route key={index} path={route.path} element={<Page />} />
  //        })}
  //      </Route>
  //    </Routes>
  //  </BrowserRouter>
  );
}

export default App;

