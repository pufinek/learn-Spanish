import firebase from 'firebase';


/**
 * Firebase initialize
 */
const firebaseConfig ={
    apiKey: "AIzaSyA3sXjuPTj_FXSdbGxpnFCCu1_qA-5DST8",
    authDomain: "es-education.firebaseapp.com",
    databaseURL: "https://es-education.firebaseio.com"
}
firebase.initializeApp(firebaseConfig);
const vocabulary = firebase.database().ref('vocabulary');

/**
 * Action creators for Dictionary - to learn Spanich
 */


export const UPDATE_WORD = 'UPDATE_WORD';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const LOAD_FROM_JSON = 'LOAD_FROM_JSON';
export const POKUS = 'POKUS';
export const RECEIVE_NEWWORD = 'RECEIVE_NEWWORD';

/*export function addNewWord (newWord) {
     return {
        type: ADD_NEW_WORD,
        newWord
     }
}*/

function receiveNewWord(newWord){
    return{
        type:RECEIVE_NEWWORD, 
        payload: newWord
    }
}
function changeWordFb(changed){
    return{
        type:CHANGE_WORD, 
        payload: changed
    }
}

export function subscribeToVocabulary(){
    return function(dispatch){
        vocabulary.on('child_added', data => dispatch(receiveNewWord(data.val())));
        vocabulary.on('child_changed', data => dispatch(changeWordFb(data.val())) );
    }
}


export function addNewWord (newWord) {
     return function(){
         vocabulary.push(newWord);
     }
};


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
/*export function removeWord (index) {
     return dispatch => Dictionary_Firebase.child(index).remove();
};*/
