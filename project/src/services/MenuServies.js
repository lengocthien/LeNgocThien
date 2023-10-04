import httpApi from '../httpAxios'


//backend
function getAll(){
    return httpApi.get('menu/index');
}

function getById(id){
    return httpApi.get(`menu/show/${id}`);

}
function create(menu){
    return httpApi.post('menu/store',menu);
}
function update(id,menu){
    return httpApi.post('menu/update/'+id,menu);

}
function remove(id){
    return httpApi.delete(`menu/destroy/${id}`);

}
// frontend
function getByParentId(position,parent_id)
{
  return httpApi.get(`menu_list/${position}/${parent_id}`);
}
const menuservice = {
    getByParentId:getByParentId,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default menuservice;