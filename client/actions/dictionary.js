/**
 * Action creators for Dictionary - to learn Spanich
 */

export const UPDATE_WORD = 'UPDATE_WORD';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const POKUS = 'POKUS';

export function addNewWord (newWord) {
    type: ADD_NEW_WORD,
    newWord
}

export function updateWord (updatedWord, index) {
    type: UPDATE_WORD,
    index,
    updatedWord 
}


export function removeWord (index) {
    type: REMOVE_WORD,
    index
};

export function pokus () {
    type: POKUS
};