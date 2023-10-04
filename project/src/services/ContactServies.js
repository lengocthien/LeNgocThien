import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('contact/index');
}

function getById(id){
    return httpApi.get(`contact/show/${id}`);

}
function create(contact){
    return httpApi.post('contact/store',contact);
}
function update(id,contact){
    return httpApi.post('contact/update/'+id,contact);

}
function remove(id){
    return httpApi.delete(`contact/destroy/${id}`);

}

const contactservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default contactservice;