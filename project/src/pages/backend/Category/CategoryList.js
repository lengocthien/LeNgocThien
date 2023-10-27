import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import categoryservice from "../../../services/CategoryServies";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function CategoryList() {
  const [categorys, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategory(result.data.categorys);
      });
    })();
  }, []);

  async function deleteCategory(id) {
    await categoryservice.remove(id).then(function (result) {
      setCategory(categorys.filter((category) => category.id !== id));
    });
  }

  return (
    <div className="Card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">DANH MỤC</strong>
          </div>
          <div className="col-6 text-end">
            <Link
              className="btn btn-sm "
              to="/admin/category/create"style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}
            >
              <FontAwesomeIcon icon={faPlusSquare} />Thêm
            </Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: 30 }} className="text-center">
                  #
                </th>
                <th style={{ width: 30 }} className="text-center">
                  Id
                </th>
                <th style={{ width: 200, height: 40 }} className="text-center">
                  Hình ảnh
                </th>
                <th>Tên danh mục</th>
                <th>Slug</th>
                <th style={{ width: 130 }} className="text-center">
                  Ngày tạo
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Chức năng
                </th>
              </tr>
            </thead>{" "}
            <tbody>
              {categorys.map(function (category, index) {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{category.id}</td>
                    <td className="text-center">
                      <img
                        src={urlImage + "category/" + category.image}
                        alt="hinh.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>{category.name}</td>
                    <td>{category.slug}</td>
                    <td className="text-center">{category.created_at}</td>
                    <td>{category.metakey}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-sm btn-success me-1"
                        to={"/admin/category/show/" + category.id}
                      >
                        <FontAwesomeIcon icon={faEye} />

                      </Link>
                      <Link
                        className="btn btn-sm btn-primary me-1"
                        to={"/admin/category/update/" + category.id}
                      >
                        <FontAwesomeIcon icon={faEdit} />

                      </Link>
                      <button
                        className="btn btn-sm btn-danger "
                        onClick={() => {
                          if (
                            window.confirm(
                              "Bạn có chắc muốn xóa thương hiệu này không?"
                            )
                          )
                            deleteCategory(category.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />

                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
