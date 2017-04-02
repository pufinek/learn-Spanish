function testing(state = [], action) {
   console.log("action type:",action.type);
    switch(action.type) {
        case 'COMPILE_PHRASE_ADD_WORD':
            return [...state, action.word];
        case 'COMPILE_PHRASE_REMOVE_WORD':
            console.log("remove "+action.word); 
            var testing = [...state];
            var index = testing.findIndex(function(element){
                    return element == action.word;
            });
            return [...state.slice(0,index), ...state.slice(index+1)];
    }

    return state;
}
export default testing;