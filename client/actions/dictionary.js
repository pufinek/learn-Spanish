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
const settingsFirebase = firebase.database().ref('settings');
/**
 * Action creators for Dictionary - to learn Spanich
 */


export const REMOVE_WORD = 'REMOVE_WORD';
export const RECEIVE_NEWWORD = 'RECEIVE_NEWWORD';
export const UPDATE_WORD = 'UPDATE_WORD';


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
    console.log("update Firebase");      
}

/* mění favorite hodnotu ve Firebase / idealne predelat na zmenu libovolne hodnoty */
export function changeValue(key,word, name, value){
    console.log("zmena hodnoty",word, name, value);
    var refToChild = dictionaryFirebase.child(key);
    let updated = word;
    updated.favorite = value;
    refToChild.update(updated);
    /*return {
        type:UPDATE_WORD,
        key,
        payload:updated
    }*/
}

/**
 * action creator, ktery zpusoby prekresleni UI aby byla videt zmena ve FN
 * @param {*} updatedWord 
 */
function updateWord (updatedWord, key) {
     return {
        type:UPDATE_WORD,
        key,
        payload:updatedWord
     }
}

export function subscribeToDictionaryFirebase(){
    return function(dispatch){
        dictionaryFirebase.on('child_added', data => dispatch(receiveNewWord(data.val(), data.key)));
        dictionaryFirebase.on('child_changed', data => dispatch(updateWord(data.val(), data.key)) );
         dictionaryFirebase.on('child_removed', data => dispatch(removeWord(data.key)) );
        // dictionaryFirebase.on('value', function(data){ return{type:'ALL', payload:data.val()}} );
    }
}


function removeWord (key) {
     return {
        type:REMOVE_WORD,
        key
     }
};

export function removeWordFirebase(key){
    var refToChild = dictionaryFirebase.child(key); //path to child in Firebase
    refToChild.remove();   
}

