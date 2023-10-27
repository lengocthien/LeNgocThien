import { useEffect, useState } from "react";
import postservice from "../../../services/PostServies";
import PostItems from "./PostItems";



function Post(){
    const [limit, setLimit] = useState(4);
    const [posts, setPosts] = useState([]);
    useEffect(
      function () {
        (function () {
          postservice.getPostAll(limit).then(function (result) {
              setPosts(result.data.posts);
          });
        })();
      },
      [limit])
        return (
            <>
                <section id="page-header" className="blog-header">
        <h2> #Đọc thêm</h2>
        <p> Đọc tất cả sản phẩm từ chúng tôi</p>
    </section>
    {/* <!-- ----------------------------------- --> */}
    <section id="blog">
    {posts.map(function (post, index) {
            return <PostItems post={post} key={index} />;

          })}

    </section>
    <div className="col-12 text-center">
          <button
            onClick={() => setLimit(limit + 4)}
            className="btn btn-success"
          >
            {" "}
            xem thêm
          </button>
        </div>
    {/* <!-- --------------------------------------- --> */}
  
            </>
        );
    }
export default Post;