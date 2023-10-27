import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import orderservice from "../../../services/OrderServies";
import { useEffect, useState } from "react";
function OrderList() {
  const [orders, setOrder] = useState([]);
  useEffect(function () {
    (async function () {
      await orderservice.getAll().then(function (result) {
        setOrder(result.data.orders);
      });
    })();
  }, []);
  async function deleteOrder(id) {
    await orderservice.remove(id).then(function (result) {
      setOrder(orders.filter((order) => order.id !== id));
    });
  }
  return (
    <div className="Card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">ORDER</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm " to="/admin/order/create"style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}>
            <FontAwesomeIcon icon={faPlusSquare} />
              Thêm
            </Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th style={{ width: 50 }} className="text-center">
                  #
                </th>
                <th>Name</th>
                <th style={{ width: 130 }} className="text-center">
                  Email
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Phone
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Address
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Note
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Ngày tạo
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Chức năng
                </th>
                <th style={{ width: 50 }} className="text-center">
                  Id
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(function (order, index) {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td>{order.address}</td>
                    <td>{order.note}</td>
                    <td className="text-center">{order.created_at}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-sm btn-success me-1"
                        to={"/admin/order/show/1"}
                      >
                      <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <Link
                        className="btn btn-sm btn-primary me-1"
                        to="/admin/order/update/1"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        className="btn btn-sm btn-danger "
                        onClick={() => {
                          if (
                            window.confirm(
                              "Bạn có chắc muốn xóa danh mục này không?"
                            )
                          )
                            deleteOrder(order.id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                    <td className="text-center">{order.id}</td>
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

export default OrderList;
