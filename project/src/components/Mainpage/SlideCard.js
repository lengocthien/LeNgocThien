import React from "react"
// import Sdata from "./Sdata"
import Slider from "react-slick"
import { Link } from "react-router-dom";
import sliderservice from "../../services/SliderServies"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react";
import { urlImage } from "../../config";


// const SlideCard = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     appendDots: (dots) => {
//       return <ul style={{ margin: "0px" }}>{dots}</ul>
//     },
//   }
//   return (
//     <>
//       <Slider {...settings}>
//         {Sdata.map((value, index) => {
//           return (
//             <>
//               <div className='box d_flex top' key={index}>
//                 <div className='left'>
//                   <h1>{value.title}</h1>
//                   <p>{value.desc}</p>
//                   <button className='btn-primary'>Visit Collections</button>
//                 </div>
//                 <div className='right'>
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

// export default SlideCard
function SliderCard(props) {
  const settings = {
         dots: true,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         appendDots: (dots) => {
           return <ul style={{ margin: "0px" }}>{dots}</ul>
         },
        }
  const [statusdel]=useState(0);
  const [sliders,setSlider]=useState([]);
  useEffect(function(){
      (async function(){
          await sliderservice.getAll().then(function(result){
              setSlider(result.data.sliders)
          })
      })();
  },[]);
  return ( 
    <>
       <Slider {...settings}>
         {sliders.map((value, index) => {
           return (
             <>
             {}
               <div className='box d_flex top' key={index}>
                 <div className='left'>
                   <h1>{value.name}</h1>
                   <p>{value.description}</p>
                   <button className='btn-primary'>Visit Collections</button>
                 </div>
                 {/* <div className='right'>
                   <img src={value.image} alt='' />
                 </div> */}
                 <img
                  className="img-fluid"
                  src={urlImage + "slider/" + value.image}
                  alt="lt4.png"/>

               </div>
             </>
           )
         })}
      </Slider>
     </>
    
    );
}

export default SliderCard;
