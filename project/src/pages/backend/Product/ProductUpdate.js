import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryServies";
import productservice from "../../../services/ProductServies";
import { useEffect, useState } from "react";
import brandservice from "../../../services/BrandServies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";


function ProductUpdate() {
    const navigate = useNavigate(); // chuyen trang
 
    const [category_id, setCategoryId] = useState();
    const [brand_id, setBrandId] = useState();
    const [name, setName] = useState("");
    const [price, setPrice] = useState();
    const [price_sale, setPriceSale] = useState();
    const [qty, setQty] = useState();
    const [detail, setDetail] = useState("");
    const [description, setDescription] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState('1');

    const {id}=useParams("id")

    useEffect(function(){
        (async function(){
            await productservice.getById(id).then(function(result){
                const data=result.data.product;
                setCategoryId(data.category_id);
                setBrandId(data.brand_id);
                setName(data.name);
                setPrice(data.price);
                setPriceSale(data.price_sale);
                setQty(data.qty);
                setDetail(data.detail);
                setDescription(data.description);
                setMetakey(data.metakey);
                setStatus(data.status);

            })
        })()
    },[]);

    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategorys(result.data.categorys)
            });
        })();
    }, [])

    const[brands,setBrand]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getAll().then(function(result)
            {
                setBrand(result.data.brands)
            });
        })();
    },[])

    async function productEdit(event) {
        event.preventDefault();//khong load lại trang khi thay do
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("category_id", category_id);
        product.append("brand_id", brand_id);
        product.append("name", name);
        product.append("price", price);
        product.append("price_sale", price_sale);
        product.append("qty", qty);
        product.append("detail", detail);
        product.append("description", description);
        product.append("metakey", metakey);
        product.append("status", status);
        if (image.files.length === 0) {
            product.append("image", "")
        }
        else {
            product.append("image", image.files[0]);
        }
        await productservice.update(id,product).then(function (res) {
            alert(res.data.message);
            navigate('/admin/product', { replace: true })
        })
    }




    return (
        <form onSubmit={productEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Chỉnh sửa sản phẩm
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-info"> <FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Giá</label>
                                <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" value={price} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Giá Sale</label>
                                <input onChange={(e) => setPriceSale(e.target.value)} type="number" name="price_sale" value={price_sale} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="name">Số lượng</label>
                                <input onChange={(e) => setQty(e.target.value)} type="number" name="qty" value={qty} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Chi tiết sản phẩm</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} name="detail" value={detail} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} name="description" value={description} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <select onChange={(e) => setCategoryId(e.target.value)} value={category_id} name="category_id" className="form-control">
                                    <option>---Chọn danh mục---</option>
                                    {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="md-3">
                                <label htmlFor="parent_id">Thương hiệu</label>
                                <select onChange={(e) => setBrandId(e.target.value)} value={brand_id} name="brand_id" className="form-control">
                                    <option value="0">---Chọn thương hiệu---</option>
                                    {brands.map(function (bra, index) {
                                        return (
                                            <option key={index} value={bra.id}>{bra.name}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="md-3">
                                <label htmlFor="image">Hình sản phẩm</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
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

export default ProductUpdate;