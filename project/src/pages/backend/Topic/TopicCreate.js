import { Link, useNavigate } from "react-router-dom";
import topicservice from "../../../services/TopicServies";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



function TopicCreate() {

    const navigate = useNavigate(); // chuyen trang

    const [topics,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await topicservice.getAll().then(function(result){
                setTopic(result.data.topics)
            })
        })();
    },[]);

    const [name, setName] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);

    async function topicStore(event) {
        event.preventDefault();
        var topic = new FormData();
        topic.append("name", name);
        topic.append("parent_id", parent_id);
        topic.append("metadesc", metadesc);
        topic.append("metakey", metakey);
        topic.append("status", status);

        await topicservice.create(topic).then(function (res) {
            alert(res.data.message);
            navigate('/admin/topic', { replace: true });
        })
    }

    return (
        <form onSubmit={topicStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Topic
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/topic" className="btn btn-sm btn-info"><FontAwesomeIcon icon={faTrash} />Quay lại</Link>
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
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea onChange={(e) => setMetakey(e.target.value)} name="metakey" value={metakey} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="parent_id">Danh mục cha</label>
                                <select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {topics.map(function (top, index) {
                                        return (
                                            <option key={index} value={top.id}>{top.name}</option>
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

export default TopicCreate;