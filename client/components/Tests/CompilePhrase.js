import React from 'react';
import {mixArray, compareArrays, isValueInArray} from '../../helpers/tests';
//import Checkbox from 'material-ui/Checkbox';


class CompilePhrase extends React.Component{ 
    constructor(){
        super();
        var phrase = "Quiero en matarte en el parque 123";
        var phraseArray=this._splitPhraseToWords(phrase);
        var wordsOriginal= this._splitPhraseToWords(phrase);
        var wordsMixed = mixArray(wordsOriginal);

        this.state={phrase:phrase,
                    phraseArray:phraseArray, 
                    wordsMixed:wordsMixed,
                    userAnswer:[],
                    showResult:false
                    };

    }

componentWillMount(){
//pod klíč z url vyložit zadani testu, objekt oklíčovanými slovy, správnou pozicí ve věte a odpoveď uživatele
//var testId = this.props.params.testId;
//var phrase = this.props.phrase;
}

_splitPhraseToWords(phrase){
    var words = phrase.split(" ");
    return words;
}

_handleChecked(e, word){
    e.preventDefault();
    let userAnswer = [...this.state.userAnswer];
    userAnswer.push(word);
    this.setState({userAnswer});

}
_handleRemove(e, index){
    e.preventDefault();
    let userAnswer = [...this.state.userAnswer];
    userAnswer = [...userAnswer.slice(0, index), ...userAnswer.slice(index+1)];
    this.setState({userAnswer});

}
checkAnswer(e){
    e.preventDefault();
    var vocavularyId = this.props.params.testId;
    if(compareArrays(this.state.phraseArray, this.state.userAnswer)){
        //answer is correct
        //fire function to add +1 to this phrase in dictionary in FB
        console.log("answer is correct");
    }
    else{
        console.log("answer is NOT correct",this.state.phraseArray,this.state.userAnswer);
    }
    this.setState({showResult:true});
}

    render() {
        

        const userAnswer = Object
					.keys(this.state.userAnswer)
					.map((index) => {
						return ( <span key={index} className="compile-word-answer" style={{margin: '0 5px'}} onClick={(e) => this._handleRemove(e, index)}>{this.state.userAnswer[index]}</span>
                    
					);
					});

        const words = Object
					.keys(this.state.wordsMixed)
					.map((key) => {
						return ( <span key={key}  className="compile-word" onClick={(e) => this._handleChecked(e, this.state.wordsMixed[key])}>{this.state.wordsMixed[key]}</span>
					);
                    });

                
    return (
      <div className="test">
            
          <h2>Test - sestav frázi</h2>

          <div className="words-offer">{words}</div>
          <div className="words-answer" style={{margin:'20px 5px', }}>Fráze: {userAnswer}</div>

          {
              (this.state.showResult) ? (
                (compareArrays(this.state.phraseArray, this.state.userAnswer)) ? 
                    <div>
                        <span style={{color:'green'}} className="lnr lnr-smile"></span> 
                        <button style={{margin:'0 20px 0 5px'}} onClick="">Další >></button>
                    </div>
                    : 
                    <div>
                        <span style={{color:'red'}} className="lnr lnr-sad"></span>
                        <div>Správné řešení: {this.state.phrase}</div>
                        <button style={{margin:'0 20px 0 5px'}} onClick="">Další >></button>
                     </div>
               ) :  <button style={{margin:'0 20px 0 5px'}} onClick={(e)=> this.checkAnswer(e)}>Kontrola správnosti</button> 
              
          }
         

      </div>
    )

}
};

export default CompilePhrase;

/**
 * Plán - do store se vygeneruje test - s klíčema, stavem zodpovezeno - zobrazovat se bude první, který není zodpovězený (pokud fráze, pak tento test, jinak podle úrovně)
 * jakmile se tento ukol splní - klikne se na další, pak se k tomuto klíči přidá zodpovezeno a tak se zobrazí další úkol + před zobrazením se pripocítá show u slova ve dictionary
 * při přechodu na test dat do url klic slova/fraze
 * 
 * splněno v pořádku - pridat k dictionary do statistiky +1 na ok
 */