import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { urlImage } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


function ProductItems(props) {
  return (
    <div className="pro">
      <Link to={"/details-product/" + props.product.slug}>
        <img
          className="img-fluid"
          src={urlImage + "product/" + props.product.image}
          alt="hing.png"
        /></Link>
      <div className="des">
        <span>    {props.product.name}</span>
        <h5>   <Link to={"/details-product/" + props.product.slug}>{props.product.detail}</Link></h5>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>

        </div>
        <h4>{props.product.price} vnđ</h4>
      </div>
      <div className="cart">
        <a href="#"><FontAwesomeIcon icon={faCartPlus} className="cart-icon" /></a>

      </div>                </div>

    //   <div className="col-md-4 mb-3">
    //   <div className="product-item border">
    //     <div className="product-image">
    //       <Link to={"/detail-product/"+props.product.slug}>
    //       <img
    //         className="img-fluid"
    //         src={urlImage + "product/" + props.product.image}
    //         alt="hing.png"
    //       /></Link>
    //     </div>
    //     <div className="product-name p-2">
    //       <h3 className="text-center-fs-6">
    //       <Link to={"/detail-product/"+props.product.slug}>
    //         {props.product.name}
    //         </Link>
    //         </h3>
    //     </div>
    //     <div className="product-price p-1">
    //       <div className="row">
    //         <div className="col-6 ">
    //           <strong className="text-danger fs-5 border">
    //             Sale:{props.product.price_sale}
    //             <sup>đ</sup>
    //           </strong>
    //         </div>
    //         <div className="col-6">
    //           <del className="fs-7">
    //             Price:{props.product.price}
    //             <sup>đ</sup>
    //           </del>
    //         </div>
    //         <div className="detailproduct">
    //           <br></br>
    //           <p>
    //             <Link>Chi tiết sản phẩm</Link>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductItems;
