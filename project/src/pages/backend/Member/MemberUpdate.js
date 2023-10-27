import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import userservice from "../../../services/UserServies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function MemberUpdate() {
    const navigate = useNavigate(); // chuyen trang

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState(1);

    const { id } = useParams("id")

    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {
                const data = result.data.user;
                setName(data.name);
                setEmail(data.email);
                setPhone(data.phone);
                setUserName(data.username);
                setPassword(data.password);
                setRoles(data.roles);
                setAddress(data.address);
                setStatus(data.status);
            });
        })();
    }, [])

    async function userEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name",name);
        user.append("email",email);
        user.append("phone",phone);
        user.append("username",username);
        user.append("password", password);
        user.append("roles", roles);
        user.append("address", address);
        user.append("status",status);
     
        await userservice.update(id,user).then(function (res) {
            alert(res.data.message);
            navigate('/admin/member', { replace: true });
        })
    }

    return (
        <form onSubmit={userEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm tài khoản thành viên
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/member" className="btn btn-sm btn-info"> <FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={phone} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="username">Tên tài khoản</label>
                                <input onChange={(e) => setUserName(e.target.value)} type="text" name="username" value={username} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="password">Địa chỉ</label>
                                <input onChange={(e) => setAddress(e.target.value)} type="text" name="address" value={address} className="form-control" />
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="password">Role</label>
                                <input onChange={(e) => setRoles(e.target.value)} type="text" name="roles" value={roles} className="form-control" />
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

export default MemberUpdate;