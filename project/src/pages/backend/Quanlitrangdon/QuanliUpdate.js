import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../../services/MenuServies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function QuanliUpdate() {
    const { id } = useParams("id");

    const navigate = useNavigate(); // chuyen trang


    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [level, setLevel] = useState('');
    const [table_id, setTableId] = useState();
    const [type, setType] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [parent_id, setParentId] = useState(0);
    const [status, setStatus] = useState(1);

    useEffect(function () {
        (async function () {
            await menuservice.getById(id).then(function (result) {
                const data = result.data.menu;
                setName(data.name);
                setLink(data.link);
                setPosition(data.position);
                setLevel(data.level);
                setTableId(data.table_id);
                setType(data.type);
                setSortOrder(data.sort_order);
                setParentId(data.parent_id);
                setStatus(data.status);

            });
        })();
    }, []);

    async function menuEdit(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("position",position);
        menu.append("level",level);
        menu.append("table_id", table_id);
        menu.append("type", type);
        menu.append("sort_order",sort_order);
        menu.append("parent_id",parent_id);
        menu.append("status", status);


        await menuservice.update(id,menu).then(function (res) {
            alert(res.data.message);
            navigate('/admin/menu', { replace: true });
        })
    }

    const [menus, setMenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setMenu(result.data.menus)
            })
        })();
    }, [])


    return (
        <form onSubmit={menuEdit}>
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
                            <Link to="/admin/menu" className="btn btn-sm btn-info"> <FontAwesomeIcon icon={faBackward} />Quay lại</Link>
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
                            <div className="md-3">
                                <label htmlFor="name">Cấp bậc</label>
                                <input onChange={(e) => setLevel(e.target.value)} type="number" name="level" value={level} className="form-control" />
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                    <option value="0">Parent Id</option>
                                    {/* {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        )
                                    })} */}
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="table_id">Id Table</label>
                                <select onChange={(e) => setTableId(e.target.value)} value={table_id} name="table_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {menus.map(function (me, index) {
                                        return (
                                            <option key={index} value={me.table_id}>{me.table_id}</option>
                                        )
                                    })}
                                </select>
                                {/* <select name="table_id" value={table_id} onChange={(e) => setTableId(e.target.value)} className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select> */}
                            </div>
                            <div className="md-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select onChange={(e) => setSortOrder(e.target.value)} value={sort_order} name="sort-order" className="form-control">
                                    <option value="0">None</option>
                                    {menus.map(function (me, index) {
                                        return (
                                            <option key={index} value={me.sort_order + 1}>Sau:{me.name}</option>
                                        )
                                    })}
                                </select>
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

export default QuanliUpdate;