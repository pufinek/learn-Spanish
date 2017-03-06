/**
 * Reducer for dictionary
 */


function dictionary(state = {}, action) {
    switch(action.type) {
        case 'ADD_NEW_WORD':
            return [...state, action.newWord];
        case 'UPDATE_WORD':
            return [
                 ...state.slice(0, action.index),
                 action.updatedWord,
                ...state.slice(action.index + 1)
            ];
         case 'REMOVE_WORD':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case 'POKUS':
            console.log("pokus");
            return state;
        default:
            return state;
    }
    return state;

}
export default dictionary;