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
    switch(action.type) {
        case 'CHANGE_WORD':
            console.log(action.payload);
            return state;
        case 'ADD_NEW_WORD':
            return [...state, action.newWord];
        case 'RECEIVE_NEWWORD':
             return [...state, action.payload];
        case 'UPDATE_WORD':
            return [
                 ...state.slice(0, action.index),
                 action.updatedWord,
                ...state.slice(action.index + 1)
            ];
        case 'UPDATE_VALUE':
                const i = action.index;
                let value = action.value;
                if(action.name === 'lesson'){
                    value = parseInt(action.value, 10);
                }
                if(action.name === 'meaningCZ'){
                    value = convertStringToArray(action.value);
                }
                return [
                    ...state.slice(0, i),
                    {...state[i], [action.name]:value},
                    ...state.slice(i + 1)]
         case 'REMOVE_WORD':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case 'LOAD_FROM_JSON':
            // return [...state, action.arrayOfNewWords];
              console.log("JSON");
            return state;
        default:
            return state;
    }
    return state;

}
export default dictionary;