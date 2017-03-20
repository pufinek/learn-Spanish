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
     let changedState = {...state};
    switch(action.type) {
        case 'RECEIVE_NEWWORD':
            const newRecievedObject = {...state};
            newRecievedObject[action.key]=action.payload;
             return  Object.assign({},state ,newRecievedObject);
        case 'UPDATE_WORD':
            changedState[action.key] = action.payload;
            return Object.assign({},state ,changedState);
         case 'REMOVE_WORD':
            changedState[action.key] = null;
            return Object.assign({},state ,changedState);
        case 'LOAD_FROM_JSON':
            // return [...state, action.arrayOfNewWords];
              console.log("JSON");
              return Object.assign({},state, action.payload)
        default:
            return state;
    }
    return state;

}
export default dictionary;