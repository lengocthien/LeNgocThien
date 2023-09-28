import { Link } from "react-router-dom";

function Profile() {
    return (
        <div classNameName="container">
            <section class="section-pagetop" style={{ backgroundColor: "#fff0e5", height: "115px" }}>
                <div class="container">
                    <h2 class="title-page fs-4">Tài khoản của tôi</h2>
                </div>{/* <!-- container //  -->*/}
            </section>            {/*-- ========================= SECTION PAGETOP END// ========================= -*/}


            {/*-- ========================= SECTION CONTENT ========================= -*/}
            <section className="section-content padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-3">
                            <nav className="list-group">
                                <Link class="list-group-item active" to="/pages/profile">Quản lý tài khoản</Link>
                                <Link class="list-group-item" to="/pages/profile/address-profile"> Địa chỉ </Link>
                                <Link class="list-group-item" to="/pages/profile/order-profile"> Đơn hàng </Link>
                                <Link class="list-group-item" to="/pages/profile/setting-profile"> Cài đặt </Link>
                            </nav>
                        </aside> {/*-- col.// -*/}
                        <main className="col-md-9">
                            <article className="card mb-4">
                                <header className="card-header">
                                    <a href="#" className="float-right"> <i className="fa fa-print"></i> Print</a>
                                    <strong className="d-inline-block me-3" style={{fontSize:"16px"}}>Order ID: 6123456789</strong>
                                    <span  style={{fontSize:"16px"}}>Ngày đặt : 16 December 2018</span>
                                </header>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h6 className="text-muted">Chuyển tới :</h6>
                                            <p>Ahihi<br />
                                                SĐT : +0123456789  Email: aaaa@gmail.com <br />
                                                Địa chỉ : Q9, TPHCM <br />
                                                P.O. Box: 100123
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="text-muted">Payment</h6>
                                            <span className="text-success">
                                                <i className="fab fa-lg fa-cc-visa"></i>
                                                Visa  **** 4216
                                            </span>
                                            <p>Subtotal: $356 <br />
                                                Shipping fee:  $56 <br />
                                                <span className="b">Total:  $456 </span>
                                            </p>
                                        </div>
                                    </div> {/*-- row.// -*/}
                                </div> {/*-- card-body .// -*/}
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody><tr>
                                            <td width="65">
                                                <img src={"./images/SlideCard/vt1.png"} className="img-xs border" />
                                            </td>
                                            <td>
                                                <p className="title mb-0">Product name goes here </p>
                                                <var className="price text-muted">USD 145</var>
                                            </td>
                                            <td> Seller <br /> Nike clothing </td>
                                            <td width="250"> <a href="#" className="btn btn-outline-primary me-2">Track order</a>
                                                <div className="dropdown d-inline-block">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Return</a>
                                                        <a href="#" className="dropdown-item">Cancel order</a>
                                                    </div>
                                                </div> {/*-- dropdown.// -*/}
                                            </td>
                                        </tr>
                                            <tr>
                                                <td>
                                                <img src={"./images/SlideCard/vt1.png"} className="img-xs border" />
                                                </td>
                                                <td>
                                                    <p className="title mb-0">Another name goes here </p>
                                                    <var className="price text-muted">USD 15</var>
                                                </td>
                                                <td> Seller <br /> ABC shop </td>
                                                <td>
                                                    <a href="#" className="btn btn-outline-primary me-2">Track order</a>
                                                    <div className="dropdown d-inline-block">
                                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">Return</a>
                                                            <a href="#" className="dropdown-item">Cancel order</a>
                                                        </div>
                                                    </div> {/*-- dropdown.// -*/}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <img src={"./images/SlideCard/vt1.png"} className="img-xs border" />
                                                </td>
                                                <td>
                                                    <p className="title mb-0">The name of the product  goes here </p>
                                                    <var className="price text-muted">USD 145</var>
                                                </td>
                                                <td> Seller <br /> Wallmart </td>
                                                <td> <a href="#" className="btn btn-outline-primary me-2">Track order</a>
                                                    <div className="dropdown d-inline-block">
                                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">Return</a>
                                                            <a href="#" className="dropdown-item">Cancel order</a>
                                                        </div>
                                                    </div> {/*-- dropdown.// -*/}
                                                </td>
                                            </tr>
                                        </tbody></table>
                                </div> {/*-- table-responsive .end// -*/}
                            </article> {/*-- card order-item .// -*/}

                            <article className="card order-item mb-4">
                                <header className="card-header">
                                    <a href="#" className="float-right"> <i className="fa fa-print"></i> Print</a>
                                    <strong className="d-inline-block mr-3">Order ID: 123456789</strong>
                                    <span>Order Date: 16 December 2018</span>
                                </header>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h6 className="text-muted">Delivery to</h6>
                                            <p>Michael Jackson <br />
                                                Phone +1234567890 Email: myname@pixsellz.com <br />
                                                Location: Home number, Building name, Street 123,  Tashkent, UZB <br />
                                                P.O. Box: 100123
                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="text-muted">Payment</h6>
                                            <span className="text-success">
                                                <i className="fab fa-lg fa-cc-visa"></i>
                                                Visa  **** 4216
                                            </span>
                                            <p>Subtotal: $356 <br />
                                                Shipping fee:  $56 <br />
                                                <span className="b">Total:  $456 </span>
                                            </p>
                                        </div>
                                    </div> {/*-- row.// -*/}
                                </div> {/*-- card-body .// -*/}
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody><tr>
                                            <td width="65">
                                            <img src={"./images/SlideCard/vt1.png"} className="img-xs border" />
                                            </td>
                                            <td>
                                                <p className="title mb-0">Product name goes here </p>
                                                <var className="price text-muted">USD 145</var>
                                            </td>
                                            <td> Seller <br /> Nike clothing </td>
                                            <td width="250"> <a href="#" className="btn btn-outline-primary me-2">Track order</a>
                                                <div className="dropdown d-inline-block">
                                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">Return</a>
                                                        <a href="#" className="dropdown-item">Cancel order</a>
                                                    </div>
                                                </div> {/*-- dropdown.// -*/}
                                            </td>
                                        </tr>
                                            <tr>
                                                <td>
                                                <img src={"./images/SlideCard/vt1.png"} className="img-xs border" />
                                                </td>
                                                <td>
                                                    <p className="title mb-0">Another name goes here </p>
                                                    <var className="price text-muted">USD 15</var>
                                                </td>
                                                <td> Seller <br /> ABC shop </td>
                                                <td> <a href="#" className="btn btn-outline-primary me-2">Track order</a>
                                                    <div className="dropdown d-inline-block">
                                                        <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">Return</a>
                                                            <a href="#" className="dropdown-item">Cancel order</a>
                                                        </div>
                                                    </div> {/*-- dropdown.// -*/}
                                                </td>
                                            </tr>
                                        </tbody></table>
                                </div> {/*-- table-responsive .end// -*/}
                            </article> {/*-- card order-item .// -*/}


                        </main> {/*-- col.// -*/}
                    </div>

                </div> {/*-- container .//  -*/}
            </section>
        </div>
    );
}

export default Profile;