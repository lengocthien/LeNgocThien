import { Link } from "react-router-dom";
//  import "./style.css";
function My_Profile() {
    return (
        <div className="">
            {/* <!-- ========================= SECTION PAGETOP ========================= --> */}
            <section class="section-pagetop" style={{ backgroundColor: "#fff0e5", height: "115px" }}>
                <div class="container">
                    <h2 class="title-page fs-4">Tài khoản của tôi</h2>
                </div>{/* <!-- container //  -->*/}
            </section>
            {/* <!-- ========================= SECTION PAGETOP END// ========================= -->*/}

            {/* <!-- ========================= SECTION CONTENT ========================= -->*/}
            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">
                            <nav class="list-group">
                                <Link class="list-group-item active" to="/pages/profile">Quản lý tài khoản</Link>
                                <Link class="list-group-item" to="/pages/profile/address-profile"> Địa chỉ </Link>
                                <Link class="list-group-item" to="/pages/profile/order-profile"> Đơn hàng </Link>
                                <Link class="list-group-item" to="/pages/profile/setting-profile"> Cài đặt </Link>
                                {/* <Link class="list-group-item" to="/">Trang chủ</Link> */}
                            </nav>
                        </aside> {/*<!-- col.// -->*/}
                        <main class="col-md-9">

                            <article class="card mb-3">
                                <div class="card-body">

                                    <figure class="icontext">
                                        <div class="d-flex">
                                            <div class="icon-avt ">
                                                <img class="rounded-circle img-sm border" src={"./images/SlideCard/vt1.png"} width="100px" height="100px" />
                                            </div>
                                            {/* <img src={"./images/SlideCard/vt1.png"} className="img-xs border" /> */}

                                            <div class="text ms-3">
                                                <strong> Ngoc Thien </strong>
                                                <p class="mb-2"> aaaa@gmail.com  </p>
                                                <a href="#" class="btn btn-danger btn-sm">Edit</a>
                                            </div>

                                        </div>

                                    </figure>
                                    <div class="border mt-3 mb-2"></div>

                                    <p class="text-address">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg> &nbsp;<i>Địa chỉ :</i><br />

                                        <i class="ms-5" style={{fontSize:"17px"}}>15A, Tân Hòa 2, Phường Hiệp Phú, Q9, TPHCM</i>
                                        <Link to="#" class="btn border border-danger btn-sm ms-3"> Edit</Link>
                                    </p>



                                    <article class="card-group card-stat">
                                        <figure class="card bg">
                                            <div class="p-3">
                                                <h4 class="title">38</h4>
                                                <span>Đơn hàng</span>
                                            </div>
                                        </figure>
                                        <figure class="card bg">
                                            <div class="p-3">
                                                <h4 class="title">5</h4>
                                                <span>Chưa giao</span>
                                            </div>
                                        </figure>
                                        <figure class="card bg">
                                            <div class="p-3">
                                                <h4 class="title">12</h4>
                                                <span>Chờ giao hàng</span>
                                            </div>
                                        </figure>
                                        <figure class="card bg">
                                            <div class="p-3">
                                                <h4 class="title">50</h4>
                                                <span>Đã giao</span>
                                            </div>
                                        </figure>
                                    </article>


                                </div> {/*<!-- card-body .// -->*/}
                            </article> {/*<!-- card.// -->*/}

                            <article class="card  mb-3">
                                <div class="card-body">
                                    <h5 class="card-title mb-4">Đơn hàng gần đây </h5>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <figure class="itemside  mb-3">
                                                <div class="aside d-flex flex-row"><img src={"./images/SlideCard/vt1.png"} width="100px" height="100px" class="border img-sm" /></div>
                                                <figcaption class="info">
                                                    <time class="text-muted" style={{ fontSize: "15px" }}><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                    <p class="" style={{ fontSize: "16px" }}>Great book name goes here </p>
                                                    <span class="text-info" style={{ fontSize: "16px",fontWeight: "bold" }}>Order confirmed </span>
                                                </figcaption>
                                            </figure>
                                        </div> {/*<!-- col.// -->*/}
                                        <div class="col-md-6">
                                            <figure class="itemside  mb-3">
                                                <div class="aside"><img src={"./images/SlideCard/vt1.png"} class="border img-sm" width="100px" height="100px" /></div>
                                                <figcaption class="info">
                                                    <time class="text-muted" style={{ fontSize: "15px" }}><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                    <p style={{ fontSize: "16px" }}>How to be rich</p>
                                                    <span class="text-info" style={{ fontSize: "16px",fontWeight: "bold" }}>Departured</span>
                                                </figcaption>
                                            </figure>
                                        </div> {/*<!-- col.// -->*/}
                                        <div class="col-md-6">
                                            <figure class="itemside mb-3">
                                                <div class="aside"><img src={"./images/SlideCard/vt1.png"} width="100px" height="100px" class="border img-sm" /></div>
                                                <figcaption class="info">
                                                    <time class="text-muted" style={{ fontSize: "15px" }}><i class="fa fa-calendar-alt"></i> 12.09.2019</time>
                                                    <p style={{ fontSize: "16px" }}>Harry Potter book </p>
                                                    <span class="text-info" style={{ fontSize: "16px",fontWeight: "bold" }}>Shipped  </span>
                                                </figcaption>
                                            </figure>
                                        </div> {/*<!-- col.// -->*/}
                                    </div> {/*<!-- row.// -->*/}

                                    <a href="#" class="btn btn-outline-danger btn-block" style={{ width: "100%" }}> See all orders <i class="fa fa-chevron-down"></i>  </a>
                                </div>{/* <!-- card-body .// -->*/}
                            </article> {/*<!-- card.// -->*/}

                        </main> {/*<!-- col.// -->*/}
                    </div>

                </div> {/*<!-- container .//  -->*/}
            </section>
            {/*<!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>

    );
}

export default My_Profile;