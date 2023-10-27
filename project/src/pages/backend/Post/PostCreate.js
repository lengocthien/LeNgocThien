import { Link, useNavigate } from "react-router-dom";
import postservice from "../../../services/PostServies";
import topicservice from "../../../services/TopicServies";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";


function PostCreate() {
    const navigate = useNavigate(); // chuyen trang

    
    const [topics,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await topicservice.getAll().then(function(result){
                setTopic(result.data.topics)
            })
        })();
    },[]);

    const [topic_id, setTopicId] = useState(0);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);
    async function postStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");

        var post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("detail", detail);
        post.append("type", type);
        post.append("description", description);
        post.append("metakey", metakey);
        post.append("status", status);
        post.append("image",image.files[0]);

        await postservice.create(post).then(function (res) {
            alert(res.data.message);
            navigate('/admin/post', { replace: true });
        })
    }

    return (
        <form onSubmit={postStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Post
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/post" className="btn btn-sm btn-info"><FontAwesomeIcon icon={faBackward} />Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="title">Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="detail">Chi tiết</label>
                                <textarea onChange={(e) => setDetail(e.target.value)} name="detail" value={detail} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="type">Type</label>
                                <input onChange={(e) => setType(e.target.value)} type="text" name="type" value={type} className="form-control" />
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
                                <label htmlFor="topic_id">Topic Id</label>
                                <select onChange={(e) => setTopicId(e.target.value)} value={topic_id} name="topic_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {topics.map(function (top, index) { 
                                        return (
                                            <option key={index} value={top.id}>{top.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình ảnh</label>
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

export default PostCreate;