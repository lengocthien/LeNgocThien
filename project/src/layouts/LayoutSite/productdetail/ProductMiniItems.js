import React from "react";
import { urlImage } from "../../../config";


function ProductMiniItems(props) {
  return (
    <div className="small-img-col">
      <img
        className="small-img"
        src={urlImage + "product/" + props.product.image}
        width="100%"
        alt="product-image"
      />
    </div>
  );
}

export default ProductMiniItems;