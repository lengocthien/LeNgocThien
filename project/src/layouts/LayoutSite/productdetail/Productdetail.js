import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productservice from "../../../services/ProductServies";
import { urlImage } from "../../../config";
import ProductMiniItems from "./ProductMiniItems";
import "./style.css"

function Productdetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [product_other, setProductOther] = useState([]);

  useEffect(() => {
    productservice.getProductBySlug(slug).then((result) => {
      if (result.data.success === true) {
        setProduct(result.data.product);
        setProductOther(result.data.product_other);
      }
    });
  }, [slug]);

  useEffect(() => {
    const changeMainImage = (index) => {
      const smallImg = document.getElementsByClassName("small-img");
      document.getElementById("MainImg").src = smallImg[index].src;
    };

    const smallImgElements = document.getElementsByClassName("small-img");
    for (let i = 0; i < smallImgElements.length; i++) {
      smallImgElements[i].addEventListener("click", () => {
        changeMainImage(i);
      });
    }
  }, []);

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img
            className="img-fluid"
            src={urlImage + "product/" + product.image}
            id="MainImg"
            alt=""
          />
          <div className="small-img-ground m-2">
            {product_other.map((product, index) => (
              <ProductMiniItems key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="single-pro-details">
          <h6>CHI TIẾT SẢN PHẨM</h6>
          <h4>{product.name}</h4>
          <h2>{product.price} $</h2>
          <select>
            <option value="">Chọn kích thước</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Thêm vào giỏ hàng</button>
          <h4>Chi tiết sản phẩm</h4>
          <span>
            {/* Hàng đẹp mặc thoáng mát. 100% vải cotton co giãn 2 chiều. Mặc mùa xuân
            hè hay bất cứ mùa nào đều đem lại sự thoải mái. Vẻ đẹp của chiếc áo
            khiến cho người bên cạnh bạn cảm thấy bị choáng ngợp. Bởi sức hút của
            người mặc và chiếc áo còn trần chừ gì nữa? Mại zô mại zô! */}
            <h2>{product.detail}</h2>
          </span>
        </div>
      </section>
    </>
  );
}

export default  Productdetail
  ;
