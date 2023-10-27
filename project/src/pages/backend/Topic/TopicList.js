import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import topicservice from "../../../services/TopicServies";
function TopicList() {
    const [topics,setTopic]=useState([]);
    const [statusdel,setStatusDel]=useState(0);
    useEffect(function(){
        (async function(){
            await topicservice.getAll().then(function(result){
                setTopic(result.data.topics)
            })
        })();
    },[statusdel]);
    function topicDelete(id){
        topicservice.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        });
    };

    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TOPIC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/topic/create"className="btn btn-sm "style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}><FontAwesomeIcon icon={faPlusSquare} />Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                        <th style={{width:"30"}} className="text-center">#</th>
                            <th style={{width:"100"}} className="text-center">Tên</th>
                            <th className="text-center">Parent_id</th>
                            <th className="text-center">Slug</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"30"}} className="text-center">Status</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(function(topic,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td style={{width:"30"}} className="text-center">{topic.name}</td>
                                <td className="text-center">{topic.parent_id}</td>
                                <td className="text-center">{topic.slug}</td>
                                <td className="text-center">27/05/2023</td>
                                <td className="text-center">{topic.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/topic/show/"+topic.id}><FontAwesomeIcon icon={faEye} /></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/"+topic.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                    <button onClick={()=>topicDelete(topic.id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                                <td className="text-center">{topic.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default TopicList;
