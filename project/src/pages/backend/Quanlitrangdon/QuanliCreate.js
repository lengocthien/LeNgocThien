import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuServies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faTrash } from "@fortawesome/free-solid-svg-icons";


function QuanliCreate() {
    const navigate = useNavigate(); // chuyen trang


    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    // const [level, setLevel] = useState();
    const [table_id, setTableId] = useState();
    const [type, setType] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(1);
    const [position, setPosition] = useState('');

    async function menuStore(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
       
        // menu.append("level",level);
        menu.append("table_id", table_id);
        menu.append("type", type);
        menu.append("sort_order",sort_order);
        menu.append("status", status);
        menu.append("parent_id",parent_id);
        menu.append("position",position);

        await menuservice.create(menu).then(function (res) {
            alert(res.data.message);
            navigate('/admin/menu', { replace: true });
        });
    }

    return (
        <form onSubmit={menuStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Menu
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info"><FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên menu</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Link</label>
                                <input onChange={(e) => setLink(e.target.value)} type="text" name="link" value={link} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Type</label>
                                <input onChange={(e) => setType(e.target.value)} type="text" name="type" value={type} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Vị trí</label>
                                <input onChange={(e) => setPosition(e.target.value)} type="text" name="position" value={position} className="form-control" />
                            </div>
                            {/* <div className="md-3">
                                <label htmlFor="name">Cấp bậc</label>
                                <input onChange={(e) => setLevel(e.target.value)} type="number" name="level" value={level} className="form-control" />
                            </div> */}

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <input onChange={(e) => setParentId(e.target.value)} type="number" name="parent_id" value={parent_id} className="form-control" />
                                {/* <select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                    <option value="0">Parent Id</option>
                                     {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        )
                                    })} 
                                </select> */}
                            </div>
                            <div className="md-3">
                                <label htmlFor="table_id">Id Table</label>
                                <input onChange={(e) => setTableId(e.target.value)} type="number" name="table_id" value={table_id} className="form-control" />

                                {/* <select onChange={(e) => setTableId(e.target.value)} value={table_id} name="table_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {menus.map(function (me, index) {
                                        return (
                                            <option key={index} value={me.table_id}>{me.table_id}</option>
                                        )
                                    })}
                                </select> */}
                                {/* <select name="table_id" value={table_id} onChange={(e) => setTableId(e.target.value)} className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select> */}
                            </div>
                            <div className="md-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <input onChange={(e) => setSortOrder(e.target.value)} type="number" name="sort_order" value={sort_order} className="form-control" />

                            </div>

                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );

}

export default QuanliCreate;