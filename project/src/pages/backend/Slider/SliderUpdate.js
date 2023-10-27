import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sliderservice from "../../../services/SliderServies";
import { faBackward } from "@fortawesome/free-solid-svg-icons";


function SliderUpdate() {
    const { id } = useParams("id");

    const navigate = useNavigate(); // chuyen trang
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [sort_order, setSortOrder] = useState(0);
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState(1);

    useEffect(function () {
        (async function () {
            await sliderservice.getById(id).then(function (result) {
                const data = result.data.slider;
                setName(data.name);
                setLink(data.link);
                setSortOrder(data.sort_order);
                setPosition(data.position);
                setStatus(data.status);

            });
        })();
    }, []);

    async function sliderEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("name", name);
        slider.append("link", link);
        slider.append("sort_order", sort_order);
        slider.append("position", position);
        slider.append("status", status);
        if (image.files.length === 0) {
            slider.append("image", "")
        }
        else {
            slider.append("image", image.files[0]);
        }


        await sliderservice.update(id,slider).then(function (res) {
            alert(res.data.message);
            navigate('/admin/slider', { replace: true });
        })
    }

    const [sliders, setSlider] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.getAll().then(function (result) {
                setSlider(result.data.sliders)
            })
        })();
    }, []);


    return (
        <form onSubmit={sliderEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Slider
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/slider" className="btn btn-sm btn-info"> <FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="link">Link</label>
                                <input onChange={(e) => setLink(e.target.value)} type="text" name="link" value={link} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="position">Vị trí</label>
                                <input onChange={(e) => setPosition(e.target.value)} type="text" name="position" value={position} className="form-control" />
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="image">Hình ảnh</label>
                                <input type="file" id="image" className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="sort-order">Sắp xếp</label>
                                <select onChange={(e) => setSortOrder(e.target.value)} value={sort_order} name="sort-order" className="form-control">
                                    <option value="0">None</option>
                                    {sliders.map(function (sli, index) {
                                        return (
                                            <option key={index} value={sli.sort_order + 1}>Sau:{sli.name}</option>
                                        )
                                    })}
                                </select>
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

export default SliderUpdate;