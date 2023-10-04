// import React from "react"

// const Catg = () => {
//   const data = [
//     {
//       cateImg: "./images/category/cat-1.png",
//       cateName: "Katjewelry",
//     },
//     {
//       cateImg: "./images/category/cat-2.png",
//       cateName: "Glosbe Jewelry",
//     },
//     {
//       cateImg: "./images/category/cat-1.png",
//       cateName: "Bea Bongiasca",
//     },
//     {
//       cateImg: "./images/category/cat-2.png",
//       cateName: "Mejuri",
//     },
//     {
//       cateImg: "./images/category/cat-1.png",
//       cateName: "Khiry",
//     },
//     {
//       cateImg: "./images/category/cat-2.png",
//       cateName: "Almasika",
//     },
//   ]
//   return (
//     <>
//       <div className='category'>
//         <div className='chead d_flex'>
//           <h1>Brands </h1>
//           <h1>Shops </h1>
//         </div>
//         {data.map((value, index) => {
//           return (
//             <div className='box f_flex' key={index}>
//               <img src={value.cateImg} alt='' />
//               <span>{value.cateName}</span>
//             </div>
//           )
//         })}
//         <div className='box box2'>
//           <button>View All Brands</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Catg
import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import BrandServies from "../../services/BrandServies"
import React, { useEffect, useState } from "react";
import { urlImage } from "../../config";



function Catg() {
  const [brand, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await BrandServies.getAll();
                setBrand(result.data.brands)
            }
            catch (error) {
                console.error(error);
            }

        })();
    }, []);

  // categoryservice.getById(id);
  return (
  
    <>
           <div className='category'>
             <div className='chead d_flex'>
               <h1>Brands </h1>
               <h1>Shops </h1>
             </div>
             {brand.map((value, index) => {
               return (
                 <div className='box f_flex' key={index}>

<img
                    className='img-fluid'
                    src={urlImage + "brand/" + value.image}
                  />

                   {/* <img src={value.cateImg} alt='' /> */}
                   <span>{value.name}</span>
                 </div>
               )
             })}
             <div className='box box2'>
               <button>View All Brands</button>
             </div>
           </div>
      </>
  );
}

export default Catg;


