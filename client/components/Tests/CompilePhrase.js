import React from 'react';
import {mixArray, compareArrays} from '../../helpers/tests';
//import Checkbox from 'material-ui/Checkbox';


const CompilePhrase = React.createClass({ 

componentDidMount(){
    //odpálí se fce, která vytvoří prázdné pole reseniUzivatele, sem se budou seskládávat slova
    let array1 = ["Aa", "b", "c"];
    let array2 = ["aa", "b", "c"];
    var result = compareArrays(array1, array2);
},
_splitPhraseToWords(phrase){
    var words = phrase.split(" ");
    console.log(words);
    return words;
},
_handleChecked(e, word){
    //pri zakliknuti se vloží do pole pod následný index slovo - při odkliknutí se odstraní a pole se aktualizuje bez této hodnoty (pozor na null)
    //pri kontrole se porovná pole sestavené z fráze a reseniUzivatele zda jsou na stejných indexech stejná slova
    if(e.target.checked=="false"){ //vybrano toto slovo
        e.target.checked="true";
        this.props.actionsTests.compilePhraseAddWord(word);
    }
    else{
        console.log("mažeme");
        e.target.checked="true";
        this.props.actionsTests.compilePhraseRemoveWord(word);
    }

},

    render() {
        var phrase = "Quiero matarte en el parque";
        var wordsOriginal= this._splitPhraseToWords(phrase);
        var wordsMixed = mixArray(wordsOriginal);

        const words = Object
					.keys(wordsMixed)
					.map((index) => {
						return (<label className="compile-word" key={index}> {wordsMixed[index]}
                                 <input type="checkbox" checked="false" onClick={(e) => this._handleChecked(e, wordsMixed[index])} style={{display:'none'}} />
                                  
                                </label>)
					});

                
    return (
      <div className="test">
            
          <h2>Test - sestav frázi</h2>

          <div className="words-offer">{words}</div>

      </div>
    )
}
});

export default CompilePhrase;