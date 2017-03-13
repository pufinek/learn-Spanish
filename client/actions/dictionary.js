/**
 * Action creators for Dictionary - to learn Spanich
 */

export const UPDATE_WORD = 'UPDATE_WORD';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const LOAD_FROM_JSON = 'LOAD_FROM_JSON';
export const POKUS = 'POKUS';


export function addNewWord (newWord) {
     return {
        type: ADD_NEW_WORD,
        newWord
     }
}

export function addWordsFromJSON (arrayOfNewWords) {
    return {
        type: LOAD_FROM_JSON,
        arrayOfNewWords
    }
}

export function updateWord (index, updatedWord) {
     return {
        type: UPDATE_WORD,
        index,
        updatedWord
     }
}

export function updateValue (index, name, value) {
     return {
        type: UPDATE_VALUE,
        index,
        name, 
        value
     }
}


export function removeWord (index) {
     return {
        type: REMOVE_WORD,
        index
     }
};

export function pokus () {
     return {
        type: POKUS
     }
};