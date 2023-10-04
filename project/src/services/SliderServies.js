import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('slider/index');
}

function getById(id){
    return httpApi.get('slider/show/'+id);

}
function create(slider){
    return httpApi.post('slider/store',slider);
}
function update(id,slider){
    return httpApi.post('slider/update/'+id,slider);

}
function remove(id){
    return httpApi.delete(`slider/destroy/${id}`);

}
function getByPosition(position){
    return httpApi.get(`slider_list/${position}`);

}

const sliderservice = {
    getByPosition:getByPosition,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default sliderservice;