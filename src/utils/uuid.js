import {v4 as uuidv4} from 'uuid'
export const getUUID = ()=>{
    let uuid = localStorage.getItem('UUID')
    if(!uuid) {
        localStorage.setItem('UUID',uuidv4())
    }
    console.log(uuid);
    return uuid
}