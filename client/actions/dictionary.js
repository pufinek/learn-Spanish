/**
 * Action creators for Dictionary - to learn Spanich
 */

export const UPDATE_WORD = 'UPDATE_WORD';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';

export function addNewWord (newWord) {
    type: ADD_NEW_WORD,
    newWord
}

//i is order of word in state, not wordId
export function updateWord (updatedWord, i) {
    type: UPDATE_WORD,
    i,
    updatedWord 
}

export function removeWord (word, i) {
    type: REMOVE_WORD,
    i,
    word 
};