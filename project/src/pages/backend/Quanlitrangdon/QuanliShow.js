import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../../services/MenuServies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


function QuanliShow() {
    const {id}=useParams("id");
    const navigate = useNavigate(); // chuyen trang

    const [menu,setMenu]=useState([]);
    useEffect(function(){
        (async function(){
            await menuservice.getById(id).then(function(result){
                setMenu(result.data.menu);
            })
        })();
    },[]);

    function menuDelete(id){
        menuservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/menu',{replace:true});
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT MENU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/" + menu.id}><FontAwesomeIcon icon={faEdit} />Sửa</Link>
                        <button onClick={()=>menuDelete(menu.id)} className="btn btn-sm btn-danger me-1"><FontAwesomeIcon icon={faTrash} />Xóa</button>
                        <Link to="/admin/menu" className="btn btn-sm btn-info"><FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{menu.id}</td>
                        </tr>
                        <tr>
                            <th>Tên menu</th>
                            <td>{menu.name}</td>
                        </tr>
                        <tr>
                            <th>Link</th>
                            <td>{menu.link}</td>
                        </tr>
                        <tr>
                            <th>Vị trí</th>
                            <td>{menu.position}</td>
                        </tr>
                        <tr>
                            <th>Cấp bậc</th>
                            <td>{menu.level}</td>
                        </tr>
                        <tr>
                            <th>Table Id</th>
                            <td>{menu.table_id}</td>
                        </tr>
                        <tr>
                            <th>Type</th>
                            <td>{menu.type}</td>
                        </tr>
                        <tr>
                            <th>Sắp xếp</th>
                            <td>{menu.sort_order}</td>
                        </tr>
                        <tr>
                            <th>Parent Id</th>
                            <td>{menu.parent_id}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{menu.status}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{menu.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default QuanliShow;