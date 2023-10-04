import httpApi from '../httpAxios'

function getProductByCategoryId(limit,category_id){
    return httpApi.get(`product_category/${limit}/${category_id}`);

}
function getProductByBrandId(limit,brand_id){
    return httpApi.get(`product_brand/${limit}/${brand_id}`);

}

function getProductAll(limit)
{
    return httpApi.get(`product_all/${limit}`);
}

function getProductHome(limit,category_id){
    return httpApi.get(`product_home/${limit}/${category_id}`);

}

function getProductBySlug(slug)
{
    return httpApi.get(`product_detail/${slug}`);
}

function getAll(){
    return httpApi.get('product/index');
}

function getById(id){
    return httpApi.get(`product/show/${id}`);

}
function create(product){
    return httpApi.post('product/store',product);
}
function update(id,product){
    return httpApi.post('product/update/'+id,product);

}
function remove(id){
    return httpApi.delete(`product/destroy/${id}`);

}




const productservice = {
    getProductByBrandId:getProductByBrandId,
    getProductByCategoryId:getProductByCategoryId,
    getProductHome:getProductHome,
    getProductBySlug:getProductBySlug,
    getProductAll: getProductAll,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default productservice;