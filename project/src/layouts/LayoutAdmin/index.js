import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function LayoutAdmin() {
  return (
    <>
      <Header />
      <section className="maincontent">
        <div className="container-fluid py-3">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LayoutAdmin;
