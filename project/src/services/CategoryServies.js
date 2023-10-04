import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('category/index');
}

function getById(id){
    return httpApi.get(`category/show/${id}`);

}
function create(category){
    return httpApi.post('category/store',category);
}
function update(id,category){
    return httpApi.post('category/update/'+id,category);

}
function remove(id){
    return httpApi.delete(`category/destroy/${id}`);

}
function getCategoryByParentId(parent_id){
    return httpApi.get(`category_list/${parent_id}`);

}  
function getBySlug(slug){
    return httpApi.get("category/show/"+slug);

} 


const categoryservice = {
    getBySlug:getBySlug,
    getCategoryByParentId:getCategoryByParentId,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default categoryservice;