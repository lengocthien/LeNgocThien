import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import postservice from "../../../services/PostServies"
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";

function PostList() {
  const [posts, setPost] = useState([]);
  useEffect(function () {
    (async function () {
      await postservice.getAll().then(function (result) {
        setPost(result.data.posts);
      });
    })();
  }, []);
  async function deletePost(id) {
    await postservice.remove(id).then(function (result) {
      setPost(posts.filter((post) => post.id !== id));
    });
  }

  return (
    <div className="Card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-primary">POST</strong>
          </div>
          <div className="col-6 text-end">
            <Link className="btn btn-sm " to="/admin/post/create"style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}>
            <FontAwesomeIcon icon={faPlusSquare} />
              Thêm
            </Link>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped table-bPosted table-hover">
            <thead>
              <tr>
                <th style={{ width: 50 }} className="text-center">
                  #
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Topic_id
                </th>
                <th style={{ width: 150 }} className="text-center">
                  Hình
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Title
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Slug
                </th>
                <th style={{ width: 130 }} className="text-center">
                  Detail
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
              {posts.map(function (post, index) {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{post.topic_id}</td>
                    <td className="text-center">
                      <img
                        src={urlImage + "post/" + post.image}
                        style={{ width: 220,height:140 }}
                        alt="hinh.png"
                        className="img-fluid"
                      />
                    </td>
                    <td className="text-center">{post.title}</td>
                    <td className="text-center">{post.slug}</td>
                    <td className="text-center">{post.detail}</td>

                    <td className="text-center">{post.created_at}</td>
                    <td className="text-center">
                      <Link
                        className="btn btn-sm btn-success me-1"
                        to={"/admin/post/show/" + post.id}
                      >
                   <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <Link
                        className="btn btn-sm btn-primary me-1"
                        to={"/admin/post/update/" + post.id}
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
                            deletePost(post.id);
                        }}
                      >
                      <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                    <td className="text-center">{post.id}</td>
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

export default PostList;
