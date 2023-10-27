//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservice from "../../../services/UserServies";

function MemberCreate() {
  const navigate = useNavigate();
  // const [users, setUsers] = useState([]);
  // useEffect(function () {
  //   (async function () {
  //     await userservice.getAll().then(function (result) {
  //       setUsers(result.data.users);
  //     });
  //   })();
  // }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState(2);


  async function userStore(event) {
    event.preventDefault();

    var user = new FormData();
    user.append("name", name);
    user.append("email", email);
    user.append("phone", phone);
    user.append("username", username);
    user.append("password", password);
    user.append("address", address);
    user.append("roles", roles);
    user.append("status", status);
   
    //xử lý ảnh


    await userservice.create(user).then(function (res) {
      alert(res.data.message);
      navigate("/admin/member", { replace: true });
    });
  }
  return (
    <form onSubmit={userStore} method="post">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm tài khoản thành viên</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn-sm btn-success me-2">
                Lưu
              </button>
              <Link to="/admin/member" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên thành viên</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Điện thoại</label>
                <input
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
            

              <div className="mb-3">
                <label htmlFor="username">Tài khoản</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
             
              <div className="mb-3">
                <label htmlFor="roles">Vai trò</label>
                <input
                  type="text"
                  name="roles"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                  className="form-control"
                />
              </div>
                            <div className="mb-3">
                <label htmlFor="status">Trạng thái</label>
                <select
                  type="text"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control"
                >
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

export default MemberCreate;
