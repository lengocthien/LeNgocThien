import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import postservice from "../../../services/PostServies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import topicservice from "../../../services/TopicServies";
import { faBackward } from "@fortawesome/free-solid-svg-icons";


function PostUpdate() {
    const navigate = useNavigate(); // chuyen trang
    const [topic_id, setTopicId] = useState(0);
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [type, setType] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [status, setStatus] = useState(1);

    const {id}=useParams("id");

    useEffect(function(){
        (async function(){
            await postservice.getById(id).then(function(result){
                const data = result.data.post;
                setTopic(data.topic_id);
                setTitle(data.title);
                setDetail(data.detail);
                setType(data.type);
                setMetadesc(data.metadesc);
                setMetakey(data.metakey);
                setStatus(data.status);

            })
        })();
    },[]);

    const [topics,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await topicservice.getAll().then(function(result){
                setTopic(result.data.topics)
            })
        })();
    },[]);

    async function postEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");

        var post = new FormData();
        post.append("topic_id", topic_id);
        post.append("title", title);
        post.append("detail", detail);
        post.append("type", type);
        post.append("metadesc", metadesc);
        post.append("metakey", metakey);
        post.append("status", status);
        if (image.files.length === 0) {
            post.append("image", "");
        }
        else {
            post.append("image", image.files[0]);
        }

        await postservice.update(id,post).then(function (res) {
            alert(res.data.message);
            navigate('/admin/post', { replace: true });
        })
    }


    return (
        <form onSubmit={postEdit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Chỉnh sửa bài viết
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/post" className="btn btn-sm btn-info"> <FontAwesomeIcon icon={faBackward} />Quay lại</Link>
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
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="topic_id">Topic Id</label>
                                <select onChange={(e) => setTopicId(e.target.value)} value={topic_id} name="topic_id" className="form-control">
                                    <option value="0">Danh mục cha</option>

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

export default PostUpdate;