import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import productservice from "../../../services/ProductServies";
import { urlImage } from "../../../config";

function ProductList() {
    const[products,setProduct]=useState([]);
    const [statusdel,setStatusDel]=useState(0);

    useEffect(function(){
        (async function(){
            await productservice.getAll().then(function(result)
            {
                setProduct(result.data.products)
            });
        })();
    },[statusdel]);

    //xoa
    function productDelete(id){
        productservice.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        });
    };

    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TẤT CẢ SẢN PHẨM</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/product/create"className="btn btn-sm btn-success"><FontAwesomeIcon icon={faPlusSquare} />Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"30"}} className="text-center">#</th>
                            <th style={{width:"130"}} className="text-center">Hình</th>
                            <th className="text-center">Tên sản phẩm</th>
                            <th className="text-center">Giá</th>
                            <th className="text-center">Slug</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function(product,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">
                                    <img style={{width:"120px",height:"120px"}} className="img-fluid" src={urlImage+'product/'+product.image} alt="hing.png"/>
                                </td>
                                <td className="text-center">{product.name}</td>
                                <td className="text-center">{product.price}</td>
                                <td className="text-center">{product.name}</td>
                                <td className="text-center">2{product.created_at}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={`/admin/product/show/${product.id}`}><FontAwesomeIcon icon={faEye} /></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={`/admin/product/update/${product.id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                                    <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                                <td className="text-center">{product.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default ProductList;