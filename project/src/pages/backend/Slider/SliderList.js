import { Link } from "react-router-dom";
import sliderservice from "../../../services/SliderServies";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { urlImage } from "../../../config";


function SliderList() {
    const [statusdel,setStatusDel]=useState(0);
    const [sliders,setSlider]=useState([]);
    useEffect(function(){
        (async function(){
            await sliderservice.getAll().then(function(result){
                setSlider(result.data.sliders)
            })
        })();
    },[statusdel]);
    // xoa
    function sliderDelete(id){
      sliderservice.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        })
    }

    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">SLIDER</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/slider/create"className="btn btn-sm "style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}><FontAwesomeIcon icon={faPlusSquare} />Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"30"}} className="text-center">#</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Link</th>
                            <th className="text-center">Vị trí</th>
                            <th className="text-center">Hình ảnh</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders.map(function(slider,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">{slider.name}</td>
                                <td style={{width:"120px",height:"120px"}} className="text-center">{slider.link}</td>
                                <td className="text-center">{slider.position}</td>
                                <td className="text-center">    
                                    <img src={urlImage+'slider/'+slider.image} style={{width:"120px",height:"120px"}} className="img-fluid" alt="hing.png"/>
                                </td>
                                <td className="text-center">{slider.created_at}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/slider/show/"+slider.id}><FontAwesomeIcon icon={faEye} /></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/"+slider.id}><FontAwesomeIcon icon={faEdit} /></Link>
                                    <button onClick={()=>sliderDelete(slider.id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                                </td>
                                <td className="text-center">{slider.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default SliderList;
