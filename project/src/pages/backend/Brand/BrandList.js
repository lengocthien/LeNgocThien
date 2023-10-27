import { Link } from "react-router-dom";
import brandservice from "../../../services/BrandServies";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function BrandList() {
  const [brands, setBrand] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getAll().then(function (result) {
        setBrand(result.data.brands);
      });
    })();
  }, []);
  async function deleteBrand(id) {
    await brandservice.remove(id).then(function (result) {
      setBrand(brands.filter((brand) => brand.id !== id));
    });
  }
  return (
    <div className="Card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">THƯƠNG HIỆU</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm " to={"/admin/brand/create"}style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}>
  
              <FontAwesomeIcon icon={faPlusSquare}/>
              Thêm
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
                <th style={{ width: 130 }} className="text-center">
                  Logo
                </th>
                <th>Tên thương hiệu</th>
                <th>Slug</th>
                <th style={{ width: 130 }} className="text-center">
                  Ngày tạo
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Chức năng
                </th>
                <th style={{ width: 30 }} className="text-center">
                  Id
                </th>
              </tr>
            </thead>
            <tbody>
              {brands.map(function (brand, index) {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">
                      <img
                        src={urlImage + "brand/" + brand.image}
                        alt="hinh.png"
                        className="img-fluid"
                      />
                    </td>
                    <td>{brand.slug}</td>
                    <td className="text-center">{brand.created_at}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-sm btn-success me-1"
                        to={"/admin/brand/show/" + brand.id}
                      >
                
                        <FontAwesomeIcon icon={faEye}/>

                      </Link>
                      <Link
                        className="btn btn-sm btn-primary me-1"
                        to={"/admin/brand/update/" + brand.id}
                      >
                        <FontAwesomeIcon icon={faEdit}/>
                      </Link>
                      <button
                        className="btn btn-sm btn-danger "
                        onClick={() => {
                          if (
                            window.confirm(
                              "Bạn có chắc muốn xóa thương hiệu này không?"
                            )
                          )
                            deleteBrand(brand.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash}/>

                      </button>
                    </td>
                    <td className="text-center">{brand.metadesc}</td>
                    <td className="text-center">{brand.id}</td>
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

export default BrandList;
