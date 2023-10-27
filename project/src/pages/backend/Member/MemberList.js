import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import userservice from "../../../services/UserServies";
import { useEffect, useState } from "react";

function MemberList() {
  const [users, setUser] = useState([]);
  useEffect(function () {
    (async function () {
      await userservice.getAll().then(function (result) {
        setUser(result.data.users);
      });
    })();
  }, []);
  async function deleteUser(id) {
    await userservice.remove(id).then(function (result) {
      setUser(users.filter((user) => user.id !== id));
    });
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">TÀI KHOẢN THÀNH VIÊN</strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/member/create" className="btn btn-sm "style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}>
            <FontAwesomeIcon icon={faPlusSquare} />
              Thêm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-striped table-border table-hover">
          <thead>
            <tr>
              <th style={{ width: "20" }} className="text-center">
                #
              </th>
              <th style={{ width: "50" }} className="text-center">
                Tên
              </th>
              <th style={{ width: "100" }} className="text-center">
                Email
              </th>
              <th className="text-center">Số điện thoại</th>
              <th className="text-center">Địa chỉ</th>
              <th style={{ width: "100" }} className="text-center">
                Ngày tạo
              </th>
              <th style={{ width: "30" }} className="text-center">
                Status
              </th>
              <th style={{ width: "140" }} className="text-center">
                Chức năng
              </th>
              <th style={{ width: "30" }} className="text-center">
                ID
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(function (user, index) {
              return (
                <tr key="index">
                  <td className="text-center">
                    <input type="checkbox"></input>
                  </td>
                  <td style={{ width: "30" }} className="text-center">
                    {user.name}
                  </td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.phone}</td>
                  <td className="text-center">{user.address}</td>

                  <td className="text-center">27/05/2023</td>
                  <td className="text-center">{user.roles}</td>
                 
                  <td className="text-center">{user.status}</td>
                  <td className="text-center">
                    <Link
                      className="btn btn-sm btn-info me-1"
                      to={"/admin/member/show/" + user.id}
                    >
                                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link
                      className="btn btn-sm btn-primary me-1"
                      to={"/admin/member/update/" + user.id}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      className="btn btn-sm btn-danger "
                      onClick={() => {
                        if (
                          window.confirm(
                            "Bạn có chắc muốn xóa thanh vien này không?"
                          )
                        )
                          deleteUser(user.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                  <td className="text-center">{user.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberList;
