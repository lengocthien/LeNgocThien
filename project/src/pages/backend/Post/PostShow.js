import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import postservice from "../../../services/PostServies";

function PostShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [post, setPost] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getById(id).then(function (result) {
        setPost(result.data.post);
      });
    })();
  }, []);

  async function deletePost(id) {
    await postservice.remove(id).then(function (result) {
      for (let i = 0; i < post.length; i++) {
        if (post[i].id === id) {
          post.remove(i, 1);
          break;
        }
      }
      setPost(post);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">CHI TIẾT BÀI ĐĂNG</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/post" className="btn btn-sm btn-success me-1">
              Về danh sách
            </Link>
            <Link
              to={"/admin/post/update/" + post.id}
              className="btn btn-sm btn-primary me-1"
            >
              <FontAwesomeIcon icon={faEdit} />
              Sửa
            </Link>
            <button
              className="btn btn-sm btn-danger "
              onClick={() => {
                if (window.confirm("Bạn có chắc muốn xóa danh mục này không?"))
                  deletePost(post.id);
                  navigate('/admin/post', { replace: true });
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th style={{ width: 300 }}>TÊN TRƯỜNG</th>
              <th>GIÁ TRỊ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{post.topic_id}</td>
            </tr>
            <tr>
              <th>HÌNH ẢNH SẢN PHẨM ĐĂNG</th>
              <td>
                <img
                  src={urlImage + "post/" + post.image}
                  alt="hinh"
                  className="img_fluid"
                  style={{ maxwidth: 200 }}
                />
              </td>
            </tr>
            <tr>
              <th>TIÊU ĐỀ</th>
              <td>{post.title}</td>
            </tr>
            <tr>
              <th>SLUG</th>
              <td>{post.slug}</td>
            </tr>
            <tr>
              <th>CHI TIẾT</th>
              <td>{post.detail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostShow;
