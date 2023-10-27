import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productservice from "../../../services/ProductServies";
import categoryservice from "../../../services/CategoryServies";
import brandservice from "../../../services/BrandServies";

function ProductCreate() {
  const navigate = useNavigate();
  const [categorys, setCategory] = useState([]);
  const [brands, setBrand] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getAll().then(function (result) {
        setCategory(result.data.categorys);
      });
    })();
  }, []);
  useEffect(function () {
    (async function () {
      await brandservice.getAll().then(function (result) {
        setBrand(result.data.brands);
      });
    })();
  }, []);
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory_Id] = useState(0);
  const [brand_id, setBrand_Id] = useState(0);
  const [price, setPrice] = useState("");
  const [price_sale, setPrice_Sale] = useState("");
  const [qty, setQty] = useState(1);
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState(1);

  async function productStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    var product = new FormData();
    product.append("name", name);
    product.append("metakey", metakey);
    product.append("description", description);
    product.append("category_id", category_id);
    product.append("brand_id", brand_id);
    product.append("price", price);
    product.append("qty", qty);
    product.append("price_sale", price_sale);
    product.append("detail", detail);
    product.append("status", status);
    if(image.files.length===0)
    {
      product.append("image","");
    }
    else
    {
      product.append("image",image.files[0]);
    }
    // product.forEach(function(v,k){
    //   console.log(v+" "+k);
    // });


    await productservice.create(product).then(function (res) {
      alert(res.data.message);
      navigate('/admin/product', { replace: true });
    });
  }
  return (
    <form onSubmit={productStore}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">THÊM DANH MỤC</strong>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-sm btn-success me-3">
                Lưu
              </button>
              <Link to="/admin/product" className="btn btn-sm btn-info">
                Về danh sách
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label htmlFor="name">Tên sản phẩm</label>
                <input type="text" name="name" value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control" />
              </div>
             
              <div className="mb-3">
                <label htmlFor="metakey">Từ khóa</label>
                <textarea name="metakey" value={metakey}
                  onChange={(e) => setMetakey(e.target.value)}
                  className="form-control"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="description">mô tả</label>
                <textarea name="description" value={description}
                  onChange={(e) => setDescription(e.target.value)} className="form-control"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="price">Price</label>
                <textarea name="price" value={price}
                  onChange={(e) => setPrice(e.target.value)} className="form-control"></textarea>
              </div>
              
              <div className="mb-3">
                <label htmlFor="price_sale">Price_Sale</label>
                <textarea name="price_sale" value={price_sale}
                  onChange={(e) => setPrice_Sale(e.target.value)} className="form-control"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="qty">Số lượng</label>
                <textarea name="qty" value={qty}
                  onChange={(e) => setQty(e.target.value)} className="form-control"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="detail">Chi tiết</label>
                <textarea name="detail" value={detail}
                  onChange={(e) => setDetail(e.target.value)} className="form-control"></textarea>
              </div>

            </div>

            <div className="col-md-3">
              <div className="md-3">
                <label htmlFor="category_id">Danh mục</label>
                <select name="category_id" className="form-control"
                  value={category_id}
                  onChange={(e) => setCategory_Id(e.target.value)} >
                  <option value="0">None</option>
                  {categorys.map(function (pro, index) {
                    return (
                      <option key={index} value={pro.id}>{pro.name}
                      </option>
                    );
                  })}
                </select>

              </div>
              <div className="md-3">
                <label htmlFor="brand_id">Thương hiệu</label>
                <select name="brand_id" className="form-control"
                  value={brand_id}
                  onChange={(e) => setBrand_Id(e.target.value)} >
                  <option value="0">None</option>
                  {brands.map(function (pro, index) {
                    return (
                      <option key={index} value={pro.id}>{pro.name}
                      </option>
                    );
                  })}
                </select>

              </div>
              <div className="md-3">
                <label htmlFor="image" >Hình ảnh</label>
                <input type="file" id="image" className="form-control">
                </input>

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

export default ProductCreate;
