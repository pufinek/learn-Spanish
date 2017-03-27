import {convertStringToArray} from '../helpers/dictionary';
/**
 * Reducer for dictionary
 */
function updateValue(array, action){
   return array.map( (item, index) => {
        if(index != action.id){
            return item;
        }
        return{
            ...item,
            ...action.item
        }
   });
}

function dictionary(state = {}, action) {
    console.log("action type:",action.type);
    switch(action.type) {
        case 'RECEIVE_NEWWORD':
            const newRecievedObject = {...state};
            newRecievedObject[action.key]=action.payload;
             return  Object.assign({},state ,newRecievedObject);
        case 'UPDATE_WORD':
            console.log("action payload", action.payload);
            let changedState = {...state};
            changedState[action.key] = action.payload;
            return Object.assign({},state ,changedState);
         case 'REMOVE_WORD':
           let changedState2 = {...state};
            changedState2[action.key] = null;
            return Object.assign({},state ,changedState2);
        case 'ALL': 
             return Object.assign({},state ,action.payload);
        default:
            return state;
    }
    return state;

}
export default dictionary;