import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('brand/index');
}

function getById(id){
    return httpApi.get('brand/show/'+id);

}
function create(brand){
    return httpApi.post('brand/store',brand);
}
function update(id,brand){
    return httpApi.post('brand/update/'+id,brand);

}
function remove(id){
    return httpApi.delete(`brand/destroy/${id}`);

}
function getBySlug(slug){
    return httpApi.get("brand/show/"+slug);

} 
 
const brandservice = {
    getBySlug:getBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default brandservice;