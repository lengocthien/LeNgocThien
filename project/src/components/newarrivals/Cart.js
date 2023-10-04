// import React from "react"
// import Ndata from "./Ndata"

// const Cart = () => {
//   return (
//     <>
//       <div className='content grid product'>
//         {Ndata.map((val, index) => {
//           return (
//             <div className='box' key={index}>
//               <div className='img'>
//                 <img src={val.cover} alt='' />
//               </div>
//               <h4>{val.name}</h4>
//               <span>${val.price}</span>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Cart

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productservice from "../../services/ProductServies";
import { urlImage } from "../../config";

function Cart() {
  const { id } = useParams();
  // const navigate = useNavigate(); // chuyen trang
  const RenderShopItems = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const [limit, setLimit] = useState(6);
    const [products, setProducts] = useState([]);

    // useEffect(function () {
    //   (function () {
    //     productservice.getProductAll(limit).then(function (result) {
    //       setProducts(result.data.products);
    //     });
    //   })();
    // }, [limit]);

    useEffect(function () {
      (async function () {
          try {
              const result = await productservice.getProductAll(limit);
              setProducts(result.data.products);
          }
          catch (error) {
              console.error(error);
          }

      })();
  }, [limit]);

    return (
      <>
       <div className='content grid product'>
         {products.map((val, index) => {
           return (
             <div className='box' key={index}>
               <div className='img'>
               <img
                  className="img-fluid"
                  src={urlImage + "product/" + val.image}
                  />
                 {/* <img src={val.cover} alt='' /> */}
               </div>
               <h4>{val.name}</h4>
               <span>${val.price}</span>
             </div>
           )
         })}
       </div>
     </>
    );
  };

  return <RenderShopItems />;
}

export default Cart;

