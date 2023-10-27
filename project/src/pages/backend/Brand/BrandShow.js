import { Link, useParams } from "react-router-dom";
import brandservice from "../../../services/BrandServies";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
function BrandShow() {
    const { id } = useParams("id")
    const [brands, setBrand] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getById(id).then(function (result) {
                setBrand(result.data.brands)
            });
        })();
    }, [])
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/brand" className="btn btn-sm btn-info me-1">
                            Về danh sách
                        </Link>
                        <Link className="btn btn-sm btn-success me-1" to={"/admin/brand/create"}>
                        <FontAwesomeIcon icon={faPlusSquare}/>Thêm
                        </Link>
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/" + brands.id}>
                            <FontAwesomeIcon icon={faEdit}/>Sửa
                        </Link>
                        <button className="btn btn-sm btn-danger ">
                         <FontAwesomeIcon icon={faTrash}/>Xoá
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 200 }}>TÊN TRƯỜNG</th>
                                <th>GIÁ TRỊ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <td>{brands.id}</td>
                            </tr>
                            <tr>
                                <th>TÊN DANH MỤC</th>
                                <td>{brands.name}</td>
                            </tr>
                            <tr>
                                <th>SLUG</th>
                                <td>{brands.slug}</td>
                            </tr>
                            <tr>
                                <th>HÌNH ẢNH LOGO THƯƠNG HIỆU</th>
                                <td className="bg-black">
                                    <img src={urlImage + "brand/" + brands.image} alt="hinh" className="img-fluid" style={{ maxWidth: 200 }} />
                                </td>
                            </tr>
                            <tr>
                                <th>MÔ TẢ THƯƠNG HIỆU</th>
                                <td>{brands.metadesc}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}



export default BrandShow; 