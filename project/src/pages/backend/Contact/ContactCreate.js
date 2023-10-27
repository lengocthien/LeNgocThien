
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import contactservice from "../../../services/ContactServies";

function ContactCreate() {
  const navigate = useNavigate();
  const [contacts, setContact] = useState([]);
  useEffect(function () {
    (async function () {
      await contactservice.getAll().then(function (result) {
        setContact(result.data.contacts);
      });
    })();
  }, []);
  const [user_id, setUserId] = useState(1);
  const [name, setName] = useState("");
  const [email, setEMail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState("");
  const [replay_id, setReplayId] = useState(1);
  const [status, setStatus] = useState(1);

  async function contactStore(event) {
    event.preventDefault();
    var contact = new FormData();
    contact.append("user_id", user_id);
    contact.append("name", name);
    contact.append("email", email);
    contact.append("phone", phone);
    contact.append("title", title);
    contact.append("content", content);
    contact.append("replay_id",replay_id);
    contact.append("status", status);

    await contactservice.create(contact).then(function (res) {
      alert(res.data.message);
      navigate("/admin/contact", { replace: true });
    });
  }
  return (
    <form onSubmit={contactStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">THÊM LIÊN HỆ</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/contact" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
            <div className="mb-3">
                <label htmlFor="name">THÊM USER ID</label>
                <input
                  type="text"
                  name="user_id"
                  value={user_id}
                  onChange={(e) => setUserId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name">THÊM TÊN NGƯỜI LIÊN HỆ</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">THÊM EMAIL</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEMail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">THÊM SỐ ĐIỆN THOẠI</label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title">TIÊU ĐỀ</label>
                <textarea
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="content">NỘI DUNG</label>
                <textarea
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="replay_id">KHỞI TẠO LẠI ID</label>
                <select
                   name="replay_id"
                   value={replay_id}
                  onChange={(e) => setReplayId(e.target.value)}
                  className="form-control"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="status">THÊM STATUS</label>
                <select
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

export default ContactCreate;
