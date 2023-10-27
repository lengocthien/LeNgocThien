import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import categoryservice from "../../../services/CategoryServies";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";

function CategoryShow() {
  const { id } = useParams("id");
  const [category, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getById(id).then(function (result) {
        setCategory(result.data.category);
      });
    })();
  }, []);
  // categoryservice.getById(id);
  return (
    <div className="Card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm btn-success me-2" to="/admin/category">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-2"
              to={"/admin/category/update/" + category.id}
            >
                     <FontAwesomeIcon icon={faEdit} />Sửa
            </Link>
            <button className="btn btn-sm btn-danger ">
            <FontAwesomeIcon icon={faTrash} />Xóa
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
                <td>{category.id}</td>
              </tr>
              <tr>
                <th>TÊN THƯƠNG HIỆU</th>
                <td>{category.name}</td>
              </tr>
              <tr>
                <th>SLUG</th>
                <td>{category.slug}</td>
              </tr>
              <tr>
                <th>HÌNH ẢNH</th>
                <td>
                  <img
                    src={urlImage + "category/" + category.image}
                    alt="hinh"
                    className="img-fluid"
                    style={{ width: 300 }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryShow;
