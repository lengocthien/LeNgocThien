import httpApi from '../httpAxios'

function getAll(){
    return httpApi.get('topic/index');
}

function getById(id){
    return httpApi.get(`topic/show/${id}`);

}
function create(topic){
    return httpApi.post('topic/store',topic);
}
function update(id,topic){
    return httpApi.post('topic/update/'+id,topic);

}
function remove(id){
    return httpApi.delete(`topic/destroy/${id}`);

}
function getBySlug(slug){
    return httpApi.get("topic/show/"+slug);

} 

const topicservice = {
    getBySlug:getBySlug,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default topicservice;