// import React from "react"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import Tdata from "./Tdata"

// const TopCart = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//   }
//   return (
//     <>
//       <Slider {...settings}>
//         {Tdata.map((value, index) => {
//           return (
//             <>
//               <div className='box product' key={index}>
//                 <div className='nametop d_flex'>
//                   <span className='tleft'>{value.para}</span>
//                   <span className='tright'>{value.desc}</span>
//                 </div>
//                 <div className='img'>
//                   <img src={value.cover} alt='' />
//                 </div>
//               </div>
//             </>
//           )
//         })}
//       </Slider>
//     </>
//   )
// }

// export default TopCart

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import categoryservice from "../../services/CategoryServies"
import { useEffect, useState } from "react";
import { urlImage } from "../../config";

function Categories() {
  // const Categories = () => {
    const settings = {
     dots: false,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
     }
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
  
          // <>
          //    <div className='category'>
          //      {categorys.map((value, index) => {
          //        return (
          //          <div className='box f_flex' key={index}>
          //            {/* <img src={value.image} alt='' /> */}

          //            <img
          //         className="img-fluid"
          //         src={urlImage + "category/" + value.image}
          //         />


          //            <span>{value.name}</span>
          //          </div>
          //        )
          //      })}
          //    </div>
          //  </>
          <Slider {...settings}>
        {categorys.map((value, index) => {
          return (
             <>
               <div className='box product' key={index}>
                 <div className='nametop d_flex'>
                   <span className='tleft'>{value.name}</span>
                   <span className='tright'>{value.desc}</span>
                 </div>
                 <img
                   className="img-fluid"
                   src={urlImage + "category/" + value.image}
                   />
                 {/* <div className='img'>
                   <img src={value.cover} alt='' />
                 </div> */}
               </div>
             </>
           )
         })}
       </Slider>
         
  );
}


export default Categories;
