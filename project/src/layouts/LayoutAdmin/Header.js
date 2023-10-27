import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header " style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                
    
                </li>
                <Link className="nav-link active  text-dark" to="/admin">
                <FontAwesomeIcon icon={faArrowLeft}/>
                  </Link>
                  
                {/* <li className="nav-item bg-white" style={{borderRadius:"20px"}}>
                  <Link className="nav-link active  text-dark" to="/">
                    TRỞ VỀ TRANG CHỦ
                  </Link>
                  
                </li> */}
                
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark" type="submit"style={{backgroundColor:"rgba(133, 20, 20, 0.5)"}}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;