//funkce - zamíchat slova v poli
// kontrola zda jsou 2 pole stejná

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
export function mixArray(array) {
    console.log("original fráze: ", array);
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log("preházená slova fráze: ", array);
    return array;
}

/**
 * compare two arrays
 * 
 */

export function compareArrays(array1, array2) {
        for(var i=0; i<array1.length; i++){
            if (array1[i]!==array2[i]){
                return false;
            }
        }
        return true;
}

/* */
export function isValueInArray(array, value) {
        if (isNaN(array)){return false};
        let index = array.findIndex(function(element){
                    return element == value;
            });
        console.log("index hledané hodnoty:", index);
        if(index!=-1){return true}
        return false;
}