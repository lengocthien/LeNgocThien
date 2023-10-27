import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import menuservices from "../../../services/MenuServies";
function QuanliList() {
    const [statusdel, setStatusDel] = useState(0);

    const [menus, setMenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservices.getAll().then(function (result) {
                setMenu(result.data.menus)
            })
        })();
    }, [statusdel])

    // xoa
    function menuDelete(id) {
        menuservices.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDel(result.data.id);
        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">MENU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/menu/create" className="btn btn-sm "style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}><FontAwesomeIcon icon={faPlusSquare} />Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: "20" }} className="text-center">#</th>
                            <th style={{ width: "50" }} className="text-center">Tên</th>
                            <th style={{ width: "100" }} className="text-center">Link</th>
                            <th className="text-center">Table_id</th>
                            <th className="text-center">Type</th>
                            <th style={{ width: "100" }} className="text-center">Ngày tạo</th>
                            <th style={{ width: "30" }} className="text-center">Status</th>
                            <th style={{ width: "140" }} className="text-center">Chức năng</th>
                            <th style={{ width: "30" }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menus.map(function (menu, index) {
                            return (
                                <tr key={index}>
                                    <td className="text-center">
                                        <input type="checkbox"></input>
                                    </td>
                                    <td style={{ width: "30" }} className="text-center">{menu.name}</td>
                                    <td className="text-center">{menu.link}</td>
                                    <td className="text-center">{menu.table_id}</td>
                                    <td className="text-center">{menu.type}</td>
                                    <td className="text-center">27/05/2023</td>
                                    <td className="text-center">{menu.status}</td>
                                    <td className="text-center">
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/menu/show/" + menu.id}><FontAwesomeIcon icon={faEye} /></Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/" + menu.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                        <button onClick={()=>menuDelete(menu.id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                    </td>
                                    <td className="text-center">{menu.id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default QuanliList;

