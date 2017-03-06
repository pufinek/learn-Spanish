/**
 * Reducer for dictionary
 */


function dictionary(state = {}, action) {
    console.log("action", action);
    switch(action.type) {
        case 'ADD_NEW_WORD':
            console.log("add reducer", newWord);
            return [...state, {
                newWord
            }];
        case 'UPDATE_WORD':
            return [
                 ...state.slice(0, i),
                {...state[i],  updatedWord },
                ...state.slice(i + 1)
            ];
         case 'REMOVE_WORD':
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
    return state;
}
export default dictionary;