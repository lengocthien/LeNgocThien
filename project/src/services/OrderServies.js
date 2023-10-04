import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('order/index');
}

function getById(id){
    return httpApi.get(`order/show/${id}`);

}
function create(order){
    return httpApi.post('order/store',order);
}
function update(id,order){
    return httpApi.post('order/update/'+id,order);

}
function remove(id){
    return httpApi.delete(`order/destroy/${id}`);

}

const orderservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default orderservice;