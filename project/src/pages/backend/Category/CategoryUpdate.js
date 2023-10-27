import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryServies";

function CategoryUpdate() {
    const Navigate =  useNavigate();
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSort_Order] = useState(0);
    const [status, setStatus] = useState(1);
    const [description, setDescription] = useState("");

    const {id} = useParams("id")
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id)
            .then(function (result) 
            {
                const tmp = result.data.category;
                setName(tmp.name);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);  
                setSort_Order(tmp.sort_order);
                setStatus(tmp.status);
                setDescription(tmp.description)
            }
            );
        })();
    },[])
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll()
            .then(function(result)
            {
                setCategorys(result.data.categorys);
            }
            );
        })();
    }, []);

    async function categoryEdit(event) {
        event.preventDefault();
        const image=document.querySelector("#image");
        var category = new FormData();
        category.append("name", name);
        category.append("sort_order", sort_order);
        category.append("metakey", metakey);
        category.append("parent_id", parent_id);
        category.append("metadesc", metadesc);
        category.append("status", status);
        category.append("description", description);

        // category.append("image", image.files[0]);
        if (image.files.length === 0) {
            category.append("image","");
        }
        else {
            category.append("image", image.files[0]);
        }

        await categoryservice.update(id,category).then(function (res) {
            alert(res.data.message)
            Navigate('/admin/category', { replace: true });
        });

    }
  return (
    <form onSubmit={categoryEdit}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">CẬP NHẬT DANH MỤC</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/category" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên danh mục</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea
                  name="metakey"
                  value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="description">Mô tả</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="parent_id">Danh mục cha</label>
                <select
                  type="text"
                  name="parent_id"
                  value={parent_id}
                  onChange={(e) => setParentId(e.target.value)}
                  className="form-control"
                >
                  <option value="0">Danh mục cha</option>
                  {categorys.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="sort_order">Sắp xếp</label>
                <select
                  type="text"
                  name="sort_order"
                  value={sort_order}
                  onChange={(e) => setSort_Order(e.target.value)}
                  className="form-control"
                >
                  <option value="0">None</option>
                  {categorys.map(function (cat, index) {
                    return (
                      <option key={index} value={cat.sort_order + 1}>
                        Sau: {cat.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="image">Hình đại diện</label>
                <input type="file" id="image" className="form"></input>
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

export default CategoryUpdate;
