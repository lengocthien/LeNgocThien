
// import React, { useState } from "react"

// const ShopCart = ({ shopItems, addToCart }) => {
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

// export default ShopCart
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productservice from "../../services/ProductServies";
import { urlImage } from "../../config";

function ShopCart() {
  const { id } = useParams();
  // const navigate = useNavigate(); // chuyen trang
  const RenderShopItems = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    const [limit, setLimit] = useState(9);
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
                  <img
                    className='img-fluid'
                    src={urlImage + "product/" + pro.image}
                    alt='lt4.png'
                  />
                  {/* <img src={shopItems.cover} alt='' /> */}
                  {/* <div className='product-like'>
                     <label>{count}</label> <br />
                     <i className='fa-regular fa-heart' onClick={increment}></i>
                   </div> */}
                </div>
                <div className='product-details'>
                  <h3>{pro.name}</h3>
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
                </div>
              </div>
            </div>
            </>
          );
        })}
      </>
    );
  };

  return <RenderShopItems />;
}

export default ShopCart;
