

// import React, { useState } from "react"

// const Product = ({ shopItems, addToCart }) => {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }

//   return (
//     <>
//       {shopItems.map((shopItems, index) => {
//         return (
//           <div className='box'>
//             <div className='product mtop'>
//               <div className='img'>
//                 <span className='discount'>{shopItems.discount}% Off</span>
//                 <img src={shopItems.cover} alt='' />
//                 <div className='product-like'>
//                   <label>{count}</label> <br />
//                   <i className='fa-regular fa-heart' onClick={increment}></i>
//                 </div>
//               </div>
//               <div className='product-details'>
//                 <h3>{shopItems.name}</h3>
//                 <div className='rate'>
//                   <i className='fa fa-star'></i>
//                   <i className='fa fa-star'></i>
//                   <i className='fa fa-star'></i>
//                   <i className='fa fa-star'></i>
//                   <i className='fa fa-star'></i>
//                 </div>
//                 <div className='price'>
//                   <h4>${shopItems.price}.00 </h4>
//                   {/* step : 3  
//                      if hami le button ma click garryo bahne 
//                     */}
//                   <button onClick={() => addToCart(shopItems)}>
//                     <i className='fa fa-plus'></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default Product
// import React from 'react'
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../services/ProductServies";
import { urlImage } from "../../../config";

function Product() {
  const { id } = useParams();
  // const navigate = useNavigate(); // chuyen trang
  const Product = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    // const Product = ({ shopItems, addToCart }) => {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count + 1)
//   }
    const [limit, setLimit] = useState(50);
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
        {products.map((pro, index) => {
          return (
            <>
            <div className='box' key={index}>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{pro.price_sale}% Off</span>
                  <Link to={"/details-product/" + pro.slug}>
                  <img
                    className='img-fluid'
                    src={urlImage + "product/" + pro.image}
                    alt='lt4.png'
                  />
                  </Link>
                  {/* <img src={shopItems.cover} alt='' /> */}
                  
                  <div className='product-like'>
                     <label>{count}</label> 
                     <i className='fa-regular fa-heart' onClick={increment}></i>
                   </div>
                </div>

                <div className='product-details'>
                <Link to={"/details-product/" + pro.slug}><h3>{pro.name}</h3></Link>
                  <div className='rate'>
                     <i className='fa fa-star'></i>
                     <i className='fa fa-star'></i>
                     <i className='fa fa-star'></i>
                     <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                   </div>
                  <div className='price'>
                    <h4>${pro.price}.00 </h4>
                    {/* step : 3  
                        if hami le button ma click garryo bahne 
                       */}
                    <button onClick={() => addToCart(shopItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                  <div className='detail' >
                  <h3>{pro.detail}</h3>
                  </div>
                </div>
              </div>
            </div>
            </>
          );
        })}
      </>
    );
  };

  return <Product />;
}

export default Product;
