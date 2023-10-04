import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('user/index');
}

function getById(id){
    return httpApi.get('user/show/'+id);

}
function create(user){
    return httpApi.post('user/store',user);
}
function update(id,user){
    return httpApi.post('user/update/'+id,user);

}
function remove(id){
    return httpApi.delete(`user/destroy/${id}`);

}

const userservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default userservice;