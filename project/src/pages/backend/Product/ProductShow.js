import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../services/ProductServies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { urlImage } from "../../../config";

function ProductShow() {
    const {id}= useParams("id");
    const navigate = useNavigate(); // chuyen trang

    const [product,setProduct]=useState([]);
    useEffect(function(){
        (async function(){
            await productservice.getById(id).then(function(result){
                setProduct(result.data.product)
            })
        })()
    },[]);

    // const[products,setProducts]=useState([]);
    // useEffect(function(){
    //     (async function(){
    //         await productservice.getAll().then(function(result)
    //         {
    //             setProduct(result.data.products)
    //         });
    //     })();
    // },[])    

    //xoa
    function productDelete(id){
        productservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/product',{replace:true});
        })
    }

    return ( 
        <div className="card">
        <div className="card-header">
            <div className="row">
                <div className="col-6">
                    <strong className="text-primary">CHI TIẾT SẢN PHẨM</strong>
                </div>
                <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/product/update/"+product.id}><FontAwesomeIcon icon={faEdit} />Sửa</Link>
                    <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger me-1"><FontAwesomeIcon icon={faTrash} />Xóa</button>
                    <Link to="/admin/product" className="btn btn-sm btn-info"><FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                </div>
            </div>
        </div>
        <div className="card-body">
            <table className="table table-border ">
                <thead>
                    <tr>
                        <th style={{width:200}}>Tên trường</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <td>{product.id}</td>
                    </tr>
                    <tr>
                        <th>Tên sản phẩm</th>
                        <td>{product.name}</td>
                    </tr>
                    <tr>
                        <th>Danh mục cha</th>
                        <td>{product.category_id}</td>
                    </tr>
                    <tr>
                        <th>Thương hiệu</th>
                        <td>{product.brand_id}</td>
                    </tr>
                    <tr>
                        <th>Slug</th>
                        <td>{product.slug}</td>
                    </tr>
                    <tr>
                        <th>Hình</th>
                        <td>
                            <img src={urlImage+'product/'+product.image} alt="hình" className="img-fluid" style={{maxWidth:200}} />
                        </td>
                    </tr>
                    <tr>
                        <th>Giá</th>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <th>Giá Sale</th>
                        <td>{product.price_sale}</td>
                    </tr>
                    <tr>
                        <th>Số lượng</th>
                        <td>{product.qty}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{product.status}</td>
                    </tr>
                    <tr>
                        <th>Chi tiết sản phẩm</th>
                        <td>{product.detail}</td>
                    </tr>
                    <tr>
                        <th>Từ khóa</th>
                        <td>{product.metakey}</td>
                    </tr>
                    <tr>
                        <th>Mô tả</th>
                        <td>{product.metadesc}</td>
                    </tr>
                    <tr>
                        <th>Ngày thêm</th>
                        <td>{product.created_at}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

        );
}

export default ProductShow;