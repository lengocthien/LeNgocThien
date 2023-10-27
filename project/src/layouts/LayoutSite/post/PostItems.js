import { Link } from "react-router-dom";
import { urlImage } from "../../../config";

function PostItems(props) {
  return (
        <div className="blog-box">
            <div className="blog-img">
            <img
              className="img-fluid"
              src={urlImage + "post/" + props.post.image}
              alt="hing.png"
            />
            </div>
            <div className="blog-details">
                <h4>{props.post.title}</h4>
                <p>{props.post.detail}</p>
                <a href="">TIẾP TỤC ĐỌC</a>
            </div>
            <h1>13/01</h1>
        </div>
  );
}

export default PostItems;
