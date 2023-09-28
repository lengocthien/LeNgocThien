import { Link } from "react-router-dom";

function Profile_Address() {

    return (
        <div className="">
            {/* <!-- ========================= SECTION PAGETOP ========================= --> */}
            <section class="section-pagetop" style={{ backgroundColor: "#fff0e5", height: "115px" }}>
                <div class="container">
                    <h2 class="title-page fs-4">Tài khoản của tôi</h2>
                </div>{/* <!-- container //  -->*/}
            </section>
            {/*  <!-- ========================= SECTION PAGETOP END// ========================= -->*/}


            {/*   <!-- ========================= SECTION CONTENT ========================= -->*/}
            <section class="section-content padding-y">
                <div class="container">

                    <div class="row">
                        <aside class="col-md-3">
                            <nav class="list-group">
                                <Link class="list-group-item active" to="/pages/profile">Quản lý tài khoản</Link>
                                <Link class="list-group-item" to="/pages/profile/address-profile"> Địa chỉ </Link>
                                <Link class="list-group-item" to="/pages/profile/order-profile"> Đơn hàng </Link>
                                <Link class="list-group-item" to="/pages/profile/setting-profile"> Cài đặt </Link>
                            </nav>
                        </aside> {/* <!-- col.// -->*/}
                        <main class="col-md-9">
                        
                            <a href="#" class=" borderbtn btn-light mb-3"><i class="fa fa-plus"></i> Add new address </a>

                            <div class="row">
                                <div class="col-md-6">
                                    <article class="box mb-4">
                                        <h6>London, United Kingdom</h6>
                                        <p>Building: Nestone  Floor: 22, Aprt: 12  </p>
                                        <a href="#" class="btn btn-light disabled"> <i class="fa fa-check"></i> Default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                                    </article>
                                </div>  {/* <!-- col.// -->*/}
                                <div class="col-md-6">
                                    <article class="box mb-4">
                                        <h6>Tashkent, Uzbekistan</h6>
                                        <p>Building one  Floor: 2, Aprt: 32  </p>
                                        <a href="#" class="btn btn-light">Make default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                                    </article>
                                </div> {/*  <!-- col.// -->*/}
                                <div class="col-md-6">
                                    <article class="box mb-4">
                                        <h6>Moscow, Russia</h6>
                                        <p>Lenin street  Building A, Floor: 3, Aprt: 32  </p>
                                        <a href="#" class="btn btn-light">Make default</a> <a href="#" class="btn btn-light"> <i class="fa fa-pen"></i> </a>   <a href="#" class="btn btn-light"> <i class="text-danger fa fa-trash"></i>  </a>
                                    </article>
                                </div>  {/* <!-- col.// -->*/}
                            </div> {/* <!-- row.// -->*/}

                        </main> {/* <!-- col.// -->*/}
                    </div>

                </div> {/* <!-- container .//  -->*/}
            </section>
            {/*  <!-- ========================= SECTION CONTENT END// ========================= -->*/}
        </div>
    )
}




export default Profile_Address;