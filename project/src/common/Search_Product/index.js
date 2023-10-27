import { Link, useParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import productservice from "../../services/ProductServies";
import ProductItems from "../../layouts/LayoutSite/productdetail/ProductItem";
import Categories from "../../components/Mainpage/Categories";

import { useEffect, useState } from "react";
import Catg from "../../components/shops/Catg";

function Search_Product() {
    const { key } = useParams();
    const [limit, setLimit] = useState(8);
    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(1);
    const [end_page, setEnd] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };


    useEffect(function () {
        (async function () {
            await productservice.getSearchProduct(key, limit, page).then(function (res) {
                setProducts(res.data.products);
                setEnd(res.data.end_page);
            })
        })();
    }, [page]);
    if (products.length > 0) {
        return (
            <div className="product-all">
                <div className="container mb-5">
                    <div className="title-proall mb-3">
                        <h3 id="h3-pro" className="text-center">Tìm kiếm</h3>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                                {/* <Categories />
                                <Catg /> */}
                            </div>
                        </div>
                        <div className="col-9">
                            <h5 id="h3-pro" className="mb-2">Kết quả tìm kiếm cho "{key}"</h5>

                            <div className="content-pro">
                                <div class="product-grid">
                                    {products.map((pro, index) => {
                                        return (<ProductItems product={pro} key={index} />);
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="page-navigation ">
                            <div className="pagination justify-content-center">
                                <Pagination page={page} count={end_page} onChange={handleChange} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="product-all">
                <div className="container mb-5">
                    <div className="title-proall mb-3">
                        <h3 id="h3-pro" className="text-center">Tìm kiếm</h3>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div class="sidebar  has-scrollbar" data-mobile-menu="true">
                                <Categories />
                                {/* <List_Brand /> */}
                            </div>
                        </div>
                        <div className="col-9">
                            <div style={{ height: "100px" }}></div>
                            <div className="content-pro row">
                                <div className="col-8">
                                    <h6 className="text-center fs-5">Không tìm thấy sản phẩm</h6>
                                </div>
                                <div className="col-4"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Search_Product;