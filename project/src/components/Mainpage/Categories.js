import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Nhẫn cưới",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Lắc tay",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Bông tai",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Vòng tay",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Dây chuyền",
    },
    
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
