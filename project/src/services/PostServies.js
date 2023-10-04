import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('post/index');
}
function getById(id) {
    return httpAxios.get('/post/show/' + id);
}
function create(post) {
    return httpAxios.post('/post/store', post)
}
function update(id,post) {
    return httpAxios.post('/post/update/' + id, post);
}
function remove(id) {
    return httpAxios.delete(`/post/destroy/${id}`);
}
function getPostById(type,limit){
    return httpAxios.get(`post_list/${type}/${limit}`); 
}
function getBySlug(slug){
    return httpAxios.get("post/show/"+slug);

} 
function getPostBySlug(slug)
{
    return httpAxios.get(`post_detail/${slug}`);
}

function getPostAll(limit)
{
    return httpAxios.get(`post_all/${limit}`);
}
function getPostByPostId(limit,topic_id){
    return httpAxios.get(`post_topic/${limit}/${topic_id}`);

}
const postservice = {
    getPostByPostId:getPostByPostId,
    getPostAll:getPostAll,
    getPostBySlug:getPostBySlug,
    getBySlug:getBySlug,
    getPostById:getPostById,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default postservice;