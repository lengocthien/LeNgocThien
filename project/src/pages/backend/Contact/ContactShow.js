import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import contactservice from "../../../services/ContactServies";
import { useEffect, useState } from "react";

function ContactShow() {
  const { id } = useParams("id");
  const [contact, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getById(id).then(function (result) {
        setContact(result.data.contact);
      });
    })();
  }, []);
  // Contactservice.getById(id);
  return (
    <div className="Card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success me-2" to="/admin/contact">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-2"
              to={"/admin/contact/update/" + contact.id}
            >
              <FontAwesomeIcon icon={faEdit} />sửa
            </Link>
            <button className="btn btn-sm btn-danger ">
              <FontAwesomeIcon icon={faTrash} />sửa Xóa
            </button>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{ width: 200 }}>TÊN TRƯỜNG</th>
                <th>GIÁ TRỊ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{contact.user_id}</td>
              </tr>
              <tr>
                <th>TÊN THƯƠNG HIỆU</th>
                <td>{contact.name}</td>
              </tr>
              <tr>
                <th>EMAIL</th>
                <td>{contact.email}</td>
              </tr>
              <tr>
                <th>NUMBER PHONE</th>
                <td>{contact.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactShow;
