// import React from "react"

// const Categories = () => {
//   const data = [
//     {
//       cateImg: "./images/category/cat5.png",
//       cateName: "Nhẫn cưới",
//     },
//     {
//       cateImg: "./images/category/cat5.png",
//       cateName: "Lắc tay",
//     },
//     {
//       cateImg: "./images/category/cat5.png",
//       cateName: "Bông tai",
//     },
//     {
//       cateImg: "./images/category/cat5.png",
//       cateName: "Vòng tay",
//     },
//     {
//       cateImg: "./images/category/cat5.png",
//       cateName: "Dây chuyền",
//     },
    
//   ]

//   return (
//     <>
//       <div className='category'>
//         {data.map((value, index) => {
//           return (
//             <div className='box f_flex' key={index}>
//               <img src={value.cateImg} alt='' />
//               <span>{value.cateName}</span>
//             </div>
//           )
//         })}
//       </div>
//     </>
//   )
// }

// export default Categories


import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import categoryservice from "../../services/CategoryServies"
import { useEffect, useState } from "react";
import { urlImage } from "../../config";

function Categories() {
  const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            try {
                const result = await categoryservice.getAll();
                setCategorys(result.data.categorys)
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
               {categorys.map((value, index) => {
                 return (
                   <div className='box f_flex' key={index}>
                     {/* <img src={value.image} alt='' /> */}

                     <img
                  className="img-fluid"
                  src={urlImage + "category/" + value.image}
                  />


                     <span>{value.name}</span>
                   </div>
                 )
               })}
             </div>
           </>
         
  );
}

export default Categories;

