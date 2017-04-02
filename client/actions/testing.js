
export const COMPILE_PHRASE_ADD_WORD = 'COMPILE_PHRASE_ADD_WORD';
export const COMPILE_PHRASE_REMOVE_WORD = 'COMPILE_PHRASE_REMOVE_WORD';

export function compilePhraseAddWord (word) {
    console.log("action");
     return {
        type:COMPILE_PHRASE_ADD_WORD,
        word
     }
};
export function compilePhraseRemoveWord (word) {
    console.log("action");
     return {
        type:COMPILE_PHRASE_REMOVE_WORD,
        word
     }
};
