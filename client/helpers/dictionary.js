
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