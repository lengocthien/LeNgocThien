import React, { useState } from "react"
import logo from "../../../components/assets/images/logoo.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  const [key, setKey] = useState([]);
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            
            <form action={"/search_product/" + key} method="">
            <input onChange={(e) => setKey(e.target.value)} type="text"  value={key} className="search-field" placeholder="Tìm kiếm sản phẩm..." style={{width:"600px"}}/>
            </form>
            <span className="text-right">All Category</span>

          </div>
           {/* <div class="header-search-container">
                         <form action={"/search_product/" + key} method="">

                             <input onChange={(e) => setKey(e.target.value)} type="text"  value={key} class="search-field" placeholder="Tìm kiếm sản phẩm..." />

                             <button class="search-btn">
                                 <ion-icon name="search-outline"></ion-icon>
                             </button>
                        </form>
                     </div> */}

          <div className='icon f_flex width'>

            <div className="login">
              <Link to='/Profile'>
              <i className='fa fa-user icon-circle'></i>
              </Link>
            </div>
            
            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                {/* <span>{CartItem.length === 0 ? "" : CartItem.length}</span> */}
              </Link>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
// <div class="header-search-container">
//                         <form action={"/pages/tim-kiem/" + key} method="">

//                             <input onChange={(e) => setKey(e.target.value)} type="text"  value={key} class="search-field" placeholder="Tìm kiếm sản phẩm..." />

//                             <button class="search-btn">
//                                 <ion-icon name="search-outline"></ion-icon>
//                             </button>
//                         </form>
//                     </div>