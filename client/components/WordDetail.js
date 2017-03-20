import React from 'react';
import Word from './Word';
import ReactPlayer from 'react-player';
import {convertArrayToString, convertStringToArray} from '../helpers/dictionary';

const WordDetail = React.createClass({

handleChange(e, key){
    e.preventDefault();
    console.log("WORD-DETAIL / handleChange")
    console.log("došlo k uprave slova");
    const actualWord = this.props.dictionary[i];
    console.log("upravene slovo: ", actualWord);

    let updatedWord = (     
        (e.target.name === 'meaningCZ' | e.target.name === 'theme') ?
            {
                ...actualWord,
                [e.target.name]:convertStringToArray(e.target.value)
            } :
            {
                ...actualWord,
                [e.target.name]:e.target.value
            } //pokud checkbox
    )
    console.log("změna na: ", updatedWord);
    console.log("i: ", i);
    this.props.actions.updateWordFirebase(key, updatedWord);
},

  render() {
    const i = this.props.dictionary.findIndex((word)=> word.id == this.props.params.wordId);
    const word=this.props.dictionary[i];

    const optionType = Object
					.keys(this.props.settings.types)
					.map((type) => {
						return <option value={this.props.settings.types[type].typeId} key={this.props.settings.types[type].typeId}>{this.props.settings.types[type].name}</option>
					});

const moreInfoUrl = "http://www.spanishdict.com/conjugate/"+word.meaningES;
console.log(moreInfoUrl);         

    return (
      /*<form  key={i} i={i} className="word-detail" onChange={(e) => this.props.actions.updateValue(i,e.target.name, e.target.type === 'checkbox' ? e.target.checked : e.target.value )}>*/
<form  key={i} i={i} className="word-detail" onChange={(e) => this.handleChange(e, i)}>
        <div className="box">
            <div className="word-control">
            <a target="_blank" title="spanish dictionary" href={moreInfoUrl}><span className="lnr lnr-question-circle"></span></a>
            </div>
            <div className="row">
                <label >ES:</label>
                <input type="text" name="meaningES" ref={(input) => this.meaningES = (input)} value={word.meaningES}/>
            </div>
            <div className="row">
                <label >CZ:</label>
                <input type="text" name="meaningCZ" placeholder="oddělit významy ; " ref={(input) => this.meaningCZ = (input)} value={convertArrayToString(word.meaningCZ)}/>
            </div>
            <div className="row">
                <label >EN:</label>
                <input type="text" name="meaningEN" ref={(input) => this.meaningEN = (input)} value={word.meaningEN}/>
            </div>
        </div>
        <div className="box">
            <div className="row">
                <label >userFavorite:</label>
                 <input type="checkbox" name="favorite" ref={(input) => this.favorite = input}  checked={word.favorite}/>
            </div>

            <div className="row">
                <label>Theme:</label>
                <input type="text" name="theme" ref={(input) => this.theme = (input)} value={convertArrayToString(word.theme)} />
            </div>

            <div className="row">
                <label>Type: </label>
                <select name="type" placeholder="Type" value={word.type} >
				    {optionType}
                </select>
            </div>

            <div className="row">
                <label>Genus: </label>
                <select name="genus" placeholder="Genus" value={word.genus} >
                    <option value="">--</option>
				    <option value="el">el</option>
                    <option value="la">la</option>
                </select>                
            </div>

            <div className="row">
                
            </div>
              
            
        </div>
        
      </form>
    );
  }
});

export default WordDetail;