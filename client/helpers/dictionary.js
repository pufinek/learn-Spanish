
/**
 * převede řetězec oddělený ; na pole s těmito hodnotami
 * @param {řetězec s významy oddělenými ; } string 
 */
export function convertStringToArray(string){
	let arrayCz = string.split(";");
    for(var i=0; i<arrayCz.length; i++){
        arrayCz[i] = arrayCz[i].trim();
    }
    return arrayCz
}

export function convertArrayToString(arrayCZ){
	let string = arrayCZ[0];
    for(var i=1; i<arrayCZ.length; i++){
        string = string +"; "+arrayCZ[i];
    }
    return string
}

/**
 * možnosti: 
 * 1) prvni a posledni pismeno - zbetk nahrazen ***
 * 2) prvni a posledni pismeni - zbytek nahrazen * podle počtu nahrazených znaků
 * 3) prvni a posledni dve pismena - zbytek nahrazen ***
 * @param {*} string 
 * @param {*} fixedStars  - true/false  - (true) return string will have fixed count of stars, no metter how long is the original string
 */

export function codeString(string, fixedStars, visibleLetters){
        switch(string.length){
            case 0:
            case 1: return  string;
            case 2: return codeStringVariableCountStars(string);  // *a
            case 3: 
            case 4: if(fixedStars) {return codeStringFixedCountStars(string, 1) } else {return codeStringVariableCountStars(string)} ; 
            //pro 5 a více už je možné mít i první a poslední 2 písmena
            default: 
                if(fixedStars) {
                    return codeStringFixedCountStars(string, visibleLetters);
                } else { 
                    return codeStringVariableCountStars(string);
                }
        }
}


export function codeStringFixedCountStars(string, visibleLetters){
    let  codedString="";
    let firstLetter="";
    let lastLetter="";
    if(visibleLetters == 1){
        firstLetter = string.slice(0,1);
        lastLetter = string.substring(string.length-1) ;
    }else{
        //visible 2 letters (jen pokud je delka 5 a vice)
        firstLetter = string.slice(0,2);
        lastLetter = string.substring(string.length-2) ;
    }
    codedString = firstLetter.concat("***").concat(lastLetter);
    return codedString;
}

export function codeStringVariableCountStars(string){
    /**vždy první a poslední */
    let  codedString="";
    if(string.length>=3){
        let firstLetter = string.slice(0,1);
        let lastLetter = string.substring(string.length-1) ;
        let middle = string.substring(1, string.length-1);
        let middleStars = "";

        for(var i=0; i<middle.length;i++){
            middleStars=middleStars+"*";
        }
        codedString=firstLetter+middleStars+lastLetter;
    }
    if(string.length==2){
        let lastLetter = string.substring(string.length-1) ;
        codedString = "*"+lastLetter;
    }
    return codedString;
}