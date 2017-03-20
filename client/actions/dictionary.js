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
const dictionaryFirebase = firebase.database().ref('dictionary');

/**
 * Action creators for Dictionary - to learn Spanich
 */


export const UPDATE_WORD = 'UPDATE_WORD';
export const REMOVE_WORD = 'REMOVE_WORD';
export const LOAD_FROM_JSON = 'LOAD_FROM_JSON';
export const RECEIVE_NEWWORD = 'RECEIVE_NEWWORD';


/*--------------------ADD NEW ---------------- */
/**
 * přijímá nové doposud nezobrazené slovo z FireBase abychom je mohli zobrazit
 * 
 */
function receiveNewWord( newWord, key){
    return{
        type:RECEIVE_NEWWORD, 
        payload: newWord,
        key
    }
}

/**
 * vklada nove slovo do Firebase, pak se vyvolá 'child_added' a to vyvola receiveNewWord action creator
 * 
 */
export function addNewWord (newWord) {
     return function(){
        dictionaryFirebase.push(newWord);
     }
};


/*----------------------UPDATE-------------- */

/**
 * Aktualizace slova ve Firebase
 * @param {*} changed 
 */
export function updateWordFirebase(key,updatedWord){
    var refToChild = dictionaryFirebase.child(key); //path to child in Firebase
    refToChild.update(updatedWord);
        
}

/**
 * action creator, ktery zpusoby prekresleni UI aby byla videt zmena ve FN
 * @param {*} updatedWord 
 */
export function updateWord (updatedWord, key) {
     return {
        type: UPDATE_WORD,
        key,
        payload:updatedWord
     }
}

export function subscribeToDictionaryFirebase(){
    return function(dispatch){
        dictionaryFirebase.on('child_added', data => dispatch(receiveNewWord(data.val(), data.key)));
        dictionaryFirebase.on('child_changed', data => dispatch(updateWord(data.val(), data.key)) );
         dictionaryFirebase.on('child_removed', data => dispatch(removeWord(data.key)) );
    }
}




export function addWordsFromJSON (arrayOfNewWords) {
    return {
        type: LOAD_FROM_JSON,
        arrayOfNewWords
    }
}


export function removeWord (key) {
     return {
        type: REMOVE_WORD,
        key
     }
};

export function removeWordFirebase(key){
    var refToChild = dictionaryFirebase.child(key); //path to child in Firebase
    refToChild.remove();
        
}

