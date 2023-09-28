import { Link } from "react-router-dom";

function Profile_Setting() {
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

                            <div className="card">
                                <div className="card-body">
                                    <form className="row">
                                        <div className="col-md-10">
                                            <div className="form-row row">
                                                <div className="col-md-6">
                                                    <div className="col form-group mb-2">
                                                        <label class="mb-1">Họ Tên :</label>
                                                        <input type="text" className="form-control" value="Admin" />
                                                    </div> 
                                                    <div className="col form-group mb-2">
                                                        <label class="mb-1">Email :</label>
                                                        <input type="email" className="form-control" value="aaaaa@gmail.com" />
                                                    </div>
                                                    <div className="form-group col-md-6 mb-2">
                                                        <label class="mb-1">Tỉnh / Thành Phố :</label>
                                                        <select id="inputState" className="form-control" style={{width:"380px"}}>
                                                            <option> Choose...</option>
                                                            <option>Thành phố Hồ Chí Minh</option>
                                                            <option selected="0">Hồ Chí Minh</option>
                                                            <option >Bình Định</option>
                                                            <option>Tây Nink</option>
                                                            <option>Bình Thuận</option>
                                                            <option>Đăk lăk</option>
                                                        </select>
                                                    </div> {/*-- form-group end.// -*/}
                                                </div> {/*-- form-row.// -*/}

                                                <div class="col-md-6">
                                                    <div className="form-row">
                                                        <div className="col form-group mb-2">
                                                            <label class="mb-1">Name</label>
                                                            <input type="text" className="form-control" value="Vosidiy" />
                                                        </div> {/*-- form-group end.// -*/}
                                                        <div className="col form-group mb-2">
                                                        <label class="mb-1">Name</label>
                                                        <input type="text" className="form-control" value="Vosidiy" />
                                                    </div> {/*-- form-group end.// -*/}

                                                    <div className="col form-group mb-2">
                                                        <label class="mb-1">Số điện thoại :</label>
                                                        <input type="text" className="form-control" value="0123456789" />
                                                    </div> {/*-- form-group end.// -*/}

                                                    </div>
                                                </div>

                                            </div>


                                            <button className="btn btn-danger me-3 mt-2">Save</button>
                                            <button className="btn border border-warning mt-2" id="btn-change-pass">Change password</button>

                                            <br /><br /><br /><br /><br /><br />

                                        </div> {/*-- col.// -*/}
                                        <div className="col-md-2">
                                            {/* <img src={"./images/SlideCard/vt1.png"} width="100px" height="100px" className="img-md rounded-circle border" /> */}
                                        </div>  {/*-- col.// -*/}
                                    </form>
                                </div> {/*-- card-body.// -*/}
                            </div> {/*-- card .// -*/}



                        </main> {/*-- col.// -*/}
                    </div>

                </div> {/*-- container .//  -*/}
            </section>
            {/*-- ========================= SECTION CONTENT END// ========================= -*/}
        </div>

    );
}

export default Profile_Setting;